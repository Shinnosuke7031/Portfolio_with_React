import React, { useContext } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MediaQuery from "react-responsive";
import styles from './pages.module.css';
//import { Context } from '../../contexts/context';

const Top: React.FunctionComponent<{}> = () => {

  //const {state, dispatch} = useContext(Context);
    
  return (
    <React.Fragment>
    <MediaQuery query="(min-width: 769px)">
      <div className={styles.topdivdiv}>

        <p className={styles.welcom}>Welcome</p>
        
          <div className={styles.icon_seemore}>
            <ArrowForwardIcon className={`${styles.icon} ${styles.right_arrow}`}/>
            <p className={styles.see_more}>See More</p>
            <ArrowBackIcon className={`${styles.icon} ${styles.left_arrow}`}/>
          </div>

        <div className={styles.topUnder}>
          <p style={{background: "linear-gradient(transparent 80%, #DDA0DD 20%)"}}>I'm studying Web development.</p>
        </div>
      </div>
    </MediaQuery>
    <MediaQuery query="(max-width: 768px)">
    <div className={styles.topdivdivMob}>

        <p className={styles.welcom}>Welcome</p>      
      
        <div className={styles.icon_seemore}>
          <ArrowForwardIcon className={`${styles.icon} ${styles.right_arrow}`}/>
          <p className={styles.see_more}>See More</p>
          <ArrowBackIcon className={`${styles.icon} ${styles.left_arrow}`}/>
        </div>

        <div className={styles.topUnderMob}>
          <p style={{background: "linear-gradient(transparent 80%, #DDA0DD 20%)"}}>I'm studying Web development.</p>
        </div>
      </div>
    </MediaQuery>
  </React.Fragment>
  );
}

export default Top;
