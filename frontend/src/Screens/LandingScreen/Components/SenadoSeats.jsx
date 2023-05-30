import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import Seats from "../../../Assets/style.svg";
import { FiberManualRecord as FiberManualRecordIcon } from '@mui/icons-material';

const SenadoSeats = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:"-40px"}}>
    <Grid container spacing={2} justifyContent="center" width="80%">
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography component="div">
            <FiberManualRecordIcon sx={{ fontSize: 12, marginRight: '8px' }} />
              20 Pacto Historico</Typography>
            <Typography component="div">
            <FiberManualRecordIcon sx={{ fontSize: 12, marginRight: '8px' }} />
            15 Partido conservador</Typography>
            <Typography component="div">
            <FiberManualRecordIcon sx={{ fontSize: 12, marginRight: '8px' }} />
            14 Liberal</Typography>
            <Typography component="div">
            <FiberManualRecordIcon sx={{ fontSize: 12, marginRight: '8px' }} />
            13 Coalición alianza verde y centro esperanza</Typography>
            <Typography component="div">
            <FiberManualRecordIcon sx={{ fontSize: 12, marginRight: '8px' }} />
            13 Centro democrático</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={Seats} alt="seats_senado" width="100%" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
          <Typography component="div">
            <FiberManualRecordIcon sx={{ fontSize: 12, marginRight: '8px' }} />
              20 Pacto Historico</Typography>
            <Typography component="div">
            <FiberManualRecordIcon sx={{ fontSize: 12, marginRight: '8px' }} />
            15 Partido conservador</Typography>
            <Typography component="div">
            <FiberManualRecordIcon sx={{ fontSize: 12, marginRight: '8px' }} />
            14 Liberal</Typography>
            <Typography component="div">
            <FiberManualRecordIcon sx={{ fontSize: 12, marginRight: '8px' }} />
            13 Coalición alianza verde y centro esperanza</Typography>
            <Typography component="div">
            <FiberManualRecordIcon sx={{ fontSize: 12, marginRight: '8px' }} />
            13 Centro democrático</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </div>
  );
};

export default SenadoSeats;
