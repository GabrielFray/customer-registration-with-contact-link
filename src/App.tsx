import Routes from "./shared/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./shared/context/UserContext";
import ContactProviderContext from "./shared/context/ContactContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <ContactProviderContext>
          <ToastContainer
            position={"top-right"}
            autoClose={1000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
          />
          <Routes></Routes>
        </ContactProviderContext>
      </UserProvider>
    </>
  );
};

export default App;
