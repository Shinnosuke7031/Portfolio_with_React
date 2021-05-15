import React, { FC, useContext } from 'react';
import styles from './mob.module.css';
import { Context } from '../../../contexts/context';

const TopContentsMob: FC<{}> = () => {

  const {dispatch} = useContext(Context);

  const toggleDrawer = () => {
    dispatch({
      type: 'CHANGE_IS_DRAWER_OPEN',
      bool: true
    })
  };

  return (
    <div className={styles.topdivdivMob}>

        <p className={styles.welcom}>Welcome</p>      
      
        <p className={styles.see_more} style={{width: '200px'}} onClick={()=>toggleDrawer()}>See More</p>

        <div className={styles.topUnderMob}>
          <p style={{background: "linear-gradient(transparent 80%, #DDA0DD 20%)"}}>I'm studying Web development.</p>
        </div>
      </div>
  );
}

export default TopContentsMob;