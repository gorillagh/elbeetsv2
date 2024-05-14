import ActionButton from "@/app/components/Buttons/ActionButton";
import BasicPricingSection from "@/app/sections/pricing/BasicPricing";
import React from "react";
import CostEstimationSection from "@/app/sections/pricing/CostEstimation";
import HeroSection from "@/app/sections/pricing/HeroPricing";
import PricingFAQSection from "@/app/sections/pricing/PricingFAQ";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LinkButton from "../components/Buttons/LinkButton";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <>
      <Box bgcolor="background.colored" mb={5} py={12}>
        <HeroSection />
      </Box>
      <Box mb={5} py={12}>
        <BasicPricingSection />
      </Box>
      <Box bgcolor="background.colored" mb={5} py={12}>
        <CostEstimationSection />
      </Box>
      <Box mb={5} py={6}>
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-around"
            mx={5}
          >
            <Box my={1}>
              <LinkButton
                p={2}
                text="Request a Quote for Special Orders"
                href="/"
                fontSize="1.3rem"
                type="outlined"
              />
            </Box>
            <Box my={1}>
              <LinkButton
                p={2}
                text="Place an Order"
                href="/"
                fontSize="1.3rem"
                type="secondary"
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box mb={5} py={6}>
        <PricingFAQSection />
      </Box>
    </>
  );
}
