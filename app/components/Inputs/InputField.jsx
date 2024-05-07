import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const InputField = (props) => {
  return (
    <FormControl variant="outlined" fullWidth sx={{ my: 1 }}>
      <TextField
        error={props.error}
        label={props.label}
        type={props.type}
        helperText={props.helperText}
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
};

InputField.defaultProps = {
  label: "text",
  type: "text",
};
export default InputField;
