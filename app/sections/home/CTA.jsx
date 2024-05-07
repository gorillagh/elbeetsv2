import React from "react";
import ActionButton from "@/app/components/Buttons/ActionButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LinkButton from "@/app/components/Buttons/LinkButton";

const CTASection = () => {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center">
        <Typography variant="sectionHeader" color="primary.dark">
          Whatever it is, we transcribe it all!
        </Typography>
        <Typography variant="subSubheading" my={3}>
          Academia, medical, enterprise, bulk files...
        </Typography>
      </Box>
      <Box mt={6}>
        <Grid container spacing={{ xs: 2, md: 3 }} disableEqualOverflow={true}>
          <Grid item xs={12} md={6}>
            <Box width={{ md: "70%" }} mx="auto">
              <LinkButton
                text="Request a Quote"
                type="outlined"
                fontSize="1.3rem"
                href="/"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width={{ md: "70%" }} mx="auto">
              <LinkButton text="Get Started" fontSize="1.3rem" href="/" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CTASection;
