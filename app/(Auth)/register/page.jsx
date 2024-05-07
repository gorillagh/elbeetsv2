import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import RegisterForm from "@/app/forms/RegisterForm";
export const metadata = {
  title: "Sign Up",
};

const Register = () => {
  return (
    <Box py={10}>
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="bigTitle">Sign Up</Typography>
        </Box>

        <Box>
          <RegisterForm />
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
