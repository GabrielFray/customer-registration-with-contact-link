import { createContext, Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { IContactData, IProps } from "../interfaces";
import api from "../services/api";

export const ContactContext = createContext({} as IUserContext);

interface IUserContext {
  createContact: (data: IContactData) => void;

  contacts: [];

  setContacts: Dispatch<SetStateAction<[]>>;

  contactModal: boolean;

  setContactModal: Dispatch<SetStateAction<boolean>>;
}

const ContactProviderContext = ({ children }: IProps) => {
  const token = localStorage.getItem("@GetInTouch:token");

  const [contacts, setContacts] = useState<[]>([]);

  const [contactModal, setContactModal] = useState<boolean>(false);

  const createContact = (data: IContactData) => {
    api
      .post("/contact", data, {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then(() => {
        toast.success("Contact successfully created", {
          toastId: 1,
        });
        setContactModal(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          toastId: 1,
        });
      });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        createContact,
        contactModal,
        setContactModal,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProviderContext;
