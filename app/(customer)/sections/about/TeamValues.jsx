import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";

import mission from "@/app/images/target.png";
const values = [
  {
    number: 1,
    title: "Accessibility",
    description:
      "We are committed to making information accessible to everyone, breaking down language and communication barriers.",
  },
  {
    number: 2,
    title: "Innovation",
    description:
      "Our team thrives on innoviation, leveraging the latest technologies to deliver cutting-edge transcription solutions.",
  },
  {
    number: 3,
    title: "Accuracy",
    description: "",
  },
  {
    number: 4,
    title: "Inclusivity",
    description:
      "We believe in creating services that are inclusive and cater to the diverse needs of our clients and their audiences.",
  },
  {
    number: 5,
    title: "Collaboration",
    description:
      "Collaboration is key to our success. We foster a culture of teamwork, both within our team and in partnership with our clients.",
  },
];

export default function TeamValuesSection() {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" mb={6}>
        <Typography variant="sectionHeader">Team Values</Typography>
      </Box>
      {values.map((value, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: "100%", md: "60%" },
            display: "flex",
            p: 1,
            mx: "auto",
          }}
        >
          <Avatar
            sx={{ mr: 1, bgcolor: "#d3888e", width: 30, height: 30 }}
            aria-label="recipe"
          >
            <Typography variant="bodyText2" fontWeight={700} color="#fff">
              {value.number}
            </Typography>
          </Avatar>
          <Box display="flex" flexDirection="column">
            <Typography variant="subSubheading" my={1}>
              {value.title}
            </Typography>
            <Typography variant="caption">{value.description}</Typography>
          </Box>
        </Box>
      ))}

      <Box my={12}>
        <Grid container spacing={3}>
          <Grid
            item
            md={4}
            display={{ xs: "none", md: "flex" }}
            alignItems="center"
            justifyContent="center"
          >
            <Image src={mission} alt="mission" />
          </Grid>
          <Grid item md={8}>
            <Box width={{ xs: "100%", md: "70%" }}>
              <Typography variant="subheading" mb={2}>
                Our Mission
              </Typography>
              <Typography variant="bodyText1">
                At Elbee-TS, our mission is to break down language and
                Accessibility barriers by providing seamless, precise, and
                universally accessible transcription services. Guided by a
                commitment to technological innovation, precision, and quality,
                we prioritize a client-centric approach, tailoring solutions to
                individual needs and ensuring a seamless user experience
              </Typography>
              <Typography variant="bodyText1">
                We aspire to make a positive impact on the transcription
                industry by seeting new standards for quality, advancing
                universal accessibilty, and inspiring innovation. Elbee-TS is
                not just a transcription service, it&rsquo;s a mission to
                empower individuals and businesses by facilitating oopen
                communication and access to information without limitations.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
