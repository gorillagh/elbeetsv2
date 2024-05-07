import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputField from "@/app/components/Inputs/InputField";
import ActionButton from "@/app/components/Buttons/ActionButton";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const metadata = {
  title: "Sign Up",
};

const RegisterComplete = () => {
  return (
    <Box py={10}>
      <Container maxWidth="lg">
        <Box mb={3}>
          <IconButton>
            <ArrowBackIcon fontSize="large" color="error" />
          </IconButton>
        </Box>
        <Box textAlign="center">
          <Typography variant="bigTitle">Complete Sign Up</Typography>
          <Typography variant="subSubheading" my={2}>
            Enter the verification code sent to{" "}
            <Typography
              component="span"
              variant="subSubheading"
              fontWeight={700}
              color="primary"
            >
              email@email.com
            </Typography>
          </Typography>
        </Box>

        <Box width={{ md: "40%" }} mx="auto" my={6}>
          <InputField type="password" label="Verification Code" />
          <ActionButton text="Sign Up" color="primary" my={3} />
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterComplete;
