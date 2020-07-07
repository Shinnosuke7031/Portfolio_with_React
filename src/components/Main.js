import React from 'react';
import Top from './mainComponents/Top'
import Aboutme from './mainComponents/Aboutme'
import { makeStyles } from '@material-ui/core/styles';
import Portfolio from './mainComponents/Portfolio';
import Contact from './mainComponents/Contact';
import MediaQuery from "react-responsive";

const useStyles = makeStyles({
  mainDiv: {
    margin: "0 auto",
    width: "100%",
    height: "700px",
    backgroundColor: "#d3d3d3",
    minHeight: "100%",
  },
  mainDivMob: {
    margin: "0 auto",
    width: "100%",
    height: "100%",
    backgroundColor: "#d3d3d3",
    minHeight: "100%",
    paddingBottom: "10%"
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
    <div>
      <MediaQuery query="(min-width: 769px)">
        <div className={classes.mainDiv}>
          {mainContent}
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 768px)">
        <div className={classes.mainDivMob}>
          {mainContent}
        </div>
      </MediaQuery>
    </div>
    
  );
}

export default Main;
