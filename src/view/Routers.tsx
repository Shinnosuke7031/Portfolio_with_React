import React, { FC } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Header from './organisms/Header';
import Top from './pages/Top';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AboutThisSite from './pages/AboutThisSite';
import styles from './routers.module.css';

const Routers: FC<{}> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Router>
        <div className={styles.container}>
          <Header />
          <div className={styles.wrapper}>
            <Switch>
              <Route exact path={"/"} component={Top} />
              <Route exact path={"/aboutme"} component={Aboutme} />
              <Route exact path={"/output"} component={Portfolio} />
              <Route exact path={"/contact"} component={Contact} />
              <Route exact path={"/about-this-site"} component={AboutThisSite} />
            </Switch>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default Routers;