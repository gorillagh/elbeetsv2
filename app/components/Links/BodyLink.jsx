import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";

const BodyLink = (props) => {
  return (
    <Link
      href={{
        pathname: props.pathname,
        query: props.query,
      }}
      scroll={props.scroll}
      style={{ textDecoration: props.textDecoration }}
      {...props}
    >
      <Typography color={props.color} variant="button">
        {props.text}
      </Typography>
    </Link>
  );
};

BodyLink.defaultProps = {
  scroll: true,
  textTransform: "capitalize",
  color: "primary.main",
  text: "Link text",
  textDecoration: "underline",
};
export default BodyLink;
