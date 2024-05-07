import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StepCard from "@/app/components/Cards/StepCard";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PaymentIcon from "@mui/icons-material/Payment";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import BodyLink from "@/app/components/Links/BodyLink";
import LinkButton from "@/app/components/Buttons/LinkButton";

const iconStyle = { color: "#ecae53", fontSize: "3rem" };

const steps = [
  {
    number: 1,
    icon: <TouchAppIcon sx={iconStyle} />,
    title: "Select Service Type",
    description: "Choose required(Transcription, Captioning or Translation.",
  },
  {
    number: 2,
    icon: <CloudUploadIcon sx={iconStyle} />,
    title: "Upload File/Add Link",
    description: "Video/Audio upload and customize to fit your needs.",
  },
  {
    number: 3,
    icon: <PaymentIcon sx={iconStyle} />,
    title: "Pay",
    description:
      "Fast, flexible and secure payment. PayPal, credit/debit card.",
  },
  {
    number: 4,
    icon: <FileDownloadIcon sx={iconStyle} />,
    title: "Download file",
    description: "Visit your dashboard to access and download your transcript.",
  },
];

const HowItWorksSection = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="sectionHeader"
        color="primary.dark"
        textAlign="center"
      >
        It&rsquo;s Simple
      </Typography>
      <Box my={{ xs: 6, md: 8 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} disableEqualOverflow={true}>
          {steps.map((step, index) => (
            <Grid
              key={index}
              xs={12}
              md={3}
              display="flex"
              justifyContent="center"
              //   alignItems="center"
            >
              <Box>
                <StepCard
                  number={step.number}
                  icon={step.icon}
                  title={step.title}
                  bodyText={step.description}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="right" alignItems="center">
        <BodyLink text="Learn More" pathname="/how-it-works" />
      </Box>
      <Box width={{ xs: "80%", md: "40%" }} mx="auto">
        <LinkButton href="/" text="Start Now" />
      </Box>
    </Container>
  );
};

export default HowItWorksSection;
