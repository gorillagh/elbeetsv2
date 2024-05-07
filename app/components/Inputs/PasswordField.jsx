"use client";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function PasswordField(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl fullWidth variant="outlined" required>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="userPassword"
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
        name="password"
        required
        disabled={props.disabled}
        {...props}
      />
      <Box id={props.errorId} aria-live="polite" aria-atomic="true">
        {props.state?.errors?.[props.name] &&
          props.state.errors[props.name].map((error) => {
            return (
              <Box key={error} display="flex" alignItems="center">
                <ErrorOutlineIcon fontSize="small" />{" "}
                <Typography variant="bodyText2" color="error" fontWeight={700}>
                  {error}
                </Typography>
              </Box>
            );
          })}
      </Box>
    </FormControl>
  );
}
