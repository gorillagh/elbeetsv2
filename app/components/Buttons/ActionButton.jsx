import React from "react";
import Button from "@mui/material/Button";

const ActionButton = (props) => {
  return (
    <Button
      type={props.type}
      fullWidth
      variant={props.variant}
      color={props.color}
      size={props.size}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      sx={{
        my: props.my,
        mx: props.mx,
        fontSize: props.fontSize,
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
      {props.text}
    </Button>
  );
};

ActionButton.defaultProps = {
  variant: "contained",
  color: "secondary",
  fontSize: "1.1rem",
};

export default ActionButton;
