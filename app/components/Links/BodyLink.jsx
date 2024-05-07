import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";

export default function BodyLink(props) {
  return (
    <Link
      href={{
        pathname: props.pathname,
        query: props.query,
      }}
      scroll={props.scroll || true}
      style={{ textDecoration: props.textDecoration || "underline" }}
      {...props}
    >
      <Typography color={props.color || "primary.main"} variant="button">
        {props.text || "Link text"}
      </Typography>
    </Link>
  );
}

// BodyLink.defaultProps = {
//   scroll: true,
//   textTransform: "capitalize",
//   color: "primary.main",
//   text: "Link text",
//   textDecoration: "underline",
// };
