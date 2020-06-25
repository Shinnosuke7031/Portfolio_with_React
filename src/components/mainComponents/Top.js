import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@material-ui/core/Grid';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles({
  pTag: {
    margin: "0 auto",
    textAlign: "center",
    padding: 0,
    width: "70%",
    padding: "50px 0 20px 0",
    fontSize: 80,
  },
  ppTag: {
    margin: "0 auto",
    textAlign: "center",
    padding: 0,
    width: "70%",
    padding: "20px 0 40px 0",
    fontSize: 30,
  },
  topdivdiv: {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    fontWeight: 600,
    willChange: "opacity",
  },
  icon: {
    fontSize: 60,
    display: "block",
    margin: "0 auto",
  },
  menutext: {
    margin: "0 auto",
    fontSize: 30,
    textAlign: "center",
    cursor: "pointer",
    transition: "1s"
  },
  menutextHovered: {
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
    width: "55%"
  }
});

const Top: React.FunctionComponent<{toggleDrawer: any}> = ({toggleDrawer}) => {
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
        <p className={classes.ppTag} onClick={() => toggle(!state)}>This is Nosuke's Site.</p>
      </animated.div>
        <Grid container alignItems="center" justify="center" onClick={toggleDrawer(true)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Grid item xs={1}>
            <ArrowForwardIcon className={classes.icon}/>
          </Grid>
          <Grid item xs={3}>
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
  );
}

export default Top;
