import { ContentContacts } from "./styles";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { ContactContext } from "../../context/ContactContext";
import { IContactData } from "../../interfaces";

const DashboardContacts = () => {
  const { contacts, setContacts } = React.useContext(ContactContext);

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

  return (
    <ContentContacts>
      <span>Contacts</span>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {contacts!.map((elem: IContactData) => {
          return (
            <div key={elem.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={`${elem.name}`}
                    src="/static/images/avatar/1.jpg"
                  />
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
                        +55 {elem.telephone}
                      </Typography>
                      {` - Contact`}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="middle" component="li" />
            </div>
          );
        })}
      </List>
    </ContentContacts>
  );
};

export default DashboardContacts;
