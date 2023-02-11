import { createContext, Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { IContactData, IProps } from "../interfaces";
import api from "../services/api";

export const ContactContext = createContext({} as IContactContext);

interface IContactContext {
  createContact: (data: IContactData) => void;

  updateContact: (data: IContactData, id: string) => void;

  deleteContact: (id: string) => void;

  contacts: [];

  setContacts: Dispatch<SetStateAction<[]>>;

  createContactModal: boolean;

  setCreateContactModal: Dispatch<SetStateAction<boolean>>;

  updateContactModal: boolean;

  setUpdateContactModal: Dispatch<SetStateAction<boolean>>;

  contactValues: IContactData;

  setContactValues: Dispatch<SetStateAction<{}>>;
}

const ContactProviderContext = ({ children }: IProps) => {
  const token = localStorage.getItem("@GetInTouch:token");

  const [contacts, setContacts] = useState<[]>([]);

  const [createContactModal, setCreateContactModal] = useState<boolean>(false);

  const [updateContactModal, setUpdateContactModal] = useState<boolean>(false);

  const [contactValues, setContactValues] = useState<any>();

  const createContact = (data: IContactData) => {
    api
      .post("/contact", data, {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then(() => {
        toast.success("Contact successfully created", {
          toastId: 1,
        });
        setCreateContactModal(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          toastId: 1,
        });
      });
  };

  const updateContact = (data: IContactData, id: string) => {
    api
      .patch(`/contact/${id}`, data, {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then(() => {
        toast.success("Contact successfully update", {
          toastId: 1,
        });
        setUpdateContactModal(false);
      });
  };

  const deleteContact = (id: string) => {
    api
      .delete(`/contact/${id}`, {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then(() => {
        toast.success("Contact successfully delete", {
          toastId: 1,
        });
      });
    setUpdateContactModal(false);
  };
  return (
    <ContactContext.Provider
      value={{
        createContact,
        deleteContact,
        updateContact,
        contacts,
        setContacts,
        createContactModal,
        setCreateContactModal,
        updateContactModal,
        setUpdateContactModal,
        contactValues,
        setContactValues,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProviderContext;
