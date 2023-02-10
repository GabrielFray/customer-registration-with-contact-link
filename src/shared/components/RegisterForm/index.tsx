import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
import { StyledLink } from "../LogInForm/styles";
import { IRegisterData } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { formRegisterSchema } from "../../validators";
import { UserContext } from "../../context/UserContext";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  ContentForm,
  ContentTitle,
  LoginAccount,
  RegisterContent,
} from "./styles";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";

const RegisterForm = () => {
  const { onSubmitRegister } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({ resolver: yupResolver(formRegisterSchema) });

  return (
    <RegisterContent>
      <ContentTitle>
        <h2>Register your account now </h2>
        <p>Sign up now for free, and enjoy our platform right now!</p>
      </ContentTitle>
      <ContentForm onSubmit={handleSubmit(onSubmitRegister)}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          error={Boolean(errors.name)}
          {...register("name")}
        />
        <TextField
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={Boolean(errors.password)}
          {...register("password")}
        />
        <TextField
          id="confirmPassword"
          label="Confirm password"
          type={showConfirmPassword ? "text" : "password"}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={Boolean(errors.confirmPassword)}
          {...register("confirmPassword")}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          error={Boolean(errors.email)}
          {...register("email")}
        />
        <TextField
          id="telephone"
          label="Telephone"
          variant="outlined"
          type={"tel"}
          error={Boolean(errors.telephone)}
          {...register("telephone")}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </ContentForm>
      <LoginAccount>
        Already have an account? <StyledLink to={"/session"}>Log in</StyledLink>
      </LoginAccount>
    </RegisterContent>
  );
};

export default RegisterForm;
