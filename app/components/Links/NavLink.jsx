import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";

const NavLink = (props) => {
  return (
    <Link
      href={{
        pathname: props.pathname,
        query: props.query,
      }}
      scroll={props.scroll}
      {...props}
      legacyBehavior
    >
      <Button endIcon={props.endIcon}>{props.text}</Button>
    </Link>
  );
};

NavLink.defaultProps = {
  scroll: true,
  textTransform: "capitalize",
  color: "",
  text: "Link text",
  textDecoration: "none",
};
export default NavLink;
