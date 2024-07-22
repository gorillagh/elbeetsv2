import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import TeamMemeberCard from "@/app/components/Cards/TeamMemeberCard";

export default function TeamSection() {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" mb={6}>
        <Typography variant="sectionHeader">Meet Our Team</Typography>
      </Box>
      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }} disableEqualOverflow={true}>
          <Grid
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <TeamMemeberCard title="Nana Kwame Mensah" />
          </Grid>
          <Grid
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <TeamMemeberCard
              title="Sarah Rodriguez"
              subheader="(Chief Operating Officer)"
            />
          </Grid>
          <Grid
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <TeamMemeberCard
              title="Ron Williams"
              subheader="(Co-founder and Chief Technology Officer)"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
