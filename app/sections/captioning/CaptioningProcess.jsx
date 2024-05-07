import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StepCard from "@/app/components/Cards/StepCard";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VerifiedIcon from "@mui/icons-material/Verified";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";

const iconStyle = { color: "#ecae53", fontSize: "3rem" };

const steps = [
  {
    number: 1,
    icon: <CloudUploadIcon sx={iconStyle} />,
    title: "Video Submission",
    description:
      "Upload your video files or sharing the link to your file through our secure platform.",
  },
  {
    number: 2,
    icon: <ThumbUpOffAltIcon sx={iconStyle} />,
    title: "Evaluation",
    description:
      "Our team evaluates the project requirements, taking into account any specific instructions or special requests.",
  },
  {
    number: 3,
    icon: <ClosedCaptionIcon sx={iconStyle} />,
    title: "Captioning",
    description:
      "Skilled captioning professionals add accurate and well-timed captions to your video content.",
  },
  {
    number: 4,
    icon: <VerifiedIcon sx={iconStyle} />,
    title: "Quality Check",
    description:
      "Captions undergo a comprehensive quality check, including editing and review by our experienced team.",
  },
  {
    number: 5,
    icon: <FileDownloadIcon sx={iconStyle} />,
    title: "Delivery",
    description:
      "Your captioned videos are securely delivered to your dashboard",
  },
];

const CaptioningProcessSection = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="sectionHeader"
        color="primary.dark"
        textAlign="center"
      >
        The Captioning Process
      </Typography>
      <Box my={{ xs: 6, md: 8 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          disableEqualOverflow={true}
          justifyContent="center"
        >
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
    </Container>
  );
};

export default CaptioningProcessSection;
