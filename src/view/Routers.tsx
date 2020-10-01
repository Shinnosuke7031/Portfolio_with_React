import React, { FC } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './organisms/Header';
import Top from './pages/Top';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import styles from './routers.module.css'

const Routers: FC<{}> = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <div className={styles.wrapper}>
          <Switch>
            <Route exact path={"/"} component={Top} />
            <Route exact path={"/aboutme"} component={Aboutme} />
            <Route exact path={"/output"} component={Portfolio} />
            <Route exact path={"/contact"} component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Routers;