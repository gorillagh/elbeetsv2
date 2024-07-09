import Container from "@mui/material/Container";
import SelectService from "./ui/SelectService";
import Grid from "@mui/material/Grid";
import FileUpload from "./ui/FileUpload";
import UploadedFiles from "./ui/UploadedFiles";
import { Box, Typography } from "@mui/material";
import CheckoutCard from "./ui/CheckoutCard";
const files = [
  {
    id: "001",
    name: "File 1",
    total: 50,
    duration: 5,
    cost: 50,
    express: false,
    timeStamp: false,
    verbatim: false,
  },
  {
    id: "002",
    name: "File 2",
    total: 20,
    duration: 2,
    cost: 50,
    express: false,
    timeStamp: false,
    verbatim: false,
  },
  {
    id: "003",
    name: "File 3",
    total: 50,
    duration: 5,
    cost: 50,
    express: false,
    timeStamp: false,
    verbatim: false,
  },
  {
    id: "004",
    name: "File 4",
    total: 50,
    duration: 5,
    cost: 50,
    express: false,
    timeStamp: false,
    verbatim: false,
  },
];
export default function Page() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent={files.length ? "space-between" : "center"}
      >
        <Grid item xs={12} md={files.length ? 4 : 6}>
          <SelectService />

          <FileUpload files={files} />
        </Grid>
        {files.length ? (
          <Grid item xs={12} md={7}>
            <Box
              display="flex"
              alignItems="center"
              width="95%"
              justifyContent="left"
              mt={2}
              mb={1}
              mx="auto"
            >
              <Typography variant="subSubheading">Added Files</Typography>
            </Box>
            <UploadedFiles files={files} />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
      {/* {files.length ? (
        <Grid container>
          <Grid item xs={12}>
            <Grid container justifyContent="right">
              <Grid item xs={12} md={4}>
                <CheckoutCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ""
      )} */}
    </Container>
  );
}
