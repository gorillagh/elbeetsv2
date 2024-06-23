"use client";
import { useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Grid,
  Icon,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import LoadingSpin from "@/app/components/Feebacks/CircularProgress";
import CheckboxInput from "@/app/components/Inputs/CheckboxInput";

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
const files = [
  { id: "001", total: 50 },
  { id: "002", total: 50 },
  { id: "002", total: 50 },
  { id: "002", total: 50 },
];
export default function UploadedFiles() {
  const [accordionExpanded, setAccordionExpanded] = useState([]);
  return (
    <Card sx={cardStyle}>
      <List dense>
        {files.map((file, i) => (
          <ListItem key={file.id}>
            <Accordion
              disabled={file.total ? false : true}
              // disabled
              sx={{ width: "100%" }}
              onChange={(event, isExpanded) => {
                if (isExpanded) {
                  setAccordionExpanded((prevState) => [...prevState, file.id]);
                } else {
                  setAccordionExpanded((prevState) => {
                    prevState = prevState.filter((item) => item !== file.id);
                    return [...prevState];
                  });
                }
              }}
            >
              <AccordionSummary
                expandIcon={
                  file.total ? (
                    <Icon sx={{ color: "info.dark" }}>expand_more</Icon>
                  ) : (
                    ""
                    // <CircularProgress size={20} thickness={4} />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Grid container spacing={2}>
                  <Grid item xs={1.5}>
                    <Typography
                      variant="body2"
                      sx={{
                        flexShrink: 0,
                        color: "text.secondary",
                        mt: 0.5,
                      }}
                    >
                      <Icon
                        onClick={() => {
                          let filteredFiles = files.filter(
                            (f) => f.id !== file.id
                          );
                          setFiles(filteredFiles);
                          window.localStorage.setItem(
                            "elbeeFiles",
                            JSON.stringify(filteredFiles)
                          );
                        }}
                        fontSize="small"
                        sx={{ color: "error.light" }}
                      >
                        delete_outlined
                      </Icon>
                    </Typography>
                  </Grid>
                  <Grid item xs={7.5}>
                    <Typography
                      display={accordionExpanded.includes(file.id) && "none"}
                      fontWeight={500}
                      variant="body2"
                      sx={{
                        // color: "text.secondary",
                        maxHeight: "30px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        inlineSize: { xs: "150px", md: "100%" },
                        whiteSpace: "nowrap",
                      }}
                    >
                      {file.name}
                    </Typography>
                    {file.total ? (
                      ""
                    ) : (
                      <LoadingSpin />
                      // <LinearProgressWithPercentage
                      //   value={file.uploadProgress}
                      // />
                    )}
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      display={accordionExpanded.includes(file.id) && "none"}
                      variant="body2"
                      fontWeight={500}
                      sx={{
                        // color: "text.secondary",
                        maxHeight: "32px",
                        overflow: "hidden",
                      }}
                    >
                      {file.total
                        ? "$" + (Math.round(file.total * 100) / 100).toFixed(2)
                        : ""}
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3 }}>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {file.name}
                </Typography>
                <br />
                <Grid container spacing={1}>
                  <Grid item xs={9}>
                    <Typography variant="body2" fontWeight={600}>
                      Duration: {file.duration}{" "}
                      {file.duration > 1 ? "mins" : "min"}
                    </Typography>

                    <Typography variant="body2" fontWeight={600}>
                      Turnaround: 2hrs
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant="body2"
                      fontWeight={400}
                      textAlign={{ xs: "right", md: "left" }}
                    >
                      ${(Math.round(file.cost * 100) / 100).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>

                {/* //////////////////Additional Packages////////////////////////// */}
                <Grid container spacing={1} my={0.1}>
                  <Grid item>
                    <CheckboxInput
                      label={
                        <Typography variant="bodyText2" fontWeight={400}>
                          Express Order (+$0.3/min)
                        </Typography>
                      }
                      checked={file.express}
                      size="small"
                      sx={{
                        color: "info.light",
                        "&.Mui-checked": {
                          color: "info.dark",
                        },
                      }}
                      onChange={(e, isChecked) => {
                        setFiles((prevState) => {
                          let foundIndex = prevState.findIndex(
                            (f) => f.id === file.id
                          );
                          prevState[foundIndex].express = isChecked;
                          window.localStorage.setItem(
                            "elbeeFiles",
                            JSON.stringify(prevState)
                          );
                          return [...prevState];
                        });
                        calculateFileCost(file);
                        calculateTotalCost(files);
                      }}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Typography
                      variant="bodyText2"
                      fontWeight={400}
                      textAlign={{ xs: "right", md: "left" }}
                      display={!file.express && "none"}
                    >
                      $
                      {(Math.round(file.duration * 0.3 * 100) / 100).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} my={0.1}>
                  <Grid item>
                    <CheckboxInput
                      label={
                        <Typography variant="bodyText2" fontWeight={400}>
                          Timestamp (+$0.4/min)
                        </Typography>
                      }
                      checked={file.timeStamp}
                      size="small"
                      sx={{
                        color: "info.light",
                        "&.Mui-checked": {
                          color: "info.dark",
                        },
                      }}
                      onChange={(e, isChecked) => {
                        setFiles((prevState) => {
                          let foundIndex = prevState.findIndex(
                            (f) => f.id === file.id
                          );
                          prevState[foundIndex].timeStamp = isChecked;
                          window.localStorage.setItem(
                            "elbeeFiles",
                            JSON.stringify(prevState)
                          );
                          return [...prevState];
                        });
                        calculateFileCost(file);
                        calculateTotalCost(files);
                      }}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Typography
                      variant="bodyText2"
                      fontWeight={400}
                      textAlign={{ xs: "right", md: "left" }}
                      display={!file.timeStamp && "none"}
                    >
                      $
                      {(Math.round(file.duration * 0.4 * 100) / 100).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} my={0.1}>
                  <Grid item>
                    <CheckboxInput
                      label={
                        <Typography variant="bodyText2" fontWeight={400}>
                          Verbatim (+$0.5/min)
                        </Typography>
                      }
                      size="small"
                      sx={{
                        color: "info.light",
                        "&.Mui-checked": {
                          color: "info.dark",
                        },
                      }}
                      checked={file.verbatim}
                      onChange={(e, isChecked) => {
                        setFiles((prevState) => {
                          let foundIndex = prevState.findIndex(
                            (f) => f.id === file.id
                          );
                          prevState[foundIndex].verbatim = isChecked;
                          window.localStorage.setItem(
                            "elbeeFiles",
                            JSON.stringify(prevState)
                          );
                          return [...prevState];
                        });
                        calculateFileCost(file);
                        calculateTotalCost(files);
                      }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant="body2"
                      fontWeight={400}
                      textAlign={{ xs: "right", md: "left" }}
                      display={!file.verbatim && "none"}
                    >
                      $
                      {(Math.round(file.duration * 0.5 * 100) / 100).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>

                {/* //////////////////Additional Packages////////////////////////// */}

                <Grid container spacing={1} my={0.1} justifyContent="right">
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight={500}>
                      Total
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant="body2"
                      fontWeight={500}
                      textAlign={{ xs: "right", md: "left" }}
                    >
                      ${(Math.round(file.total * 100) / 100).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
