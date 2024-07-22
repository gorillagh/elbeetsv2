"use client";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Grid,
  Icon,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import LoadingSpin from "@/app/components/Feebacks/CircularProgress";
import CheckboxInput from "@/app/components/Inputs/CheckboxInput";
import CheckoutCard from "./CheckoutCard";

const cardStyle = {
  m: 1,
  mb: 4,
  display: "flex",
  flexDirection: "column",
  background: "rgba(255,255,255,0.5)",
  webkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.9)",
};

export default function UploadedFiles(props) {
  const [files, setFiles] = useState(props.files || []);
  const [expanded, setExpanded] = useState([]);

  const handleExpandChange = (fileId) => (event, isExpanded) => {
    setExpanded((prev) =>
      isExpanded ? [...prev, fileId] : prev.filter((id) => id !== fileId)
    );
  };

  const handleCheckboxChange = (fileId, field) => (event) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === fileId ? { ...file, [field]: event.target.checked } : file
      )
    );
  };

  const handleDelete = (fileId) => () => {
    const updatedFiles = files.filter((file) => file.id !== fileId);
    setFiles(updatedFiles);
    window.localStorage.setItem("elbeeFiles", JSON.stringify(updatedFiles));
  };

  const calculateAdditionalCost = (file) => {
    const additionalCosts = [
      file.express ? file.duration * 0.3 : 0,
      file.timeStamp ? file.duration * 0.4 : 0,
      file.verbatim ? file.duration * 0.5 : 0,
    ];
    return additionalCosts.reduce((acc, cost) => acc + cost, 0);
  };

  const calculateTotalCost = () => {
    if (!files || files.length === 0) return 0;
    return files.reduce((acc, file) => {
      const fileCost = file.total + calculateAdditionalCost(file);
      return acc + fileCost;
    }, 0);
  };

  return (
    <>
      <Card sx={cardStyle}>
        <List dense>
          {files &&
            files.map((file) => (
              <ListItem key={file.id}>
                <Accordion
                  disabled={!file.total}
                  sx={{ width: "100%" }}
                  onChange={handleExpandChange(file.id)}
                >
                  <AccordionSummary
                    expandIcon={
                      <Icon sx={{ color: "info.dark" }}>expand_more</Icon>
                    }
                    aria-controls={`panel-${file.id}-content`}
                    id={`panel-${file.id}-header`}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={1.5}>
                        <Icon
                          onClick={handleDelete(file.id)}
                          fontSize="small"
                          sx={{ color: "error.light", cursor: "pointer" }}
                        >
                          delete_outlined
                        </Icon>
                      </Grid>
                      <Grid item xs={7.5}>
                        <Typography
                          display={
                            expanded.includes(file.id) ? "none" : "block"
                          }
                          fontWeight={500}
                          variant="body2"
                          sx={{
                            maxHeight: "30px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            inlineSize: { xs: "150px", md: "100%" },
                            whiteSpace: "nowrap",
                          }}
                        >
                          {file.name}
                        </Typography>
                        {!file.total && <LoadingSpin />}
                      </Grid>
                      <Grid item xs={3}>
                        <Typography
                          display={
                            expanded.includes(file.id) ? "none" : "block"
                          }
                          variant="body2"
                          fontWeight={500}
                        >
                          {file.total ? `$${file.total.toFixed(2)}` : ""}
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3 }}>
                    <Typography variant="body2" fontWeight={600}>
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
                          ${file.cost.toFixed(2)}
                        </Typography>
                      </Grid>
                    </Grid>

                    {["express", "timeStamp", "verbatim"].map(
                      (field, index) => (
                        <Grid container spacing={1} my={0.1} key={index}>
                          <Grid item>
                            <CheckboxInput
                              label={
                                <Typography
                                  variant="bodyText2"
                                  fontWeight={400}
                                >
                                  {field.charAt(0).toUpperCase() +
                                    field.slice(1)}{" "}
                                  (+$
                                  {field === "express"
                                    ? 0.3
                                    : field === "timeStamp"
                                    ? 0.4
                                    : 0.5}
                                  /min)
                                </Typography>
                              }
                              checked={file[field]}
                              size="small"
                              sx={{
                                color: "info.light",
                                "&.Mui-checked": {
                                  color: "info.dark",
                                },
                              }}
                              onChange={handleCheckboxChange(file.id, field)}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <Typography
                              variant="bodyText2"
                              fontWeight={400}
                              textAlign={{ xs: "right", md: "left" }}
                              display={!file[field] ? "none" : "block"}
                            >
                              $
                              {(
                                (field === "express"
                                  ? 0.3
                                  : field === "timeStamp"
                                  ? 0.4
                                  : 0.5) * file.duration
                              ).toFixed(2)}
                            </Typography>
                          </Grid>
                        </Grid>
                      )
                    )}

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
                          $
                          {(
                            file.total +
                            parseFloat(calculateAdditionalCost(file))
                          ).toFixed(2)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
            ))}
        </List>
      </Card>
      <Box width={{ md: "50%" }} ml="auto">
        <CheckoutCard
          totalCost={calculateTotalCost()}
          filesInQueue={files.length}
        />
      </Box>
    </>
  );
}
