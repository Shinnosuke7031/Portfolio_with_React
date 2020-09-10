import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@material-ui/core/Grid';
import { purple } from '@material-ui/core/colors';
import MediaQuery from "react-responsive";

const useStyles = makeStyles({
  pTag: {
    margin: "0 auto",
    textAlign: "center",
    width: "60%",
    padding: "50px 0 20px 0",
    fontSize: 80,
  },
  pTagMob: {
    margin: "0 auto",
    textAlign: "center",
    width: "80%",
    padding: "50px 0 20px 0",
    fontSize: 60,
  },
  ppTag: {
    margin: "0 auto",
    textAlign: "center",
    width: "70%",
    padding: "20px 0 40px 0",
    fontSize: 30,
  },
  topdivdiv: {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    fontWeight: 600,
    willChange: "opacity",
    width: "70%",
    margin: "0 auto",
  },
  icon: {
    fontSize: 60,
    display: "block",
    margin: "0 auto",
  },
  menutext: {
    textDecoration: "underline",
    margin: "0 auto",
    fontSize: 30,
    textAlign: "center",
    cursor: "pointer",
    transition: "1s"
  },
  menutextHovered: {
    textDecoration: "underline",
    margin: "0 auto",
    fontSize: 40,
    textAlign: "center",
    cursor: "pointer",
    color: purple[800],
    transition: "1s"
  },
  topUnder: {
    margin: "70px auto",
    fontSize: 30,
    textAlign: "center",
    width: "100%"
  },
  topUnderMob: {
    margin: "70px auto",
    fontSize: 20,
    textAlign: "center",
    width: "70%",
  },
  topdivdivMob: {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    fontWeight: 600,
    willChange: "opacity",
    width: "95%",
    margin: "0 auto",
  }
});

type Props = {
  toggleDrawer: (open: boolean) => void;
}

const Top: React.FunctionComponent<Props> = ({toggleDrawer}) => {
  const classes = useStyles();
  const [state, toggle] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const clickStyle = isHovered ? classes.menutextHovered : classes.menutext;

  // カーソルが乗った時に状態を変更するイベントハンドラ
  const onMouseEnter = () => {
    setIsHovered(true);
  }

  // カーソルが外れた時に状態を変更するイベントハンドラ
  const onMouseLeave = () => {
    setIsHovered(false);
  }
    
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })
  return (
    <React.Fragment>
    <MediaQuery query="(min-width: 769px)">
      <div className={classes.topdivdiv}>
        <animated.div
          style={{
            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
              })
              .interpolate(x => `scale(${x})`)
          }}>

          <p className={classes.pTag} onClick={() => toggle(!state)}>Welcome</p>
        </animated.div>
      
        <p className={classes.ppTag}>This is Shinnosuke's Site.</p>
        <Grid container alignItems="center" justify="center" onClick={()=>toggleDrawer(true)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Grid item xs={1}>
            <ArrowForwardIcon className={classes.icon}/>
          </Grid>
          <Grid item xs={4}>
            <p className={clickStyle}>See More</p>
          </Grid>
          <Grid item xs={1}>
            <ArrowBackIcon className={classes.icon}/>
          </Grid>
        </Grid>
        <div className={classes.topUnder}>
          <p style={{background: "linear-gradient(transparent 80%, #DDA0DD 20%)"}}>I'm studying Web development.</p>
        </div>
      </div>
    </MediaQuery>
    <MediaQuery query="(max-width: 768px)">
    <div className={classes.topdivdivMob}>
        <animated.div
          style={{
            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
              })
              .interpolate(x => `scale(${x})`)
          }}>

          <p className={classes.pTagMob} onClick={() => toggle(!state)}>Welcome</p>
        
        </animated.div>
      
        <p className={classes.ppTag}>This is Shinnosuke's Site.</p>
        <Grid container alignItems="center" justify="center" onClick={()=>toggleDrawer(true)} >
          <Grid item xs={5}>
            <p className={classes.menutext}>See More</p>
          </Grid>
        </Grid>
        <div className={classes.topUnderMob}>
          <p style={{background: "linear-gradient(transparent 80%, #DDA0DD 20%)"}}>I'm studying Web development.</p>
        </div>
      </div>
    </MediaQuery>
  </React.Fragment>
  );
}

export default Top;
