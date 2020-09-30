import React, { FC } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import MediaQuery from "react-responsive";
import { makeStyles } from '@material-ui/core/styles';
import Header from './organisms/Header';
import Top from './pages/Top'

const useStyles = makeStyles({
  mainDiv: {
    margin: "0 auto",
    width: "100%",
    height: "100vh",
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

const Routes: FC<{}> = () => {
  const classes = useStyles();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <MediaQuery query="(min-width: 769px)">
          <div className={classes.mainDiv}>
           <Route exact path={"/"} component={Top} />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 768px)">
          <div className={classes.mainDivMob}>
            
          </div>
        </MediaQuery>
        
      </Switch>
    </Router>
  );
};

export default Routes;