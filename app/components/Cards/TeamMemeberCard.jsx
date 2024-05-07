import React from "react";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Image from "next/image";
import { Box } from "@mui/material";

export default function TeamMemeberCard(props) {
  return (
    <Box sx={{ width: "100%", textAlign: "center", position: "relative" }}>
      <Box
        sx={{
          position: "relative",
          width: "80%",
          height: "200px",
          mx: "auto",
        }}
      >
        <Image
          src={
            props.image ||
            "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={props.title || "Member Name"}
          fill={true}
          // placeholder="blur"
          style={{ borderRadius: "15px" }}
        />
      </Box>
      <CardHeader
        subheader={
          <Typography variant="caption">
            {props.subheader || "(Co-founder and Chief Executive Officer)"}
          </Typography>
        }
        title={
          <Typography variant="subSubheading">
            {props.title || "Member Name"}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="bodyText2" color="text.secondary">
          {props.intro ||
            "Gives a brief introduction of the team member and their role in the company"}
        </Typography>
      </CardContent>
    </Box>
  );
}

// TeamMemeberCard.defaultProps = {
//   title: "Member Name",
//   subheader: "(Co-founder and Chief Executive Officer)",
//   image:
//     "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   intro:
//     "Gives a brief introduction of the team member and their role in the company",
// };
