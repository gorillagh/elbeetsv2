"use client";
import ActionButton from "@/app/components/Buttons/ActionButton";
import LoadingSpin from "@/app/components/Feebacks/CircularProgress";
import { Card, Grid, Typography } from "@mui/material";

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
const totalCost = 60;
const filesInQueue = 4;
export default function CheckoutCard() {
  return (
    <Card sx={cardStyle}>
      <Grid container justifyContent="space-between" px={2}>
        <Grid item>
          <Typography textAlign="center" variant="subSubheading">
            Total
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="h5" fontWeight={700}>
            {filesInQueue > 0 || !totalCost ? (
              <LoadingSpin size={20} thickness={4} />
            ) : (
              `$${totalCost}`
              // "$" + totalCost
            )}
          </Typography>
        </Grid>
      </Grid>

      <ActionButton
        disabled={filesInQueue > 0}
        my={0}
        text="Checkout"
        rightIcon="arrow_forward"
        // onClick={handleNext}
      />
    </Card>
  );
}
