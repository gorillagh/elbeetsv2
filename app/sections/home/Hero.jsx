"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import CheckIcon from "@mui/icons-material/Check";
import hero from "../../images/hero.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinkButton from "../../components/Buttons/LinkButton";

const heroItems = [
  "99.9% Accurate",
  "On-time Delivery",
  "At a Reasonable Cost",
];

export default function HeroSection() {
  const [isTypewriterReady, setIsTypewriterReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypewriterReady(true);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={12} disableEqualOverflow={true}>
        <Grid item xs={12} md={6} display="flex" alignItems="center">
          <Box>
            <Typography variant="bigTitle">Fast, Accurate</Typography>
            <Typography variant="bigTitle" color="primary.light">
              {isTypewriterReady ? (
                <Typewriter
                  options={{
                    strings: [
                      "<span>Transcription</span>",
                      "<span>Captioning</span>",
                      "<span>Translation</span>",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              ) : (
                "Transcription"
              )}
            </Typography>
            <Typography variant="bigTitle">Services.</Typography>
            <Box my={3}>
              {heroItems.map((item, index) => (
                <List sx={{ py: 0.5 }} key={index}>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <CheckIcon
                        sx={{
                          color: "secondary.light",
                          fontSize: "1.8rem",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="subSubheading"
                          color="text.secondary"
                        >
                          {item}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              ))}
            </Box>
            <Box width={{ md: "80%" }}>
              <LinkButton text="Place an order" type="primary" href="/order" />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={0}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box display={{ xs: "none", md: "flex" }}>
            <Image src={hero} alt="Hero" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
