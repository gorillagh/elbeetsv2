"use client";
import React, { useRef } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import ActionButton from "../../components/Buttons/ActionButton";
import DropZone from "../../components/Inputs/DropZone";

const cardStyle = {
  m: 1,
  p: 2,
  display: "flex",
  flexDirection: "column",
  background: "rgba(255,255,255,0.5)",
  webkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.9)",
};

export default function FileUpload(props) {
  const uploadInputRef = useRef(null);

  const onDrop = (acceptedFiles) => {
    console.log("Files dropped: ", acceptedFiles);
    // Handle file drop logic
  };

  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" }; // Mock URL for file upload
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log("Status change: ", status, meta, file);
    // Handle status change logic
  };

  const handleSubmit = (files, allFiles) => {
    console.log("Files submitted: ", files);
    allFiles.forEach((f) => f.remove());
    // Handle form submission logic
  };

  const handleMobileUpload = (event) => {
    const files = event.target.files;
    console.log("Files selected: ", files);
    // Handle mobile file upload logic
  };

  const renderDropZone = (filesExist) => (
    <DropZone
      onDrop={onDrop}
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      files={filesExist ? props.files : undefined}
    />
  );

  const renderActionButtons = (variant, display) => (
    <Grid container justifyContent="center" spacing={2} sx={{ display }}>
      <Grid item xs={6}>
        <Box>
          <input
            type="file"
            style={{ display: "none" }}
            multiple
            onChange={handleMobileUpload}
            ref={uploadInputRef}
          />
          <ActionButton
            variant={variant}
            text="Add Files"
            // leftIcon="upload_file"
            my={0}
            onClick={() =>
              uploadInputRef.current && uploadInputRef.current.click()
            }
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <ActionButton
            variant={variant}
            text="Add Links"
            // leftIcon="add_link"
            my={0}
            // onClick={() => setOpenAddLink(true)}
          />
        </Box>
      </Grid>
    </Grid>
  );

  const renderFileUploadContent = (filesExist) => (
    <Card sx={cardStyle}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        my={3}
        spacing={2}
        display={{ xs: "none", md: "flex" }}
      >
        <Grid item md={10}>
          {renderDropZone(filesExist)}
        </Grid>
        <Grid item md={12}>
          <Typography sx={{ my: 1 }} align="center">
            OR
          </Typography>
        </Grid>
        <Grid item md={8}>
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
      {renderActionButtons("outlined", { xs: "flex", md: "none" })}
    </Card>
  );

  return (
    <Box>
      {!props.files ? (
        <Card sx={cardStyle}>
          <Grid container justifyContent="center" my={1} spacing={2} p={1}>
            <Grid item xs={12} md={9}>
              {renderDropZone(false)}
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <input
                  type="file"
                  style={{ display: "none" }}
                  multiple
                  onChange={handleMobileUpload}
                  ref={uploadInputRef}
                />
                <ActionButton
                  text="Upload"
                  leftIcon="upload_file"
                  my={0}
                  onClick={() =>
                    uploadInputRef.current && uploadInputRef.current.click()
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
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
        </Card>
      ) : (
        renderFileUploadContent(true)
      )}
    </Box>
  );
}
