"use client";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ArrowDropDownIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

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
    <FormControl fullWidth={props.fullWidth || false}>
      {props.label && (
        <InputLabel id="service-select-label">Service</InputLabel>
      )}
      <Select
        labelId="service-select-label"
        id="service-select"
        value={props.service}
        label="Service"
        onChange={props.handleChange}
        // autoWidth
        sx={{ bgcolor: "primary.main", color: "#fff", fontWeight: "700" }}
        size="large"
        IconComponent={ArrowDropDownIcon}
      >
        {(props.services &&
          props.services.map((service, index) => (
            <MenuItem key={index} value={service.value}>
              {service.name}
            </MenuItem>
          ))) ||
          services.map((service, index) => (
            <MenuItem key={index} value={service.value}>
              {service.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
