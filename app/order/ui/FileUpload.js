import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import ActionButton from "../../components/Buttons/ActionButton";
import DropZone from "../../components/Inputs/DropZone";

const cardStyle = {
  m: 1,
  // p: 1,
  display: "flex",
  flexDirection: "column",
  // borderRadius: "16px",
  background: " rgba(239, 240, 235, 0.7)",
  webkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.9)",
};

export default function FileUpload() {
  return (
    <Card sx={cardStyle} elevation={0}>
      <Grid container justifyContent="center" my={3} spacing={2}>
        <Grid md={10}>
          <DropZone
          // onDrop={onDrop}
          // getUploadParams={getUploadParams}
          // onChangeStatus={handleChangeStatus}
          // onSubmit={handleSubmit}
          // files={files}
          />
        </Grid>

        <Grid item md={12}>
          <Typography sx={{ my: 1 }} align="center">
            OR
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Box>
            <ActionButton
              variant="outlined"
              text="Add Links"
              leftIcon="add_link"
              my={0}
              // onClick={() => setOpenAddLink(true)}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
