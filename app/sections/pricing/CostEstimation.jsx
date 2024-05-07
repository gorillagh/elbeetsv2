"use client";
import React from "react";
import { useState } from "react";
import CheckboxInput from "@/app/components/Inputs/CheckboxInput";
import InputField from "@/app/components/Inputs/InputField";
import RadioButtons from "@/app/components/Inputs/RadioButtons";
import ServiceSelect from "@/app/components/Inputs/ServiceSelect";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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

const radios = [
  { label: "Standard", value: "standard" },
  { label: "Express", value: "express" },
];

export default function CostEstimationSection() {
  const [service, setService] = useState("Transcription");
  return (
    <Container maxWidth="lg">
      <Box textAlign="center">
        <Typography variant="sectionHeader" mb={4}>
          Cost Estimation
        </Typography>
      </Box>
      {/* //////////////////Service Select//////////////////////////////// */}
      <Box>
        <Grid container disableEqualOverflow={true}>
          <Grid
            item
            xs={5}
            md={3}
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <Typography variant="subSubheading">Service Type:</Typography>
          </Grid>
          <Grid
            item
            xs={7}
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <ServiceSelect
              services={services}
              service={service}
              setService={setService}
            />
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ my: 2 }} />
      {/* //////////File Duration////////////////////////////// */}
      <Box>
        <Grid container disableEqualOverflow={true}>
          <Grid
            item
            xs={5}
            md={3}
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <Typography variant="subSubheading">File Duration:</Typography>
          </Grid>
          <Grid
            item
            xs={5}
            md={6}
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              justifyContent="flex-end"
            >
              <InputField type="number" label="mins" size="small" />
              <InputField type="number" label="secs" size="small" />
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            md={3}
            display="flex"
            justifyContent="right"
            alignItems="center"
          >
            <Box display="flex" justifyContent="flex-end">
              <Typography variant="subSubheading" color="primary">
                $10
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
      </Box>

      {/* ///////////////////Turnaround Time///////////////// */}
      <Box>
        <Grid container disableEqualOverflow={true}>
          <Grid
            item
            xs={5}
            md={3}
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <Typography variant="subSubheading">Turnaround Time:</Typography>
          </Grid>
          <Grid
            item
            xs={5}
            md={6}
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              justifyContent="flex-end"
            >
              <RadioButtons radios={radios} />
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            md={3}
            display="flex"
            justifyContent="right"
            alignItems="center"
          >
            <Box display="flex" justifyContent="flex-end">
              <Typography variant="subSubheading" color="primary">
                $20
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
      </Box>

      {/* /////////////Customization////////////// */}
      <Box>
        <Grid container disableEqualOverflow={true}>
          <Grid
            item
            xs={5}
            md={3}
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <Typography variant="subSubheading">Customization:</Typography>
          </Grid>
          <Grid item xs={7} md={9}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              my={2}
            >
              <CheckboxInput label="Verbatim" />
              <Typography variant="subSubheading" color="primary">
                $5
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              my={2}
            >
              <CheckboxInput label="Time Stamps" />
              <Typography variant="subSubheading" color="primary">
                $5
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              my={2}
            >
              <CheckboxInput label="Speaker Identification" />
              <Typography variant="subSubheading" color="primary">
                $5
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <Typography variant="subSubheading">Total: </Typography>
        <Typography variant="subSubheading" color="primary" ml={3}>
          $45
        </Typography>
      </Box>
    </Container>
  );
}
