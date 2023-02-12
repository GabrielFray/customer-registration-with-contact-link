import * as React from "react";
import { useNavigate } from "react-router-dom";
import DashboardContacts from "../../shared/components/DashboardContacts";
import DashboardHeader from "../../shared/components/DashboardHeader";
import UpdateProfile from "../../shared/components/UpdateProfile";
import { UserContext } from "../../shared/context/UserContext";
import { ContentDashboard } from "./styles";

const Dashboard = () => {
  const { updateProfile } = React.useContext(UserContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("@GetInTouch:token");
    if (!token) {
      navigate("/session");
    }
  }, []);
  return (
    <ContentDashboard>
      {updateProfile && <UpdateProfile />}
      <DashboardHeader />
      <DashboardContacts />
    </ContentDashboard>
  );
};

export default Dashboard;
