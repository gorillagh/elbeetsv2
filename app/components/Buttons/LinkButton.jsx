"use client";

import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function LinkButton(props) {
  const theme = useTheme();
  return (
    <Link
      className=""
      href={{
        pathname: props.href,
        query: props.query,
      }}
      scroll={props.scroll}
      replace={props.replace}
      passHref
      style={{ width: "100%", textDecoration: "none" }}
    >
      <Box
        type={props.type}
        width="100%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          py: 1,
          fontSize: props.fontSize,
          borderRadius: 5,
          textTransform: "capitalize",
          color:
            props.type === "primary" || props.type === "secondary"
              ? "#fff"
              : theme.palette.secondary.main,
          bgcolor:
            props.type === "primary"
              ? theme.palette.primary.main
              : props.type === "secondary"
              ? theme.palette.secondary.main
              : "transparent",
          border: props.type === "outlined" ? "1px solid" : "",
          boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          "&:hover": {
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          },
        }}
        {...props}
      >
        <Typography
          variant="button"
          textAlign="center"
          fontSize={props.fontSize}
        >
          {props.text}
        </Typography>
      </Box>
    </Link>
  );
}

LinkButton.defaultProps = {
  scroll: true,
  type: "secondary",
  color: "#fff",
  fontSize: "1.1rem",
  href: "/",
  replace: false,
};
