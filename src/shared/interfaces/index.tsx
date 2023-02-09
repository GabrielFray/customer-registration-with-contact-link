import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
}

export interface IRegisterData {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  telephone: string;
}

export interface ILoginData {
  email: string;
  password: string;
}
