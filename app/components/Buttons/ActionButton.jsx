import React from "react";
import Button from "@mui/material/Button";
import { Icon } from "@mui/material";

export default function ActionButton(props) {
  return (
    <Button
      type={props.type}
      fullWidth
      variant={props.variant || "contained"}
      color={props.color || "secondary"}
      size={props.size}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      sx={{
        my: props.my,
        mx: props.mx,
        fontSize: props.fontSize || "1.1rem",
        borderRadius: 5,
        textTransform: "capitalize",
        color: props.variant !== "contained" ? "" : "#fff",
        backgroundColor: props.backgroundColor,
        boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        "&:hover": {
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
      }}
      {...props}
    >
      {props.leftIcon && props.leftIcon.length && (
        <Icon sx={{ mr: 1 }} fontSize="small">
          {props.leftIcon}
        </Icon>
      )}{" "}
      {props.text}
      {props.rightIcon && props.rightIcon.length && (
        <Icon sx={{ ml: 1 }} fontSize="small">
          {props.rightIcon}
        </Icon>
      )}
    </Button>
  );
}
