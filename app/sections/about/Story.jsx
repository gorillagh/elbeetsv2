import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const cardStyle = { border: "1px solid rgba(0,0,0,0.3)" };

const stories = [
  {
    title: "The Inception",
    icon: "",
    paragraphs: [
      "Elbee-TS (Elbee Transcription Services), founded in 2022, had its roots in the shared vision of two Brothers – Nana and Kwame. The idea emerged during a late-night brainstorming session fueled by a shared passion for technology and a keen awareness of the accessibility gaps present in the digital content landscape.",
      "Driven by the belief that everyone should have access to information, regardless of barriers, Elbee-TS was born to revolutionize the way audio and video content is transformed into text. The founders recognized the need for accurate, efficient, and affordable transcription services that could cater to a diverse range of industries.",
    ],
  },
  {
    title: "Founder's Vision",
    icon: "",
    paragraphs: [
      "At the heart of Elbee-TS is the vision to curb the bridge in accessibility gaps through transcription, captioning, and translation. The founders envisioned a world where content creators, businesses, and educators could seamlessly convert spoken words into written form, making information universally accessible.",
      "Nana Kwame, with a background in linguistics, saw the potential of breaking language barriers through accurate translations, Sarah, an advocate of inclusivity, wanted to make sure that those with hearing impairments could access digital content effortlessly. Governor, the tech enthusiast, envisioned a platform that leveraged cutting-edge technology to deliver fast and precise transcription services.",
    ],
  },
  {
    title: "Mile Stones",
    icon: "",
    paragraphs: ["", ""],
  },
  {
    title: "Company Growth",
    icon: "",
    paragraphs: ["", ""],
  },
];

export default function StorySection() {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center">
        <Typography variant="sectionHeader">Our Story</Typography>
      </Box>
      <Box my={6}>
        <Grid container spacing={6} disableEqualOverflow={true}>
          {stories.map((story, index) => (
            <Grid key={index} item md={6}>
              <Card sx={cardStyle}>
                <CardHeader
                  title={
                    <Typography variant="subheading">{story.title}</Typography>
                  }
                />
                <CardContent>
                  {story.paragraphs.map((p, index) => (
                    <>
                      <Typography key={index} variant="bodyText1" my={2}>
                        {p}
                      </Typography>
                    </>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
