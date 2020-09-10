import React from "react";
import MainBanner from "./MainBanner";
import MainServices from "./MainServices";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "20px",
      paddingRight: "20px"

    }
});
export default function Main() {
  const classes = useStyles();
  return (
    <div className="main">
      <div className="mainBanner">
        <MainBanner />
      </div>
      <Grid container spacing={1} className={classes.gridContainer} justify="center">
      <Grid item xs={12} sm={6} md={4}>
      <MainServices />
    </Grid>
    </Grid>
    </div>
  );
}
