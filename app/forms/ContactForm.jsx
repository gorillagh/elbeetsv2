"use client";
import React from "react";
import Box from "@mui/material/Box";
import InputField from "../components/Inputs/InputField";
import ActionButton from "../components/Buttons/ActionButton";
import { useFormState, useFormStatus } from "react-dom";
import { sendMessage } from "../lib/actions";
import Typography from "@mui/material/Typography";

export default function ContactForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(sendMessage, initialState);

  return (
    <Box component="form" action={dispatch}>
      <Fields state={state} />
      <SendButton />
    </Box>
  );
}

const Fields = ({ state }) => {
  const { pending } = useFormStatus();
  return (
    <>
      <InputField
        type="text"
        label="Name"
        name="userName"
        id="userName"
        errorId="name-error"
        // required
        disabled={pending}
        aria-describedby="name-error"
        state={state}
      />

      <InputField
        type="email"
        label="Email"
        name="email"
        id="userEmail"
        // required
        disabled={pending}
        errorId="email-error"
        aria-describedby="email-error"
        state={state}
      />
      <InputField
        type="text"
        label="Message"
        multiline
        rows={5}
        name="message"
        id="message"
        // required
        disabled={pending}
        errorId="message-error"
        aria-describedby="message-error"
        state={state}
      />
    </>
  );
};

const SendButton = () => {
  const { pending } = useFormStatus();
  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      <ActionButton
        type="submit"
        text="submit"
        color="primary"
        fullWidth={false}
        variant="outlined"
        disabled={pending}
      />
    </Box>
  );
};
