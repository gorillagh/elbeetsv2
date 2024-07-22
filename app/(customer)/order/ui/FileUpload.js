"use client";
import React, { useRef, useCallback, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import ActionButton from "../../components/Buttons/ActionButton";
import DropZone from "../../components/Inputs/DropZone";
// import { toast } from "react-toastify";

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
  const [files, setFiles] = useState([]);
  const [rejectedFiles, setRejectedFiles] = useState([]);
  const [filesInQueue, setFilesInQueue] = useState(0);
  const [progress, setProgress] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const url = "https://httpbin.org/post";
  const getUploadParams = ({ meta }) => {
    return {
      url,
      meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` },
    };
  };

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  const calculateFileCost = (file) => {
    file.total =
      Number(file.cost) +
      (file.express ? Number(file.duration) * 0.3 : 0) +
      (file.verbatim ? Number(file.duration) * 0.5 : 0) +
      (file.timeStamp ? Number(file.duration) * 0.4 : 0);

    setFiles((prevState) => {
      let foundIndex = prevState.findIndex((f) => f.id === file.id);
      prevState[foundIndex].total = (
        Math.round(file.total * 100) / 100
      ).toFixed(2);

      return [...prevState];
    });
  };

  const calculateTotalCost = (files) => {
    var total = 0;
    if (files && files.length) {
      for (var i in files) {
        total += Number(files[i].total);
      }
      setTotalCost((Math.round(total * 100) / 100).toFixed(2));
    }
  };

  const onDrop = useCallback(async (acceptedFiles, rejectedFiles) => {
    try {
      console.log(acceptedFiles);
      console.log(rejectedFiles);
      rejectedFiles.map((file) =>
        setRejectedFiles((prev) => [
          ...prev,
          { name: file.path, size: file.size },
        ])
      );
      setFilesInQueue(acceptedFiles.length - 1);
      acceptedFiles.map(async (file) => {
        let fileId = uuid();
        setFiles((prevState) => [
          ...prevState,
          {
            id: fileId,
            name: file.name,
          },
        ]);
        const fileData = new FormData();
        fileData.append("file", file, `${fileId}/${file.name}`);
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/uploadfile/transcription`,
          fileData
        );
        console.log(data);
        setFiles((prevState) => {
          let foundIndex = prevState.findIndex((f) => f.id === data.id);
          prevState[foundIndex] = data;
          window.localStorage.setItem("elbeeFiles", JSON.stringify(prevState));
          return [...prevState];
        });

        setFilesInQueue((prevState) => prevState - 1);
      });
    } catch (error) {
      console.log(error);
      toast.error("File upload failed");
    }
  }, []);

  const handleMobileUpload = async (e) => {
    try {
      let acceptedFiles = [];
      let files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.includes("image")) {
          setRejectedFiles((prevState) => [
            ...prevState,
            { name: files[i].name, size: files[i].size },
          ]);
        } else {
          acceptedFiles.push(files[i]);
        }
      }
      setFilesInQueue((prevState) => Number(prevState) + files.length);
      console.log("Files--->", files);
      acceptedFiles.map(async (file, i) => {
        let fileId = uuid();
        setFiles((prevState) => [
          ...prevState,
          {
            id: fileId,
            name: file.name,
          },
        ]);
        const fileData = new FormData();
        fileData.append("file", file, `${fileId}/${file.name}`);
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/uploadfile/transcription`,
          fileData
        );
        setProgress(data.progress);
        setFiles((prevState) => {
          let foundIndex = prevState.findIndex((f) => f.id === data.id);
          prevState[foundIndex] = data;
          window.localStorage.setItem("elbeeFiles", JSON.stringify(prevState));
          return [...prevState];
        });
        setFilesInQueue((prevState) => prevState - 1);
      });
    } catch (error) {
      console.log(error);
      toast.error("File upload failed");
    }
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
