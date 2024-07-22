"use client";
import React, { useState, useEffect } from "react";
import ActionButton from "@/app/components/Buttons/ActionButton";
import InputField from "@/app/components/Inputs/InputField";
import PasswordField from "@/app/components/Inputs/PasswordField";
import BodyLink from "@/app/components/Links/BodyLink";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useFormState, useFormStatus } from "react-dom";
import { registerUser, signInWithGoogle } from "@/app/lib/authActions";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingSpin from "../../components/Feebacks/CircularProgress";

export default function RegisterForm(props) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(registerUser, initialState);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/user/dashboard";

  useEffect(() => {
    state?.error && toast.error(state.error);
    state?.response?.success && toast.success(state.response.message);
  }, [state]);

  return (
    <Box width={{ md: "40%" }} mx="auto" my={6}>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          signInWithGoogle(callbackUrl);
        }}
      >
        <ActionButton type="submit" text="With Google" />
      </Box>
      <Divider variant="middle" sx={{ my: 4 }}>
        <Typography variant="subSubheading" color="text.secondary">
          OR
        </Typography>
      </Divider>
      <Box component="form" action={dispatch}>
        <Fields state={state} />
        <SignUpButton />
        {state.error && (
          <Box display="flex" alignItems="center">
            <ErrorOutlineIcon fontSize="small" />{" "}
            <Typography variant="bodyText2" color="error" fontWeight={700}>
              {state.error}
            </Typography>
          </Box>
        )}
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          my={3}
        >
          <BodyLink text="Login" pathname="/login" />
        </Box>
      </Box>
    </Box>
  );
}

const Fields = ({ state }) => {
  const { pending } = useFormStatus();
  return (
    <>
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
      <PasswordField
        disabled={pending}
        required={false}
        name="password"
        id="password"
        errorId="password-error"
        aria-describedby="password-error"
        state={state}
      />
    </>
  );
};

const SignUpButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Box mt={2}>
          <LoadingSpin />
        </Box>
      ) : (
        <ActionButton
          text="Log In"
          color="primary"
          my={3}
          type="submit"
          disabled={pending}
        />
      )}
    </>
  );
};

const BottomLinks = () => {
  const { pending } = useFormState();
  return (
    <>
      {!pending ? (
        ""
      ) : (
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          my={3}
        >
          <BodyLink text="Login" pathname="/login" />
        </Box>
      )}
    </>
  );
};
