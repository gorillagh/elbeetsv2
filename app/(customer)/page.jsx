import Box from "@mui/material/Box";
import HeroSection from "./sections/home/Hero";
import FeatureSection from "./sections/home/Feature";
import HowItWorksSection from "./sections/home/HowItWorks";
import SampleSection from "./sections/home/Sample";
import ClienteleSection from "./sections/home/Clientele";
import ContactSection from "./sections/home/Contact";
import CTASection from "./sections/home/CTA";
import FAQSection from "./sections/home/FAQ";

export default async function Home() {
  return (
    <Box>
      <Box id="hero-section" bgcolor="background.colored" mb={5} py={12}>
        <HeroSection />
      </Box>
      <Box id="Feature-section" mb={5} py={12}>
        <FeatureSection />
      </Box>
      <Box
        id="how-it-works-section"
        mb={5}
        bgcolor="background.colored"
        py={12}
      >
        <HowItWorksSection />
      </Box>
      <Box id="sample-section" mb={5} py={12}>
        <SampleSection />
      </Box>
      <Box id="clientele-section" mb={5} bgcolor="background.colored" py={12}>
        <ClienteleSection />
      </Box>
      <Box id="contact-section" mb={5} py={12}>
        <ContactSection />
      </Box>
      <Box id="cta-section" mb={5} bgcolor="background.colored" py={12}>
        <CTASection />
      </Box>
      <Box id="faq-section" mb={5} py={12}>
        <FAQSection />
      </Box>
    </Box>
  );
}
