import React from "react";
import FAQCard from "@/app/components/Cards/FAQCard";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const faqs = [
  {
    question: "What is closed captioning, and why is it important?",
    answer:
      "Closed captioning involves displaying text on the screen that provides a visual representation of spoken words, sound effects, and relevant audio cues in a video. It's essential for making video content accessible to individuals with hearing impairments and for compliance with accessibility regulations.",
    panel: "panel1",
  },
  {
    question: "What types of captioning services do you offer?",
    answer:
      "We offer various captioning services, including standard closed captions, and web accessibility captions. Each service caters to specific needs, ensuring inclusive and compliant content.",
    panel: "panel2",
  },
  {
    question: "How is your pricing structured for captioning services?",
    answer:
      "Our pricing is transparent and structured based on the type of captioning service and turnaround time. We offer standard and express delivery options. For detailed pricing information, please visit our pricing page.",
    panel: "panel3",
  },
  {
    question: "What are the turnaround times for captioning projects?",
    answer:
      "We provide both standard and express delivery options. Standard turnaround times vary based on the length of the video, while express delivery is available for urgent projects. Contact us for specific details on turnaround times.",
    panel: "panel4",
  },
  {
    question: "How do you ensure the quality of your captions?",
    answer:
      "We have a rigorous quality assurance process that includes experienced captioning professionals and a thorough review and editing phase. Our captions are accurate, compliant with accessibility standards, and meet high-quality standards.",
    panel: "panel5",
  },
  {
    question: "What video formats do you support for captioning?",
    answer:
      "We accept a wide range of video formats to accommodate various content. Our system is compatible with popular formats such as MP4, MOV, AVI, and more.",
    panel: "panel6",
  },
  {
    question: "How can I submit my videos for captioning?",
    answer:
      "Uploading your videos for captioning is straightforward. You can use our secure platform to submit your video files, or you can share a link to your video files. If you have specific instructions or requirements, please include them during the submission process.",
    panel: "panel7",
  },
  {
    question: "How can I get started with your captioning services?",
    answer:
      "Getting started is easy. Simply request a quote or place an order through our platform. We'll guide you through the process, and our team is here to assist you every step of the way.",
    panel: "panel8",
  },
];

const CaptioningFAQSection = () => {
  return (
    <Container maxWidth="lg">
      <Box width={{ md: "70%" }} mx="auto">
        <FAQCard faqs={faqs} />
      </Box>
    </Container>
  );
};

export default CaptioningFAQSection;
