"use client";
import { useState } from "react";
import ActionButton from "@/app/components/Buttons/ActionButton";
import LoadingSpin from "@/app/components/Feebacks/CircularProgress";
import { Card, Grid, Typography } from "@mui/material";

const cardStyle = {
  m: 1,
  p: 2,
  display: "flex",
  flexDirection: "column",
  background: "rgba(255,255,255,0.5)",
  webkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.9)",
};

export default function CheckoutCard({ totalCost, filesInQueue }) {
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
            {!totalCost ? (
              <LoadingSpin size={25} thickness={4} />
            ) : (
              `$${totalCost.toFixed(2)}`
            )}
          </Typography>
        </Grid>
      </Grid>

      <ActionButton
        disabled={!totalCost}
        my={0}
        text="Checkout"
        rightIcon="arrow_forward"
        // onClick={handleNext}
      />
    </Card>
  );
}
