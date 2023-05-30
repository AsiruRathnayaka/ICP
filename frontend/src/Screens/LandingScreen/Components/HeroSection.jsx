import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import HeroImage from "../../../Assets/Hero_section_background.png";

const HeroSection = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: "1",
        height: "55vh", // Set the desired height of the hero section
        textAlign: "center",
        bgcolor: "rgba(0, 0, 0, 0.57)",
      }}
    >
      <Grid item>
        <Typography color="black" variant="h4">
          Welcome to the Hero Section!
        </Typography>
      </Grid>
      <Grid item sx={{ marginTop: "40px" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: "10px" }}
        >
          Button 1
        </Button>
        <Button variant="contained" color="secondary">
          Button 2
        </Button>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
