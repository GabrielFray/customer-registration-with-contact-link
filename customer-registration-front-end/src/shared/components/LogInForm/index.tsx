import * as React from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { ContentButton, LogInContent, ContentTitle } from "./styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Google, Facebook } from "@mui/icons-material";

const LogInForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <LogInContent>
      <ContentTitle>
        <h2>Log in to your Account</h2>
        <span>Welcome back! Select method to log in</span>
      </ContentTitle>
      <ContentButton>
        <Button variant="outlined" startIcon={<Google />}>
          Google
        </Button>
        <Button variant="outlined" endIcon={<Facebook />}>
          Facebook
        </Button>
      </ContentButton>
      <div>
        <p></p>
        <span>or continue with email</span>
        <p></p>
      </div>
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
      <div>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember me"
        />
        <span>Forgot Password?</span>
      </div>
      <Button variant="contained">Log in</Button>
      <p>
        Don't have an account? <span>Create an account</span>
      </p>
    </LogInContent>
  );
};

export default LogInForm;
