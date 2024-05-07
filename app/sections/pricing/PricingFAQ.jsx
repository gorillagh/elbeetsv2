import React from "react";
import FAQCard from "@/app/components/Cards/FAQCard";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide transcription, closed captioning, and translation services. Whether you need audio or video content converted into text, or multilingual translations, we've got you covered.",
    panel: "panel1",
  },
  {
    question: "How accurate are your transcriptions?",
    answer:
      "Our transcriptions are 99.9% accurate. We employ skilled professionals and use advanced technology to ensure the highest level of accuracy.",
    panel: "panel2",
  },
  {
    question: "What is the turnaround time for transcriptions?",
    answer:
      "Express – Within 24 hours,  Standard – Within 3 working days. The turnaround time depends on the length and complexity of the content. For example, transcript of a 1-hour audio file will be ready in 6 hours. We offer various delivery options, including express services for urgent needs.",
    panel: "panel3",
  },
  {
    question: "How can I place an order?",
    answer:
      "Placing an order is simple. Click on the 'Get Started' button, and you'll be guided through the process. You can also contact us for personalized assistance.",
    panel: "panel4",
  },
  {
    question: "Do you support multiple languages?",
    answer:
      "Yes, we support a wide range of languages for translation services. Please check our language offerings.",
    panel: "panel5",
  },
  {
    question: "How does the transcription process work?",
    answer:
      "Our transcription process is straightforward. You upload your audio or video file, and our team of experts transcribes the content. We ensure confidentiality and accuracy throughout the process.",
    panel: "panel6",
  },
  {
    question: "Can you handle large-volume projects?",
    answer:
      "Absolutely! We have the capacity to handle large-volume projects, making us the ideal choice for businesses and organizations with extensive transcription needs.",
    panel: "panel7",
  },
  {
    question: "What's the cost of your services?",
    answer:
      "Our pricing varies based on factors such as content length, turnaround time, and additional services. You can explore our pricing page for detailed information.",
    panel: "panel8",
  },
  {
    question: "Do you offer closed captioning for videos?",
    answer:
      "Yes, we provide closed captioning services to make your videos accessible and compliant with industry standards.",
    panel: "panel9",
  },
  {
    question: "Are my files and information secure with you?",
    answer:
      "We take data security seriously. Your files and information are treated with the utmost confidentiality and protected through encryption and secure storage.",
    panel: "panel10",
  },
];

export default function PricingFAQSection() {
  return (
    <Container maxWidth="lg">
      <Box width={{ md: "70%" }} mx="auto">
        <FAQCard faqs={faqs} />
      </Box>
    </Container>
  );
}
