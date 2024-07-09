import { Box } from "@mui/material";
import "./order.css";
import Header from "./ui/header";

export default function Layout({ children }) {
  return (
    <Box sx={{ bgcolor: "rgba(239, 240, 235, 0.7)", pt: 2, pb: 10 }}>
      <Header />
      <div>{children}</div>
    </Box>
  );
}
