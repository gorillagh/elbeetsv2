"use client";
import React from "react";
import { useState, useRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ServiceSelect from "@/app/components/Inputs/ServiceSelect";
// import ReactPlayer from "react-player/lazy";
import { Card, CardContent, Skeleton } from "@mui/material";
import Image from "next/image";
import Loading from "../../../public/loadingSpin.gif";
import Thumbnail from "../../images/Translator-bro.png";
import dynamic from "next/dynamic";

// const ReactPlayer = dynamic(() => import("react-player"), {
//   ssr: false,
//   loading: () => (
//     <Box
//       width="500px"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Image src={Loading} alt="loading" />
//     </Box>
//   ),
// });

const services = [
  {
    name: "Transcription",
    value: "Transcription",
  },
  {
    name: "Captioning",
    value: "Captioning",
  },
  {
    name: "Translation",
    value: "Translation",
  },
];
const SampleSection = () => {
  const playerRef = useRef(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const captions = [
    { time: 0, text: "This is the first caption." },
    { time: 5, text: "Second caption appears after 5 seconds." },
    { time: 8, text: "Second caption appears after 8 seconds." },
    { time: 13, text: "Second caption appears after 13 seconds." },
    { time: 16, text: "Second caption appears after 16 seconds." },
    { time: 20, text: "Second caption appears after 20 seconds." },
    // Add more captions with corresponding timecodes
  ];
  const [service, setService] = useState("Transcription");

  const handleChange = (event) => {
    setService(event.target.value);
  };

  const handleProgress = ({ playedSeconds }) => {
    const index = captions.findIndex((caption) => caption.time > playedSeconds);
    setHighlightedIndex(index === -1 ? captions.length - 1 : index - 1);
  };
  return (
    <Container maxWidth="lg">
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="subheading" mr={5}>
          See a Sample
        </Typography>
        <ServiceSelect
          services={services}
          service={service}
          handleChange={handleChange}
        />
      </Box>

      <Typography mb={3} variant="subSubheading" color="primary.light">
        {service}
      </Typography>
      <Grid container spacing={2} disableEqualOverflow={true}>
        <Grid item xs={12} md={7} display="flex" alignItems="center">
          {/* <Box>
            <ReactPlayer
              light={
                <Box
                  width="500px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    width={400}
                    height={400}
                    src={Thumbnail}
                    alt="Thumbnail"
                    // fill
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Box>
              }
              ref={playerRef}
              controls
              onProgress={handleProgress}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            />
          </Box> */}
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            raised={false}
            sx={{ height: "350px", border: "solid 1px rgba(0,0,0,0.2)" }}
          >
            <CardContent>
              {captions.map((caption, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor:
                      index === highlightedIndex ? "yellow" : "transparent",
                  }}
                >
                  <Typography variant="bodyText1">{caption.text}</Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SampleSection;
