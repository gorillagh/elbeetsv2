import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LoginForm from "@/app/(customer)/forms/LoginForm";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const metadata = {
  title: "Login",
};

export default function Login({ searchParams }) {
  return (
    <Box py={10}>
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="bigTitle">Welcome back!</Typography>
          <Typography variant="subSubheading" my={2}>
            Please log in
          </Typography>
        </Box>

        <Box>
          {searchParams.errorMessage && (
            <Box display="flex" alignItems="center" justifyContent="center">
              <ErrorOutlineIcon fontSize="small" />{" "}
              <Typography variant="bodyText2" color="error" fontWeight={700}>
                {searchParams.errorMessage}
              </Typography>
            </Box>
          )}
          <LoginForm searchParams={searchParams} />
        </Box>
      </Container>
    </Box>
  );
}
