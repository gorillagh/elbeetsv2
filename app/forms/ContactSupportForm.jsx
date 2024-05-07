"use client";
import React from "react";
import Box from "@mui/material/Box";
import InputField from "../components/Inputs/InputField";
import ActionButton from "../components/Buttons/ActionButton";
import { useFormState, useFormStatus } from "react-dom";
import { contactSupport } from "../lib/actions";

export default function ContactSupportForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(contactSupport, initialState);

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
        label="How can we help you?"
        multiline
        rows={5}
        name="message"
        id="message"
        disabled={pending}
        errorId="message-error"
        aria-describedby="message-error"
        state={state}
      />
      <InputField
        type="text"
        label="Full Name"
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
        name="phoneNumber"
        id="phoneNumber"
        disabled={pending}
        label="Phone Number"
        errorId="phone-error"
        aria-describedby="phone-error"
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
        disabled={pending}
      />
    </Box>
  );
};
