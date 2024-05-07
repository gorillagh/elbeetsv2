"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import captioningSamplePreview from "@/app/images/captioning-sample-preview.png";
import BodyLink from "@/app/components/Links/BodyLink";

export default function CaptioningFeatureSection() {
  return (
    <Container maxWidth="lg">
      <Grid mb={12} container spacing={2} disableEqualOverflow={true}>
        <Grid item md={6} display="flex" alignItems="center">
          <Box width={{ md: "80%" }}>
            <Typography variant="subheading">
              Get 99%+ Accurate Captions
            </Typography>
            <Typography my={2} variant="bodyText1">
              From crystal-clear educational videos to captivating marketing
              content, trust us to deliver precise captions that enhance
              accessiblity, engagement, and impact. Elevate your visuals with
              accuracy that speks volumes!
            </Typography>
            <Typography>
              From crystal-clear educational videos to captivating marketing
              content, trust us to deliver precise captions that enhance
              accessiblity, engagement, and impact. Elevate your visuals with
              accuracy that speks volumes! 8
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box>
            <Image
              width="550"
              src={captioningSamplePreview}
              alt="General Transcription"
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <BodyLink text="View Sample" pathname="/captioning-sample" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
