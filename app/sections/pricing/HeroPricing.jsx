import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const PricingHeroSection = () => {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center">
        <Typography variant="bigTitle">Flexible Pricing</Typography>
        <Typography variant="subSubheading" my={3}>
          We charge per minute of audio/video files.
        </Typography>
      </Box>
    </Container>
  );
};

export default PricingHeroSection;
