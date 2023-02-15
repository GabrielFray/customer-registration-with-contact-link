import * as React from "react";
import { useNavigate } from "react-router-dom";
import DashboardContacts from "../../shared/components/DashboardContacts";
import DashboardHeader from "../../shared/components/DashboardHeader";
import { UserContext } from "../../shared/context/UserContext";
import Profile from "../Profile";
import { ContentDashboard } from "./styles";

const Dashboard = () => {
  const { updateProfile } = React.useContext(UserContext);

  const navigate = useNavigate();

  const token = localStorage.getItem("@GetInTouch:token");

  React.useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
  return (
    <ContentDashboard>
      {updateProfile && <Profile />}
      <DashboardHeader />
      <DashboardContacts />
    </ContentDashboard>
  );
};

export default Dashboard;
