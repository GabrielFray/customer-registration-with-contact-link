import * as React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ContentHeader, ContentModal, ContentModalForm } from "./styles";
import { Clear } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { ContactContext } from "../../context/ContactContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formRegisterContactSchema } from "../../validators";
import { IContactData } from "../../interfaces";

const ModalCreateContact = () => {
  const { createContact, setCreateContactModal } =
    React.useContext(ContactContext);

  const rootRef = React.useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactData>({
    resolver: yupResolver(formRegisterContactSchema),
  });

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
        container={() => rootRef.current}
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
              Create contact
            </Typography>
            <IconButton
              sx={{ p: "10px" }}
              aria-label="menu"
              onClick={() => setCreateContactModal(false)}
            >
              <Clear />
            </IconButton>
          </ContentHeader>
          <ContentModalForm onSubmit={handleSubmit(createContact)}>
            <TextField
              id="standard-name"
              label="Name"
              variant="standard"
              error={Boolean(errors.name)}
              {...register("name")}
            />
            <TextField
              id="standard-email"
              label="Email"
              variant="standard"
              error={Boolean(errors.email)}
              {...register("email")}
            />
            <TextField
              id="standard-telephone"
              label="Telephone"
              variant="standard"
              error={Boolean(errors.telephone)}
              {...register("telephone")}
            />
            <Button type="submit" variant="contained">
              Done
            </Button>
          </ContentModalForm>
        </Box>
      </Modal>
    </ContentModal>
  );
};

export default ModalCreateContact;
