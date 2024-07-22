import React from "react";
import ActionButton from "@/app/components/Buttons/ActionButton";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import LinkButton from "@/app/components/Buttons/LinkButton";

export default function TranscriptionHeroSection() {
  return (
    <div>
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="bigTitle">Professional Transcription</Typography>
          <Typography variant="subSubheading" my={3}>
            Accurate, Fast, and Cost-Effective Transcription done by
            professional transcriptionists
          </Typography>
          <Card
            raised={false}
            sx={{
              border: "1px solid rgba(0,0,0,0.2)",
              width: { xs: "70%", md: "20%" },
              mx: "auto",
              my: 3,
            }}
          >
            <CardContent>
              <Typography variant="bodyText1">From</Typography>
              <Typography variant="subSubheading">$1 per min</Typography>
            </CardContent>{" "}
          </Card>
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              mx: "auto",
            }}
          >
            <LinkButton
              text="Order for a Transcript"
              type="primary"
              fontSize="1.3rem"
              href="/order/transcription"
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
}
