import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CaptioningHeroSection from "@/app/sections/captioning/HeroCaptioning";
import CaptioningScopeSection from "@/app/sections/captioning/ScopeCaptioning";
import CaptioningFeatureSection from "@/app/sections/captioning/FeaturesCaptioning";
import CaptioningProcessSection from "@/app/sections/captioning/CaptioningProcess";
import CaptioningFAQSection from "@/app/sections/captioning/CaptioningFAQ";
import LinkButton from "@/app/components/Buttons/LinkButton";

export const metadata = {
  title: "Captioning",
};

export default function CaptioningPage() {
  return (
    <div>
      <Box mb={5} py={12}>
        <CaptioningHeroSection />
      </Box>
      <Box bgcolor="background.colored" mb={5} py={12}>
        <CaptioningScopeSection />
      </Box>
      <Box mb={5} py={12}>
        <CaptioningFeatureSection />
      </Box>
      <Box bgcolor="background.colored" mb={5} py={12}>
        <CaptioningProcessSection />
      </Box>

      <Box mb={5} py={12}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="sectionHeader">
              Enhance your content&rsquo;s reach and accessibility for everyone!
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-around"
            mt={6}
            mx={5}
          >
            <Box my={1}>
              <LinkButton
                p={2}
                text="Request a Quote"
                href="/"
                fontSize="1.3rem"
                type="outlined"
              />
            </Box>
            <Box my={1}>
              <LinkButton
                type="primary"
                p={2}
                text="Upload Video File"
                href="/"
                fontSize="1.3rem"
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box mb={5} py={6}>
        <CaptioningFAQSection />
      </Box>
    </div>
  );
}
