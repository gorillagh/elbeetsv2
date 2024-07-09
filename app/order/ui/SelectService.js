"use client";

import { useState } from "react";
import ServiceSelect from "@/app/components/Inputs/ServiceSelect";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const services = [
  {
    name: "Transcription",
    value: "Transcription",
  },
  {
    name: "Captioning",
    value: "Captioning",
  },
  {
    name: "Translation",
    value: "Translation",
  },
];
export default function SelectService() {
  const [service, setService] = useState("Transcription");
  const handleChange = (e) => {
    setService(e.target.value);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      my={2}
      p={1}
      // mb={5}
      // width={{ md: "30%" }}
    >
      {/* <Typography variant="subSubheading" mr={5}>
        Service
      </Typography> */}
      <ServiceSelect
        // fullWidth
        services={services}
        service={service}
        handleChange={handleChange}
      />
    </Box>
  );
}
