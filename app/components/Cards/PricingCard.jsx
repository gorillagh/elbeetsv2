import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import ActionButton from "../Buttons/ActionButton";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import LinkButton from "../Buttons/LinkButton";

export default function PricingCard(props) {
  return (
    <Card
      raised={true}
      sx={{
        cursor: "pointer",
        textAlign: "center",
        width: "100%",
        "&:hover": {
          boxShadow: "2px 10px 10px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <CardHeader
        subheader={<Divider />}
        title={
          <Typography variant="subheading">
            {props.title || "Transcription"}
          </Typography>
        }
      />

      <CardContent>
        <Box
          display="flex"
          columnGap={1}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="sectionHeader" color="primary">
            {props.price || "$1"}
          </Typography>
          <Typography variant="bodyText1">/min</Typography>
        </Box>
        <Typography variant="bodyText1">
          {props.bodyText || "Body Text"}
        </Typography>
      </CardContent>
      <CardActions>
        <LinkButton
          href={props.href}
          text={props.buttonText || "Order Now"}
          type="secondary"
        />
      </CardActions>
    </Card>
  );
}

// PricingCard.defaultProps = {
//   buttonText: "Order Now",
//   bodyText: "Body Text",
//   title: "Transcription",
//   price: "$1",
// };
