import React, { useState } from 'react';
import Top from './mainComponents/Top'
import Aboutme from './mainComponents/Aboutme'
import { makeStyles } from '@material-ui/core/styles';
import Portfolio from './mainComponents/Portfolio';
import Contact from './mainComponents/Contact';

const useStyles = makeStyles({
  mainDiv: {
    margin: "0 auto",
    width: "100%",
    height: "700px",
    backgroundColor: "#d3d3d3",
    minHeight: "100%",
  },
});

const Main: React.FunctionComponent<Props> = ({toggleDrawer, mainType}) => {
  const classes=useStyles();

  let mainContent;
  if(mainType==="top"){
    mainContent=(
      <Top toggleDrawer={toggleDrawer} />
    );
  }else if(mainType==="profile"){
    mainContent=(
      <Aboutme />
    );
  }else if(mainType==="portfolio"){
    mainContent=(
      <Portfolio />
    );
  }else if(mainType==="contact"){
    mainContent=(
      <Contact />
    );
  }


  return (
    <div className={classes.mainDiv}>
      {mainContent}
    </div>
  );
}

export default Main;
