import * as React from "react";
import Lottie from "react-lottie";
import api from "../../services/api";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { IContactData } from "../../interfaces";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import { AiOutlineEllipsis } from "react-icons/ai";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";
import ModalUpdateContact from "../ModalUpdateContact";
import ModalCreateContact from "../ModalCreateContact";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { ContactContext } from "../../context/ContactContext";
import noContacts from "../../../../public/assets/contacts.json";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import { ContentContacts, ContentImage, ContentSpan, NoContacts } from "./styles";
import {
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  SpeedDial,
  Tooltip,
} from "@mui/material";

const DashboardContacts = () => {
  const {
    contacts,
    setContacts,
    createContactModal,
    setCreateContactModal,
    updateContactModal,
    setUpdateContactModal,
    setContactValues,
    contactValues,
    deleteContact,
    request,
  } = React.useContext(ContactContext);

  const token = localStorage.getItem("@GetInTouch:token");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  React.useEffect(() => {
    api
      .get("/contact", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setContacts(res.data);
      });
  }, [token, request]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: noContacts,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const recentContacts = contacts
    .sort((a: IContactData, b: IContactData) => {
      const updatedAtA = a.updatedAt
        ? new Date(a.updatedAt)
        : new Date("1900-01-01T00:00:00.000Z");
      const updatedAtB = b.updatedAt
        ? new Date(b.updatedAt)
        : new Date("1900-01-01T00:00:00.000Z");
      return updatedAtB.getTime() - updatedAtA.getTime();
    })
    .slice(0, 3);

  return (
    <ContentContacts>
      {createContactModal && <ModalCreateContact />}
      {updateContactModal && <ModalUpdateContact />}
      {contacts.length > 0 ? (
        <List
          sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
        >
          <ContentSpan>Recents</ContentSpan>
          {recentContacts.map((contact) => (
            <div key={contact.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={`${contact.name}`} src={`${contact.name}`} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${contact.name}`}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        +55{" "}
                        {contact.telephone.replace(
                          /(\d{2})(\d{5})(\d{4})/,
                          "($1) $2-$3"
                        )}
                      </Typography>
                      {` `}
                    </React.Fragment>
                  }
                />
                <Box aria-label="menu">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={(event) => {
                          handleClick(event);
                          setContactValues({
                            id: contact.id,
                            name: contact.name,
                            email: contact.email,
                            telephone: contact.telephone,
                          });
                        }}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        <AiOutlineEllipsis />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={() => handleClose()}
                    onClick={() => handleClose()}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.101))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem
                      onClick={() => {
                        setUpdateContactModal(true);
                      }}
                    >
                      <ListItemIcon>
                        <EditIcon fontSize="medium" />
                      </ListItemIcon>
                      Update
                    </MenuItem>
                    <Divider />
                    <MenuItem
                      onClick={() => {
                        if (contactValues.id) {
                          deleteContact(contactValues.id);
                        }
                      }}
                    >
                      <ListItemIcon>
                        <DeleteIcon fontSize="medium" />
                      </ListItemIcon>
                      Delete
                    </MenuItem>
                  </Menu>
                </Box>
              </ListItem>
              <Divider variant="middle" component="li" />
            </div>
          ))}
          <ContentSpan>Contacts</ContentSpan>
          {contacts!.map((elem: IContactData) => {
            return (
              <div key={elem.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={`${elem.name}`} src={`${elem.name}`} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${elem.name}`}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          +55{" "}
                          {elem.telephone.replace(
                            /(\d{2})(\d{5})(\d{4})/,
                            "($1) $2-$3"
                          )}
                        </Typography>
                        {` `}
                      </React.Fragment>
                    }
                  />
                  <Box aria-label="menu">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Tooltip title="Account settings">
                        <IconButton
                          onClick={(event) => {
                            handleClick(event);
                            setContactValues({
                              id: elem.id,
                              name: elem.name,
                              email: elem.email,
                              telephone: elem.telephone,
                            });
                          }}
                          size="small"
                          sx={{ ml: 2 }}
                          aria-controls={open ? "account-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                        >
                          <AiOutlineEllipsis />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={() => handleClose()}
                      onClick={() => handleClose()}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter:
                            "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.101))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem
                        onClick={() => {
                          setUpdateContactModal(true);
                        }}
                      >
                        <ListItemIcon>
                          <EditIcon fontSize="medium" />
                        </ListItemIcon>
                        Update
                      </MenuItem>
                      <Divider />
                      <MenuItem
                        onClick={() => {
                          if (contactValues.id) {
                            deleteContact(contactValues.id);
                          }
                        }}
                      >
                        <ListItemIcon>
                          <DeleteIcon fontSize="medium" />
                        </ListItemIcon>
                        Delete
                      </MenuItem>
                    </Menu>
                  </Box>
                </ListItem>
                <Divider variant="middle" component="li" />
              </div>
            );
          })}
        </List>
      ) : (
        <NoContacts>
          <h2>No registered contacts</h2>
          <ContentImage>
            <Lottie options={defaultOptions} />
          </ContentImage>
        </NoContacts>
      )}
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: "fixed", zIndex: 0, bottom: 16, right: 16 }}
        icon={<GroupAddRoundedIcon />}
        onClick={() => setCreateContactModal(true)}
      />
    </ContentContacts>
  );
};

export default DashboardContacts;
