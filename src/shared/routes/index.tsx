import LoginPage from "../../pages/LoginPage";
import { Routes, Route } from "react-router-dom";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default RoutesMain;
