import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import apple from "@/app/images/logos/apple.svg";
import discord from "@/app/images/logos/discord.svg";
import google from "@/app/images/logos/google.svg";
import googleMeet from "@/app/images/logos/google-meet.svg";
import netflix from "@/app/images/logos/netflix.svg";
import skype from "@/app/images/logos/skype.svg";
import twitterX from "@/app/images/logos/twitter-x.svg";
import youtube from "@/app/images/logos/youtube.svg";
import zoom from "@/app/images/logos/zoom.svg";
import fifa from "@/app/images/logos/fifa.svg";
import Image from "next/image";

const logos = [
  apple,
  discord,
  google,
  googleMeet,
  netflix,
  skype,
  twitterX,
  youtube,
  zoom,
  fifa,
];
export default function ClienteleSection() {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center">
        <Typography variant="subheading" color="primary.dark">
          We work with your favorite brands
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 7 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 20 }}
          disableEqualOverflow={true}
          rowSpacing={10}
        >
          {logos.map((logo, index) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image alt="logo" src={logo} height="80px" width="80px" />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
