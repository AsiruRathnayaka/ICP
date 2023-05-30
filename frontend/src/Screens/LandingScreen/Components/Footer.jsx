import React from "react";
import { Typography, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#1A3E58",
        height: "30px",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Typography  color="white" fontSize='10px'>
        ICP - 2023 All rights reserved
      </Typography>
    </Grid>
  );
};

export default Footer;
