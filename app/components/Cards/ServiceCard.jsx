import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import ActionButton from "../Buttons/ActionButton";
import LinkButton from "../Buttons/LinkButton";

export default function ServiceCard(props) {
  return (
    <Card
      // raised={true}
      sx={{
        cursor: "pointer",
        textAlign: "center",
        width: "100%",
        border: "1px solid rgba(0, 0, 0, 0.3)",
        "&:hover": {
          boxShadow: "2px 10px 10px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <CardHeader
        subheader={props.subheader || "Audio & Video"}
        title={
          <Typography variant="subheading">
            {props.title || "Transcription"}
          </Typography>
        }
      />

      <CardContent>
        <Typography color="primary.light" variant="bodyText1">
          {props.bodyText || "Body Text"}
        </Typography>
      </CardContent>
      <CardActions>
        <LinkButton
          text={props.buttonText || "Place Order"}
          href={props.href || "/"}
        />
      </CardActions>
    </Card>
  );
}

// ServiceCard.defaultProps = {
//   buttonText: "Place Order",
//   bodyText: "Body Text",
//   title: "Transcription",
//   subheader: "Audio & Video",
//   href: "/",
// };
