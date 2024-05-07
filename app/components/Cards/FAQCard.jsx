"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";

const faqs = [
  {
    question: "What is question 1?",
    answer: "The answer is answer 1",
    panel: "panel1",
  },
  {
    question: "What is question 2?",
    answer: "The answer is answer 2",
    panel: "panel2",
  },
  {
    question: "What is question 3?",
    answer: "The answer is answer 3",
    panel: "panel3",
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FAQCard(props) {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Card raised={true}>
      <CardHeader
        title={
          <Box>
            <Typography variant="subSubheading">Frequently Asked</Typography>
          </Box>
        }
      />
      {props.faqs.map((faq, index) => (
        <Accordion
          expanded={expanded === faq.panel}
          onChange={handleChange(faq.panel)}
          key={index}
        >
          <AccordionSummary
            aria-controls={`${faq.panel}d-content`}
            id={`${faq.panel}d-header`}
          >
            <Typography variant="bodyText1">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      )) ||
        faqs.map((faq, index) => (
          <Accordion
            expanded={expanded === faq.panel}
            onChange={handleChange(faq.panel)}
            key={index}
          >
            <AccordionSummary
              aria-controls={`${faq.panel}d-content`}
              id={`${faq.panel}d-header`}
            >
              <Typography variant="bodyText1">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </Card>
  );
}

// FAQCard.defaultProps = {
//   faqs,
// };
