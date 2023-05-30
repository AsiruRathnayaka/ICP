import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import HeroImage from "../../../Assets/Hero_section_background.png";

const HeroSection = () => {
  const [isButton2Clicked, setButton2Clicked] = useState(false);

  const handleButton2Click = () => {
    setButton2Clicked(true);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'relative',
        height: '55vh', // Set the desired height of the hero section
        textAlign: 'center',
        overflow: 'hidden',
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        "&::before": {
          content: "''",
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.77)',
        },
      }}
    >
      <Grid item sx={{ zIndex: '1' }}>
        <Typography color="white" variant="h4">
        Colombian Congress Approves New Legislation to Address Economic Challenges
        </Typography>
      </Grid>
      <Grid item sx={{ marginTop: "40px", zIndex: '1' }}>
      <Button
          variant="contained"
          sx={{
            marginRight: "10px",
            borderRadius: '4pt',
            background: 'rgba(26, 62, 88, 1)',
          }}
        >
          Button 1
        </Button>
        <Button
          variant="contained"
          color={isButton2Clicked ? "secondary" : "primary"}
          onClick={handleButton2Click}
          sx={{
            borderRadius: '4pt',
            background: isButton2Clicked ? 'rgba(26, 62, 88, 1)' : 'none',
          }}
        >
          Button 2
        </Button>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
