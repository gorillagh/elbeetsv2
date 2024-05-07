import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import ActionButton from "../Buttons/ActionButton";
import Box from "@mui/material/Box";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const FeatureCard = (props) => {
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
            {props.featureIcon}
            <Typography variant="subSubheading" color="text.secondary">
              {props.title}
            </Typography>
          </Box>
        }
      />
      {/* <CardContent>
        <Typography variant="caption">{props.bodyText}</Typography>
      </CardContent> */}
    </Card>
  );
};

FeatureCard.defaultProps = {
  // bodyText: "Body Text",
  title: "Feature",
  featureIcon: <QuestionMarkIcon fontSize="large" />,
};

export default FeatureCard;
