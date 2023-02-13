import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import { ILoginData } from "../../interfaces";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { formLoginSchema } from "../../validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { Google, Facebook } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import { UserContext } from "../../context/UserContext";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  ContentButton,
  LogInContent,
  ContentTitle,
  ContinueWith,
  ContentRemember,
  ForgotPassword,
  CreateAccount,
  StyledLink,
  ContentForm,
} from "./styles";

const LogInForm = () => {
  const { onSubmitLogin } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const CustomButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    width: "8rem",
    height: "2.7rem",
    border: "2px solid",
    lineHeight: 1.5,
    borderColor: "#b3b1b16d",

    "&:hover": {
      border: "2px solid #61616172",
      backgroundColor: "transparent",
    },
    "&:focus": {
      borderColor: "#61616172",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({ resolver: yupResolver(formLoginSchema) });

  return (
    <LogInContent>
      <ContentTitle>
        <h2>Log in to your Account</h2>
        <span>Welcome back! Select method to log in</span>
      </ContentTitle>
      <ContentButton>
        <CustomButton variant="outlined" startIcon={<Google />}>
          Google
        </CustomButton>
        <CustomButton variant="outlined" startIcon={<Facebook />}>
          Facebook
        </CustomButton>
      </ContentButton>
      <ContinueWith>
        <div></div>
        <span>or continue with email</span>
        <div></div>
      </ContinueWith>
      <ContentForm onSubmit={handleSubmit(onSubmitLogin)}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          error={Boolean(errors.email)}
          {...register("email")}
        />
        <TextField
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
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
          variant="outlined"
          error={Boolean(errors.password)}
          {...register("password")}
        />
        <ContentRemember>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
          <ForgotPassword>Forgot Password?</ForgotPassword>
        </ContentRemember>
        <Button type="submit" variant="contained">Log in</Button>
      </ContentForm>
      <CreateAccount>
        Don't have an account?{" "}
        <StyledLink to={"/register"}>Create an account</StyledLink>
      </CreateAccount>
    </LogInContent>
  );
};

export default LogInForm;
