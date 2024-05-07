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
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

const iconStyle = { color: "#ecae53", fontSize: "3rem" };

const steps = [
  {
    number: 1,
    icon: <CloudUploadIcon sx={iconStyle} />,
    title: "File Submission",
    description:
      "Start the process by uploading or sharing the link to your audio/video file(s).",
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
    icon: <TextSnippetIcon sx={iconStyle} />,
    title: "Transcription",
    description:
      "Skilled transcriptionists transcribe your content with precision and attention to detail.",
  },
  {
    number: 4,
    icon: <VerifiedIcon sx={iconStyle} />,
    title: "Quality Check",
    description:
      "The transcripts undergo a thorough quality check, including review and editing by experienced professionals.",
  },
  {
    number: 5,
    icon: <FileDownloadIcon sx={iconStyle} />,
    title: "Delivery",
    description:
      "Completed transcriptions are securely delivered to your dashboard for download.",
  },
];

export default function TranscriptionProcessSection() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="sectionHeader"
        color="primary.dark"
        textAlign="center"
      >
        The Transcription Process
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
}
