import { Box, Container, Grid } from "@mui/material";
import ProgressStepper from "./ProgressStepper";

export default function Header() {
  return (
    <Container maxWidth="lg">
      <Box display="flex" alignItems="center" justifyContent="right">
        <Box width={{ xs: "100%", md: "40%" }} mt={2}>
          <ProgressStepper />
        </Box>
      </Box>
    </Container>
  );
}
