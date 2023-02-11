import * as React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Clear } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { ContactContext } from "../../context/ContactContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContactData } from "../../interfaces";

import {
  ContentHeader,
  ContentModal,
  ContentModalForm,
} from "../ModalCreateContact/styles";

const ModalUpdateContact = () => {
  const { setUpdateContactModal, updateContact, contactValues } =
    React.useContext(ContactContext);

  const { register, handleSubmit } = useForm<IContactData>();

  const handleEdit = (data: IContactData) => {
    if (contactValues.id) {
      updateContact(data, contactValues.id);
    }
  };

  return (
    <ContentModal>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        sx={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "25rem",
            height: "25rem",
            borderRadius: "1rem 1rem 0 0",
            bgcolor: "background.paper",
            boxShadow: (theme) => theme.shadows[5],
            p: 4,
          }}
        >
          <ContentHeader>
            <Typography id="server-modal-title" variant="h6" component="h2">
              Update contact
            </Typography>
            <IconButton
              sx={{ p: "10px" }}
              aria-label="menu"
              onClick={() => setUpdateContactModal(false)}
            >
              <Clear />
            </IconButton>
          </ContentHeader>
          <ContentModalForm onSubmit={handleSubmit(handleEdit)}>
            <TextField
              id="standard-name"
              label="Name"
              variant="standard"
              defaultValue={contactValues.name}
              {...register("name")}
            />
            <TextField
              id="standard-email"
              label="Email"
              variant="standard"
              defaultValue={contactValues.email}
              {...register("email")}
            />
            <TextField
              id="standard-telephone"
              label="Telephone"
              variant="standard"
              defaultValue={contactValues.telephone}
              {...register("telephone")}
            />
            <Button type="submit" variant="contained">
              Save editions
            </Button>
          </ContentModalForm>
        </Box>
      </Modal>
    </ContentModal>
  );
};

export default ModalUpdateContact;
