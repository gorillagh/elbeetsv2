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

export default function FileUpload(props) {
  return (
    <Box>
      {/* -------------------------No File uploaded------------------------- */}
      {!props.files ? (
        <Grid
          container
          justifyContent="center"
          my={1}
          spacing={2}
          // display={{
          //   xs: props.files.length && "none",
          //   md: props.files.length && "none",
          // }}
          p={1}
        >
          <Grid item xs={12} md={9}>
            <DropZone
            // onDrop={onDrop}
            // getUploadParams={getUploadParams}
            // onChangeStatus={handleChangeStatus}
            // onSubmit={handleSubmit}
            />
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <input
                // ref={uploadInputRef}
                type="file"
                // accept="audio/*,video/*"
                style={{ display: "none" }}
                // onChange={handleMobileUpload}
                multiple
              />
              <ActionButton
                // onClick={() =>
                //   uploadInputRef.current && uploadInputRef.current.click()
                // }
                text="Upload"
                leftIcon="upload_file"
                my={0}
              />
            </Box>
          </Grid>

          <Grid item sx={12} md={12}>
            <Typography sx={{ my: 3 }} align="center">
              OR
            </Typography>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box>
              <ActionButton
                text="Add Link"
                leftIcon="add_link"
                my={0}
                // onClick={() => setOpenAddLink(true)}
              />
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Card sx={cardStyle} elevation={0}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            my={3}
            spacing={2}
            display={{ xs: "none", md: "flex" }}
          >
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
            <Grid item md={10}>
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

          <Grid
            container
            justifyContent="center"
            // my={1}
            spacing={2}
            display={{ md: "none" }}
            p={1}
          >
            <Grid item xs={6}>
              <Box>
                <input
                  // ref={uploadInputRef}
                  type="file"
                  // accept="audio/*,video/*"
                  style={{ display: "none" }}
                  // onChange={handleMobileUpload}
                  multiple
                />
                <ActionButton
                  // onClick={() =>
                  //   uploadInputRef.current &&
                  //   uploadInputRef.current.click()
                  // }
                  variant="outlined"
                  text="Add Files"
                  // leftIcon="upload_file"
                  my={0}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <ActionButton
                  variant="outlined"
                  text="Add Links"
                  // leftIcon="add_link"
                  my={0}
                  // onClick={() => setOpenAddLink(true)}
                />
              </Box>
            </Grid>
          </Grid>
        </Card>
      )}
    </Box>
  );
}
