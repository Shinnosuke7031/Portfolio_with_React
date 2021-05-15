import React, { FC, useContext } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from './pc.module.css';
import { Context } from '../../../contexts/context';

const TopContents: FC<{}> = () => {

  const {dispatch} = useContext(Context);

  const toggleDrawer = () => {
    dispatch({
      type: 'CHANGE_IS_DRAWER_OPEN',
      bool: true
    })
  };

  return (
    <div className={styles.topdivdiv}>

      <p className={styles.welcom}>Welcome</p>
      
        <div className={styles.icon_seemore}>
          <ArrowForwardIcon className={`${styles.icon} ${styles.right_arrow}`}/>
          <p className={styles.see_more} onClick={()=>toggleDrawer()}>See More</p>
          <ArrowBackIcon className={`${styles.icon} ${styles.left_arrow}`}/>
        </div>

      <div className={styles.topUnder}>
        <p style={{background: "linear-gradient(transparent 80%, #DDA0DD 20%)"}}>I'm studying Web development.</p>
      </div>
      
    </div>
  );
}

export default TopContents;