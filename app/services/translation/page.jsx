import React from "react";
import Box from "@mui/material/Box";
import TranscriptionHeroSection from "@/app/sections/transcription/HeroTranscription";
import TranscriptionScopeSection from "@/app/sections/transcription/ScopeTranscription";
import TranscriptionFeatureSection from "@/app/sections/transcription/FeaturesTranscription";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TranscriptionFAQSection from "@/app/sections/transcription/TranscriptionFAQ";
import Image from "next/image";
import quality from "@/app/images/features/quality.png";
import TranscriptionProcessSection from "@/app/sections/transcription/TranscriptionProcess";
import LinkButton from "@/app/components/Buttons/LinkButton";

export const metadata = {
  title: "Translation",
};

export default function TranslationPage() {
  return (
    <div>
      <Box mb={5} py={12}>
        <TranscriptionHeroSection />
      </Box>
      <Box bgcolor="background.colored" mb={5} py={12}>
        <TranscriptionScopeSection />
      </Box>
      <Box mb={5} py={12}>
        <TranscriptionFeatureSection />
      </Box>
      <Box bgcolor="background.colored" mb={5} py={12}>
        <TranscriptionProcessSection />
      </Box>
      <Box mb={5} py={12}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Image
              src={quality}
              alt="Quality Assurance"
              height={300}
              width={300}
            />
            <Typography variant="subheading" my={4}>
              99.9% Quality Assured
            </Typography>
          </Box>
          <Box width={{ md: "80%" }} mx="auto">
            <Typography variant="bodyText1">
              Our commitment to quality starts with the expertise of our
              transcriptionists and extends to rigorous proofreading and editing
              processes.
            </Typography>
            <Typography variant="bodyText1">
              Your instructions are a valuable part of our process, helping us
              meet your expections.
            </Typography>
            <Typography variant="bodyText1">
              Our quality control process is designed to minimize errors and
              ensure top-notch quality.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box mb={5} py={12} bgcolor="background.colored">
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="sectionHeader">
              Enough said, try it yourself!
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
                p={2}
                text="Order Transcript"
                href="/"
                fontSize="1.3rem"
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box mb={5} py={6}>
        <TranscriptionFAQSection />
      </Box>
    </div>
  );
}
