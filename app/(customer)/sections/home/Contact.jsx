import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputField from "@/app/components/Inputs/InputField";
import ActionButton from "@/app/components/Buttons/ActionButton";
import Grid from "@mui/material/Grid";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import IconButton from "@mui/material/IconButton";
import ContactForm from "@/app/(customer)/forms/ContactForm";

export default function ContactSection() {
  return (
    <Container maxWidth="lg">
      <Typography variant="subheading">Contact Us</Typography>
      <Box mt={3}>
        <Grid container spacing={{ xs: 2, md: 3 }} disableEqualOverflow={true}>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width={{ md: "50%" }} mx="auto">
              <Box display="flex" alignItems="center" mb={2}>
                <IconButton>
                  <LocalPhoneIcon
                    fontSize="large"
                    sx={{ color: "primary.main" }}
                  />
                </IconButton>
                <Typography color="primary" variant="subSubheading">
                  +1 (555) 555-1234
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mt={2}>
                <IconButton>
                  <MailOutlineIcon
                    fontSize="large"
                    sx={{ color: "primary.main" }}
                  />
                </IconButton>
                <Typography color="primary" variant="subSubheading">
                  support@elbeets.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
