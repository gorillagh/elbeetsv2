import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import StorySection from "@/app/sections/about/Story";
import TeamSection from "@/app/sections/about/Team";
import TeamValuesSection from "@/app/sections/about/TeamValues";
import ActionButton from "@/app/components/Buttons/ActionButton";
import ContactSection from "@/app/sections/home/Contact";
import LinkButton from "../components/Buttons/LinkButton";

export const metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <div>
      <Box bgcolor="background.colored" mb={5} py={12}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="bigTitle">About Elbee-TS</Typography>
            <Box width="70%" mx="auto">
              <Typography variant="subSubheading" my={3}>
                More than just a transcription service provider; Your trusted
                partner in converting spoken words into written text. get to
                know us, our team and our mission.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box mb={5} py={12}>
        <StorySection />
      </Box>
      <Box bgcolor="background.colored" mb={5} py={12}>
        <TeamSection />
      </Box>
      <Box mb={5} py={12}>
        <TeamValuesSection />
      </Box>
      <Box bgcolor="background.colored" mb={5} py={6}>
        <Container maxWidth="lg">
          <Typography mb={6} textAlign="center" variant="sectionHeader">
            What do you want to do with us today?
          </Typography>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-around"
            mx={5}
            mb={3}
          >
            <Box my={1}>
              <LinkButton
                p={2}
                text="Get a Quote"
                href="/"
                fontSize="1.3rem"
                type="outlined"
              />
            </Box>
            <Box my={1}>
              <LinkButton p={2} text="Order Now" href="/" fontSize="1.3rem" />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box id="contact-section" mb={5} py={12}>
        <ContactSection />
      </Box>
    </div>
  );
};

export default AboutPage;
