"use client";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ToastAlert = (props) => {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={props.autoHideDuration}
      onClose={props.onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert onClose={props.onClose} severity={props.severity}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

ToastAlert.defaultProps = {
  autoHideDuration: 4000,
  message: "This is a toast notification",
  severity: "success",
  // open: true,
};

export default ToastAlert;
