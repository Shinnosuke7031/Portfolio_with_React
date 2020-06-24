import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Top from './mainComponents/Top'
import Aboutme from './mainComponents/Aboutme'
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles({
  mainDiv: {
    margin: "0 auto",
    width: "100%",
    height: "100%",
    backgroundColor: "#d3d3d3",
  },
});

const Main: React.FunctionComponent<{toggleDrawer: any}> = ({toggleDrawer}) => {
  const classes=useStyles();

  return (
    <div className={classes.mainDiv}>
      <CssBaseline />
      <Top toggleDrawer={toggleDrawer}/>
    </div>
  );
}

export default Main;
