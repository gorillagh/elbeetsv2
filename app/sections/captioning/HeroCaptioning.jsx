import React from "react";
import ActionButton from "@/app/components/Buttons/ActionButton";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import LinkButton from "@/app/components/Buttons/LinkButton";

const CaptioningHeroSection = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="bigTitle">Expert Captioning</Typography>
          <Typography variant="subSubheading" my={3}>
            Visuals Speak Louder: Explore Our Captioning Excellence
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
              <Typography variant="subSubheading">$1.5 per min</Typography>
            </CardContent>{" "}
          </Card>
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              mx: "auto",
            }}
          >
            <LinkButton
              text="Get Captions"
              type="primary"
              fontSize="1.3rem"
              href="/order/captioning"
            />
          </Box>
          <Typography textAlign="center" variant="subSubheading" my={3}>
            In as fast as 24 hours!
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default CaptioningHeroSection;
