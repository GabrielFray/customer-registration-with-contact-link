import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Avatar, Box, IconButton } from "@mui/material";
import { FaEllipsisV } from "react-icons/fa";
import { ContentAvatar, ProfileHeader, ProfileModal } from "./styles";
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api";
import { IUpdateData } from "../../interfaces";
import { ContactContext } from "../../context/ContactContext";
import ModalUpdateProfile from "../ModalUpdateProfile";

const UpdateProfile = () => {
  const {
    setUpdateProfile,
    updateModalProfile,
    setUpdateModalProfile,
    setUserValues,
    profileRequest,
  } = React.useContext(UserContext);

  const [user, setUser] = React.useState<IUpdateData>({});

  const token = localStorage.getItem("@GetInTouch:token");

  React.useEffect(() => {
    api
      .get("/user/self", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
      });
  }, [token, setUser, profileRequest, setUpdateModalProfile]);

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <ProfileModal>
      {updateModalProfile && <ModalUpdateProfile />}
      <ProfileHeader>
        <nav>
          <IconButton onClick={() => setUpdateProfile(false)}>
            <ArrowBackIosIcon />
          </IconButton>
          <h2>My account</h2>
          <IconButton
            size="medium"
            onClick={() => {
              setUpdateModalProfile(true);
              setUserValues({
                name: user.name,
                telephone: user.telephone,
                password: user.password,
              });
            }}
          >
            <FaEllipsisV />
          </IconButton>
        </nav>
        <ContentAvatar>
          <Avatar sx={{ width: 150, height: 150 }} />
          <span>{user.name}</span>
        </ContentAvatar>
      </ProfileHeader>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          height: "60%",
          bgcolor: "#ffffff0",
          borderTop: "2px solid rgba(0, 0, 0, 0.124);",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText primary="Account settings" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocalPhoneIcon />
              </ListItemIcon>
              <ListItemText
                primary="Telephone"
                secondary={
                  user && user.telephone
                    ? user.telephone.replace(
                        /(\d{2})(\d{5})(\d{4})/,
                        "($1) $2-$3"
                      )
                    : "99 99999-9999"
                }
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Email" secondary={user.email} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Name" secondary={user.name} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </ProfileModal>
  );
};
export default UpdateProfile;
