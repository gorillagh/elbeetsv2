"use client";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function ToastAlert(props) {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={props.autoHideDuration || 4000}
      onClose={props.onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert onClose={props.onClose} severity={props.severity || "success"}>
        {props.message || "This is a toast notification"}
      </Alert>
    </Snackbar>
  );
}

// ToastAlert.defaultProps = {
//   autoHideDuration: 4000,
//   message: "This is a toast notification",
//   severity: "success",
//   // open: true,
// };
