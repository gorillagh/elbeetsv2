import React from "react";
import PricingCard from "@/app/components/Cards/PricingCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function BasicPricingSection() {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" mb={6}>
        <Typography variant="sectionHeader">Basic Pricing</Typography>
      </Box>
      <Grid container spacing={{ xs: 6, md: 12 }} disableEqualOverflow={true}>
        <Grid
          item
          md={4}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <PricingCard
            title="Transcription"
            bodyText="Video & Audio"
            href="/services/transcription"
          />
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <PricingCard
            title="Captionining"
            price="$1.5"
            bodyText="Video"
            href="/services/captioning"
          />
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <PricingCard
            title="Translation"
            bodyText="Video & Audio"
            href="/services/translation"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
