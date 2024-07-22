import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import generalTranscription from "@/app/images/features/general.png";
import specializedTranscription from "@/app/images/features/specialized-transcription.png";
import turnaround from "@/app/images/features/turnaround.png";

export default function TranscriptionFeatureSection() {
  return (
    <Container maxWidth="lg">
      <Grid mb={12} container spacing={2} disableEqualOverflow={true}>
        <Grid item md={6} display="flex" alignItems="center">
          <Box width={{ md: "80%" }}>
            <Typography variant="subheading">General Transcription</Typography>
            <Typography my={2} variant="bodyText1">
              General transcription involves converting spoken language into
              written text. It is suitable for interviews, meetings, podcasts
              and more
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Image
            src={generalTranscription}
            alt="General Transcription"
            height={200}
            width={200}
          />
        </Grid>
      </Grid>

      <Grid
        mb={12}
        container
        spacing={2}
        direction="row-reverse"
        disableEqualOverflow={true}
      >
        <Grid item md={6} display="flex" alignItems="center">
          <Box width={{ md: "80%" }}>
            <Typography variant="subheading">
              Specialized Transcription
            </Typography>
            <Typography my={2} variant="bodyText1">
              Specialized transcription covers legal, medical, academic, and
              technical content. We have experts in each field who understand
              the terminology and nuances
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Image
              src={specializedTranscription}
              alt="Specialized Transcription"
              height={200}
              width={200}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} disableEqualOverflow={true}>
        <Grid item md={6} display="flex" alignItems="center">
          <Box width={{ md: "80%" }}>
            <Typography variant="subheading">
              Fast, yet Flexible Turnaround Time
            </Typography>
            <Typography my={2} variant="bodyText1">
              Chose between our Standard (within 3 business days) and Express
              (within 24hrs) turnaround. Our team of professional
              transcriptionist work very fast.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box>
            <Image
              src={turnaround}
              alt="Quick turnaround"
              height={200}
              width={200}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
