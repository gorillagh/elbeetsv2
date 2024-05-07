import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function FooterLink(props) {
  return (
    <Link
      href={{
        pathname: props.pathname,
        query: props.query,
      }}
      scroll={props.scroll || true}
      {...props}
      legacyBehavior
    >
      <Typography
        variant="caption"
        color="secondary.light"
        sx={{
          cursor: "pointer",
          my: 1,
          "&:hover": { color: "secondary.dark" },
        }}
        component={props.component}
      >
        {props.text || "Link text"}
      </Typography>
    </Link>
  );
}

// FooterLink.defaultProps = {
//   scroll: true,
//   textTransform: "capitalize",
//   color: "",
//   text: "Link text",
//   textDecoration: "none",
// };
