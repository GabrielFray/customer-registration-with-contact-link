import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/session" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMain;
