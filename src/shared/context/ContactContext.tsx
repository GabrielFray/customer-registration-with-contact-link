import * as React from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { IContactData, IProps } from "../interfaces";

export const ContactContext = React.createContext({} as IContactContext);

interface IContactContext {
  createContact: (data: IContactData) => void;

  updateContact: (data: IContactData, id: string) => void;

  deleteContact: (id: string) => void;

  contacts: IContactData[];

  setContacts: React.Dispatch<React.SetStateAction<IContactData[]>>;

  createContactModal: boolean;

  setCreateContactModal: React.Dispatch<React.SetStateAction<boolean>>;

  updateContactModal: boolean;

  setUpdateContactModal: React.Dispatch<React.SetStateAction<boolean>>;

  contactValues: IContactData;

  setContactValues: React.Dispatch<React.SetStateAction<{}>>;

  request: string;
}

const ContactProviderContext = ({ children }: IProps) => {
  const token = localStorage.getItem("@GetInTouch:token");

  const [contacts, setContacts] = React.useState<IContactData[]>([]);

  const [request, setRequest] = React.useState<string>("");

  const [createContactModal, setCreateContactModal] =
    React.useState<boolean>(false);

  const [updateContactModal, setUpdateContactModal] =
    React.useState<boolean>(false);

  const [contactValues, setContactValues] = React.useState<any>();

  const createContact = (data: IContactData) => {
    api
      .post("/contact", data, {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then((res) => {
        toast.success("Contact successfully created", {
          toastId: 1,
        });
        setCreateContactModal(false);
        setContacts([...contacts, res.data]);
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
        setRequest((old) => old + "1");
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
        setUpdateContactModal(false);
        setRequest((old) => old + "2");
      });
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
        request,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProviderContext;
