import React from "react";
import ServiceCard from "@/app/components/Cards/ServiceCard";
import FeatureCard from "@/app/components/Cards/FeatureCard";
import SecurityIcon from "@mui/icons-material/Security";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AdjustIcon from "@mui/icons-material/Adjust";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DiscountIcon from "@mui/icons-material/Discount";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const iconStyle = {
  fontSize: "2.8rem",
  color: "#555",
};

const features = [
  {
    title: "99.9% Accuracy",
    icon: <AdjustIcon style={iconStyle} />,
  },
  {
    title: "Quick Turnaround",
    icon: <ScheduleIcon style={iconStyle} />,
  },
  {
    title: "File Security",
    icon: <SecurityIcon style={iconStyle} />,
  },
  {
    title: "Competitive Pricing",
    icon: <PriceCheckIcon style={iconStyle} />,
  },
  {
    title: "24/7 Customer Support",
    icon: <SupportAgentIcon style={iconStyle} />,
  },
  {
    title: "Bulk Discount",
    icon: <DiscountIcon style={iconStyle} />,
  },
];

export default function FeatureSection() {
  return (
    <Container maxWidth="lg">
      <Box my={6}>
        <Grid container spacing={{ xs: 6, md: 12 }} disableEqualOverflow={true}>
          <Grid
            item
            md={4}
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ServiceCard
              title="Transcription"
              bodyText="Starts at $1/min"
              href="/services/transcription"
            />
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ServiceCard
              title="Captionining"
              subheader="Video"
              bodyText="Starts at $1.5/min"
              href="/services/captioning"
            />
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ServiceCard
              title="Translation"
              bodyText="Starts at $1/min"
              href="/services/translation"
            />
          </Grid>
        </Grid>
      </Box>

      {/* ////////////Feature Cards///////////// */}
      <Box sx={{ flexGrow: 1, py: 3 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          disableEqualOverflow={true}
        >
          {features.map((feature, index) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={index}
              display="flex"
              justifyContent="center"
              //   alignItems="center"
            >
              <FeatureCard
                featureIcon={feature.icon}
                title={feature.title}
                //                     bodyText="Delivering transcripts with
                // industry-leading accuracy"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
