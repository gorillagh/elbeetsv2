import Container from "@mui/material/Container";
import SelectService from "./ui/SelectService";
import Grid from "@mui/material/Grid";
import FileUpload from "./ui/FileUpload";
import UploadedFiles from "./ui/UploadedFiles";
import { Box, Typography } from "@mui/material";
import CheckoutCard from "./ui/CheckoutCard";

export default function Page() {
  return (
    <Container maxWidth="lg">
      <SelectService />

      <Box
        display="flex"
        alignItems="center"
        width="70%"
        justifyContent="right"
        mt={2}
        mb={1}
      >
        <Typography variant="subSubheading">Added Files</Typography>
      </Box>
      <Grid container justifyContent="space-between">
        <Grid display={{ xs: "none", md: "block" }} item md={4}>
          <FileUpload />
        </Grid>
        <Grid item md={7}>
          <UploadedFiles />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justifyContent="right">
            <Grid item xs={12} md={4}>
              <CheckoutCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
