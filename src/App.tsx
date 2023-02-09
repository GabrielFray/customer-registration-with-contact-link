import Routes from "./shared/routes";
import { ToastContainer } from "react-toastify";
import UserProvider from "./shared/context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Routes></Routes>
      <ToastContainer
        position={"top-right"}
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </UserProvider>
  );
};

export default App;
