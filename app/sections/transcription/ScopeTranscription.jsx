import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import GavelIcon from "@mui/icons-material/Gavel";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const iconStyle = {
  fontSize: "4rem",
  color: "#444",
};

const fields = [
  {
    name: "Business",
    icon: <BusinessCenterIcon style={iconStyle} />,
  },
  {
    name: "Academia",
    icon: <SchoolIcon style={iconStyle} />,
  },
  {
    name: "Legal",
    icon: <GavelIcon style={iconStyle} />,
  },
  {
    name: "Medical",
    icon: <LocalHospitalIcon style={iconStyle} />,
  },
];
export default function TranscriptionScopeSection() {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center">
        <Typography variant="subheading" mb={4}>
          We&rsquo;re dedicated to delivering high-quality transcription
          solutions for a variety of fields
        </Typography>
      </Box>

      {/* ////////////field Cards///////////// */}
      <Box sx={{ flexGrow: 1, py: 3 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 16 }}
          disableEqualOverflow={true}
        >
          {fields.map((field, index) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={index}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {field.icon}
              <Typography mt={2} variant="subSubheading" color="primary.light">
                {field.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
