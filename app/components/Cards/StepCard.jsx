import React from "react";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Avatar from "@mui/material/Avatar";

export default function StepCard(props) {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "80%" },
        display: "flex",
        p: 1,
      }}
    >
      <Avatar
        sx={{ mr: 1, bgcolor: "#d3888e", width: 30, height: 30 }}
        aria-label="recipe"
      >
        <Typography variant="bodyText2" fontWeight={700} color="#fff">
          {props.number || 1}
        </Typography>
      </Avatar>
      <Box display="flex" flexDirection="column">
        {props.icon || (
          <QuestionMarkIcon fontSize="large" sx={{ color: "warning.light" }} />
        )}
        <Typography variant="subSubheading" my={1}>
          {props.title || "Feature"}
        </Typography>
        <Typography variant="bodyText2">
          {props.bodyText || "Body Text"}
        </Typography>
      </Box>
    </Box>
  );
}

// StepCard.defaultProps = {
//   number: 1,
//   bodyText: "Body Text",
//   title: "Feature",
//   icon: <QuestionMarkIcon fontSize="large" sx={{ color: "warning.light" }} />,
// };
