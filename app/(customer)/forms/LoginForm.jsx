"use client";
import React, { useEffect } from "react";
import ActionButton from "@/app/components/Buttons/ActionButton";
import InputField from "@/app/components/Inputs/InputField";
import PasswordField from "@/app/components/Inputs/PasswordField";
import BodyLink from "@/app/components/Links/BodyLink";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate, signInWithGoogle } from "@/app/lib/authActions";
import { useRouter, useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpin from "../../components/Feebacks/CircularProgress";

export default function LoginForm(props) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(authenticate, initialState);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/user/dashboard";
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  props.searchParams?.errorMessage &&
    toast.error(props.searchParams.errorMessage);

  return (
    <Box width={{ md: "40%" }} mx="auto" my={6}>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          signInWithGoogle(callbackUrl);
        }}
      >
        <ActionButton text="With Google" type="submit" />
      </Box>
      <Divider variant="middle" sx={{ my: 4 }}>
        <Typography variant="subSubheading" color="text.secondary">
          OR
        </Typography>
      </Divider>
      <Box component="form" action={dispatch}>
        <Fields callbackUrl={callbackUrl} />
        <LoginButton />
        {state?.errorMessage && (
          <>
            <Typography variant="bodyText2" color="error" fontWeight={700}>
              {state.errorMessage}
            </Typography>
          </>
        )}
        {state?.success && <p>{state.data}</p>}
        <BottomLinks />
      </Box>
    </Box>
  );
}

const Fields = ({ callbackUrl }) => {
  const { pending } = useFormStatus();
  return (
    <>
      <Box visibility="hidden">
        <InputField type="hidden" name="callbackUrl" value={callbackUrl} />
      </Box>
      <InputField
        type="email"
        label="Email"
        name="email"
        id="userEmail"
        required
        disabled={pending}
      />
      <PasswordField disabled={pending} />
    </>
  );
};

const LoginButton = () => {
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
  const { pending } = useFormStatus();
  return (
    <>
      {!pending && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={3}
        >
          <BodyLink
            text="Forgot Password"
            pathname="password/forgot"
            color="error"
            textDecoration="none"
          />
          <BodyLink text="Sign Up" pathname="/register" />
        </Box>
      )}
    </>
  );
};
