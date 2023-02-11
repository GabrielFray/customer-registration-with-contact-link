import * as React from "react";
import api from "../../services/api";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import { ContentContacts } from "./styles";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { useNavigate } from "react-router-dom";
import { IContactData } from "../../interfaces";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import {
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  SpeedDial,
  Tooltip,
} from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { ContactContext } from "../../context/ContactContext";
import ModalCreateContact from "../ModalCreateContact";
import { AiOutlineEllipsis } from "react-icons/ai";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import ModalUpdateContact from "../ModalUpdateContact";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DashboardContacts = () => {
  const {
    contacts,
    setContacts,
    createContactModal,
    setCreateContactModal,
    createContact,
    updateContactModal,
    setUpdateContactModal,
    setContactValues,
  } = React.useContext(ContactContext);

  const navigate = useNavigate();

  const token = localStorage.getItem("@GetInTouch:token");

  React.useEffect(() => {
    api
      .get("/contact", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setContacts(res.data);
      });
  }, [token, setContacts]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ContentContacts>
      {createContactModal && <ModalCreateContact />}
      {updateContactModal && <ModalUpdateContact />}
      <span>Contacts</span>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
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
                        filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.101))",
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
                    <MenuItem>
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
