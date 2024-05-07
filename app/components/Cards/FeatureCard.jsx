import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import ActionButton from "../Buttons/ActionButton";
import Box from "@mui/material/Box";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export default function FeatureCard(props) {
  return (
    <Card
      variant="outlined"
      sx={{
        textAlign: "center",
        width: { xs: "100%", md: "60%" },
        "&:hover": {},
        border: "none",
      }}
    >
      <CardHeader
        title={
          <Box>
            {props.featureIcon || <QuestionMarkIcon fontSize="large" />}
            <Typography variant="subSubheading" color="text.secondary">
              {props.title || "Feature"}
            </Typography>
          </Box>
        }
      />
      {/* <CardContent>
        <Typography variant="caption">{props.bodyText}</Typography>
      </CardContent> */}
    </Card>
  );
}

// FeatureCard.defaultProps = {
//   // bodyText: "Body Text",
//   title: "Feature",
//   featureIcon: <QuestionMarkIcon fontSize="large" />,
// };
