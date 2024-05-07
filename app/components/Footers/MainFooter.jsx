import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import NavLink from "../Links/NavLink";
import FooterLink from "../Links/FooterLink";
import { Box, Container } from "@mui/material";

const footers = [
  {
    title: "Company",
    links: ["Team", "About", "Contact us"],
  },
  {
    title: "Services",
    links: [
      "Audio to text",
      "Video to text",
      "On-screen subtitle",
      "Video subtitle translation",
    ],
  },

  {
    title: "Legal",
    links: ["Privacy policy", "Terms & conditions"],
  },
];

export default function MainFooter(props) {
  return (
    <>
      <Divider sx={{ mt: 10 }} />
      <Box id="sample-section" py={6} bgcolor="#F9E8E4">
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="left">
            {footers.map((footer) => (
              <Grid item xs={6} sm={4} key={footer.title}>
                <Typography
                  variant="bodyText1"
                  color="text.secondary"
                  gutterBottom
                >
                  {footer.title}
                </Typography>
                {footer.links.map((item, index) => (
                  <FooterLink text={item} key={index} />
                ))}
              </Grid>
            ))}
          </Grid>
          {/* </Container> */}
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ my: 4 }}
          >
            {"© "}
            <FooterLink component="a" text="Elbee" pathname="/" />{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </Box>
    </>
  );
}
