import * as React from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Google, Facebook } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import {
  ContentButton,
  LogInContent,
  ContentTitle,
  ContinueWith,
  ContentRemember,
  ForgotPassword,
  CreateAccount,
} from "./styles";
import Carousel from "../CarouselLogin";

const LogInForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

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
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <FormControl>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
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
          }
          label="Password"
        />
      </FormControl>
      <ContentRemember>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember me"
        />
        <ForgotPassword>Forgot Password?</ForgotPassword>
      </ContentRemember>
      <Button variant="contained">Log in</Button>
      <CreateAccount>
        Don't have an account? <span>Create an account</span>
      </CreateAccount>
    </LogInContent>
  );
};

export default LogInForm;
