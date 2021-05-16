import React, { FC, useContext, useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from './pc.module.css';
import { Context } from '../../../contexts/context';
import { useSpring, animated, config } from '@react-spring/web';

const TopContents: FC<{}> = () => {

  const {state, dispatch} = useContext(Context);

  const [flip, set] = useState(false);
  const props_h1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    // reset: true,
    // reverse: flip,
    delay: 100,
    config: config.molasses,
    // onRest: () => set(!flip),
  });
  const props_div = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    delay: 5000,
  });
  const props_underline = useSpring({
    to: { width: 500, border: '1px solid #6a1b9a' },
    from: { width: 0, border: '1px solid #d3d3d3' },
    config: config.slow,
    delay: 3500,
  });
  const delayTimes = [0, 800, 1600, 2400, 3200];
  const props_r = delayTimes.map(delayTime => 
    useSpring({
      to: { opacity: 1, rotateZ: 0 },
      from: { opacity: 0, rotateZ: 180 },
      config: config.wobbly,
      delay: delayTime==0 ? 0 : delayTime-100,
    })
  )

  const toggleDrawer = () => {
    dispatch({
      type: 'CHANGE_IS_DRAWER_OPEN',
      bool: true
    })
  };
  const toggleDisplayFirst = () => {
    dispatch({
      type: 'CHANGE_IS_DISPLAY_FIRST',
      bool: !state.isDisplayFirst
    })
  };

  setTimeout(() => {
    toggleDisplayFirst();
  }, 8000)

  return (
    <div className={styles.topdivdiv}>

      {state.isDisplayFirst && 
      <animated.div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        background: '#d3d3d3',
        zIndex: 9999,
        ...props_div
      }}>
        <animated.div style={{...props_underline}} />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <animated.h1 style={{...props_r[0]}}>
            <p className={styles.welcome_animation}>S</p>
          </animated.h1>
          <animated.h1 style={{...props_r[0]}}>
            <p className={styles.welcome_animation}>H</p>
          </animated.h1>
          <animated.h1 style={{...props_r[0]}}>
            <p className={styles.welcome_animation}>I</p>
          </animated.h1>
          <animated.h1 style={{...props_r[1]}}>
            <p className={styles.welcome_animation}>N</p>
          </animated.h1>
          <animated.h1 style={{...props_r[2]}}>
            <p className={styles.welcome_animation}>N</p>
          </animated.h1>
          <animated.h1 style={{...props_r[2]}}>
            <p className={styles.welcome_animation}>O</p>
          </animated.h1>
          <animated.h1 style={{...props_r[3]}}>
            <p className={styles.welcome_animation}>S</p>
          </animated.h1>
          <animated.h1 style={{...props_r[3]}}>
            <p className={styles.welcome_animation}>U</p>
          </animated.h1>
          <animated.h1 style={{...props_r[4]}}>
            <p className={styles.welcome_animation}>K</p>
          </animated.h1>
          <animated.h1 style={{...props_r[4]}}>
            <p className={styles.welcome_animation}>E</p>
          </animated.h1>
        </div>
        <animated.div style={{...props_underline}} />
      </animated.div>
      }

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