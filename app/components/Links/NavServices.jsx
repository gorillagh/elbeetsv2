"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import NavLink from "./NavLink";
import { Popover, Typography, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function NavServices() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          alignItems: "center",
          justifyContent: "center",
          mr: 2,
        }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onMouseEnter={handleMouseEnter}
      >
        <NavLink
          endIcon={<KeyboardArrowDownIcon color="primary" />}
          text="Services"
        />
      </Box>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        <MenuItem onClick={handleClose}>
          <NavLink text="Transcription" pathname="/services/transcription" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink text="captioning" pathname="/services/captioning" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink text="Translation" pathname="/services/translation" />
        </MenuItem>
      </Menu>
    </>
  );
}
