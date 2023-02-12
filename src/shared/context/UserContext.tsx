import * as React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILoginData, IProps, IRegisterData, IUpdateData } from "../interfaces";
import api from "../services/api";
import { ContactContext } from "./ContactContext";

export const UserContext = React.createContext({} as IUserContext);

interface IUserContext {
  logout: () => void;

  profileRequest: string;

  updateProfile: boolean;

  setUpdateProfile: React.Dispatch<React.SetStateAction<boolean>>;

  updateModalProfile: boolean;

  setUpdateModalProfile: React.Dispatch<React.SetStateAction<boolean>>;

  onSubmitRegister: (data: IRegisterData) => void;

  onSubmitLogin: (data: ILoginData) => void;

  onSubmitUpdate: (data: IUpdateData) => void;

  userValues: IUpdateData;

  setUserValues: React.Dispatch<React.SetStateAction<{}>>;
}

const UserProvider = ({ children }: IProps) => {
  const navigate = useNavigate();

  const [profileRequest, setProfileRequest] = React.useState<string>("");

  const [updateProfile, setUpdateProfile] = React.useState<boolean>(false);

  const [updateModalProfile, setUpdateModalProfile] =
    React.useState<boolean>(false);

  const [userValues, setUserValues] = React.useState<IUpdateData>({});

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const onSubmitRegister = (data: IRegisterData) => {
    const newData = {
      name: data.name,
      password: data.password,
      email: data.email,
      telephone: data.telephone,
    };
    api
      .post("/user", newData)
      .then(() => {
        toast.success("Account created successfully!", {
          toastId: 1,
        });
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message, {
          toastId: 1,
        });
      });
  };

  const onSubmitLogin = (data: ILoginData) => {
    api
      .post("/session", data)
      .then((res) => {
        localStorage.setItem("@GetInTouch:token", res.data.token);

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);

        toast.success("Logged in successfully, redirecting!", {
          toastId: 1,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          toastId: 1,
        });
      });
  };

  const token = localStorage.getItem("@GetInTouch:token");

  const onSubmitUpdate = (data: IUpdateData) => {
    api
      .patch("/user", data, {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then(() => {
        toast.success("Profile successfully update", {
          toastId: 1,
        });
        setUpdateModalProfile(false);
        setProfileRequest("Profile updated");
      });
  };

  return (
    <UserContext.Provider
      value={{
        profileRequest,
        logout,
        updateProfile,
        setUpdateProfile,
        updateModalProfile,
        setUpdateModalProfile,
        userValues,
        setUserValues,
        onSubmitLogin,
        onSubmitRegister,
        onSubmitUpdate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
