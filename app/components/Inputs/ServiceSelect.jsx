"use client";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
export default function ServiceSelect(props) {
  return (
    <FormControl>
      <InputLabel id="service-select-label">Service</InputLabel>
      <Select
        labelId="service-select-label"
        id="service-select"
        value={props.service}
        label="Service"
        onChange={props.handleChange}
        autoWidth
        size="large"
      >
        {props.services.map((service, index) => (
          <MenuItem key={index} value={service.value}>
            {service.name}
          </MenuItem>
        )) ||
          services.map((service, index) => (
            <MenuItem key={index} value={service.value}>
              {service.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
