import ActionButton from "@/app/components/Buttons/ActionButton";
import ServiceCard from "@/app/components/Cards/ServiceCard";
import PopupModal from "@/app/components/Modals/PopupModal";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Page() {
  return (
    <PopupModal>
      <Typography variant="h6" color="#fff">
        Choose Order Type
      </Typography>
      <Grid container spacing={{ xs: 6, md: 12 }} disableEqualOverflow={true}>
        <Grid
          item
          md={4}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ActionButton text="Transcription" />
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ActionButton text="Captioning" />
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ActionButton text="Translation" />
        </Grid>
      </Grid>
    </PopupModal>
  );
}
