"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Box, Fade, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
  background: "rgba(19, 84, 171, 0.5)",
  // background: "rgb(140, 38, 46, 0.5)",
  borderRadius: "5px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5.3px)",
  WebkitBackdropFilter: "blur(5.3px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  p: 4,
};

export default function PopupModal(props) {
  const router = useRouter();

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    router.back();
    setOpen(false);
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      // slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          {/* <Typography id="transition-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {props.children}
        </Box>
      </Fade>
    </Modal>
  );
}
