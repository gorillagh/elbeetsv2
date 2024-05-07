import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputField from "@/app/components/Inputs/InputField";
import ActionButton from "@/app/components/Buttons/ActionButton";
import Card from "@mui/material/Card";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BodyLink from "@/app/components/Links/BodyLink";
import ContactSupportForm from "../forms/ContactSupportForm";

export const metadata = {
  title: "Contact Us",
};

const ContactPage = () => {
  return (
    <div>
      <Box mb={5} py={6} bgcolor="background.colored">
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="bigTitle">Get in touch.</Typography>
            <Box width="70%" mx="auto">
              <Typography variant="subSubheading" my={3}>
                We are here to assist you
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box mb={5} py={12}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="sectionHeader">Contact support</Typography>
          </Box>
          <Box width={{ md: "60%" }} mx="auto">
            <ContactSupportForm />
          </Box>
        </Container>
      </Box>

      <Box mb={5} py={6}>
        <Container maxWidth="lg">
          <Grid container disable disableEqualOverflow={true}>
            <Grid
              item
              xs={12}
              md={6}
              display={{ md: "flex" }}
              alignItems="center"
              justifyContent="center"
              mb={{ xs: 2, md: 0 }}
            >
              <Card
                raised={false}
                sx={{
                  border: "solid 1px rgba(0,0,0,0.3)",
                  borderColor: "primary.light",
                }}
              >
                <CardContent>
                  <Typography variant="bodyText1" textAlign="center">
                    Call Us
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
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
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              display={{ md: "flex" }}
              alignItems="center"
              justifyContent="center"
            >
              <Card
                raised={false}
                sx={{
                  border: "solid 1px rgba(0,0,0,0.3)",
                  borderColor: "primary.light",
                }}
              >
                <CardContent>
                  <Typography variant="bodyText1" textAlign="center">
                    Send an email
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
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
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box mt={12} py={6}>
            <Box display="flex" alignItems="center" mb={3}>
              <LocationOnIcon
                fontSize="large"
                sx={{ color: "secondary.main", mr: 2 }}
              />
              <Typography variant="subheading">Locate Us</Typography>
            </Box>
            <Grid container disableEqualOverflow={true}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="subSubheading">
                    BOSTON HEADQUARTERS
                  </Typography>
                  <Typography variant="subSubheading">
                    77 N. Washington Street, 2nd Floor
                  </Typography>
                  <Typography variant="subSubheading">
                    Boston, MA 02114
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box height={300} width="100%"></Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <BodyLink mx={3} text="Privacy Policy" pathname="/privacy" />
                  <BodyLink text="Terms of Service" pathname="/terms" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default ContactPage;
