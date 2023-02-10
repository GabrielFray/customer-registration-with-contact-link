import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardContacts from "../../shared/components/DashboardContacts";
import DashboardHeader from "../../shared/components/DashboardHeader";

const Dashboard = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("@GetInTouch:token");
  //   if (!token) {
  //     navigate("/session");
  //   }
  // }, []);
  return (
    <>
      <DashboardHeader />
      <DashboardContacts />
    </>
  );
};

export default Dashboard;
