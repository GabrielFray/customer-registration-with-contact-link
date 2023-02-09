import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILoginData, IProps, IRegisterData } from "../interfaces";
import api from "../services/api";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  onSubmitRegister: (data: IRegisterData) => void;

  onSubmitLogin: (data: ILoginData) => void;

  logout: () => void;
}

const UserProvider = ({ children }: IProps) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("@GetInTouch:token");
  //   if (!token) {
  //     navigate("/");
  //   }
  // }, []);

  const onSubmitRegister = (data: IRegisterData) => {
    const newData = {
      name: data.name,
      password: data.password,
      email: data.email,
      telephone: data.telephone,
    };
    console.log(newData);
    api
      .post("/user", newData)
      .then(() => {
        navigate("/session");
        toast.success("Account created successfully!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const onSubmitLogin = (data: ILoginData) => {
    api
      .post("/session", data)
      .then((res) => {
        localStorage.setItem("@GetInTouch:token", res.data.token);
        localStorage.setItem("@GetInTouch:user", JSON.stringify(res.data.user));

        navigate("/dashboard");

        toast.success("Logged in successfully, redirecting!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <UserContext.Provider value={{ onSubmitLogin, onSubmitRegister, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
