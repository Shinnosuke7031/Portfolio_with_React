import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";//これでもFontAwesome使える
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MediaQuery from "react-responsive";

const useStyles = makeStyles({
  toptitle: {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    fontSize: "80px",
    padding: "50px 0",
    margin: 0,
    textAlign: "center"
  },
  box: {
    width: "70%",
    border: "solid 3px #000000",
    boxSizing: "border-box",
    padding: "0.5em 1em",
    margin: "0 auto",
  },
  adress: {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    fontSize: "20px",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "0 auto",
    height: "10%"
  },
  mailIcon:
  { 
    margin: "0 auto",
  },
  mailAd: {
    margin: "0 auto",
    padding: "3px 0 3px 0",
  },
  adressMob: {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    fontSize: "15px",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "0 auto",
    height: "10%"
  },
  mailIconMob:
  { 
    margin: "0 auto",
  },
  mailAdMob: {
    width: "100%",
    margin: "0 auto",
    padding: "3px 0 3px 0",
    textAlign: "center"
  },
  icon: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    width: "20%",
  },
  iconA: {
    textAlign: "center",
    flex: 1,
  }
});

const Contact=()=>{
  const classes = useStyles();
  
  return(
    <div>
      <h1 className={classes.toptitle}>Contact</h1>
        <div className={classes.box}>
          <MediaQuery query="(min-width: 769px)">
            <div className={classes.adress}>
              <FontAwesomeIcon className={classes.mailIcon} icon={faEnvelope} />
              <p className={classes.mailAd}>8120505@ed.tus.ac.jp</p>             
            </div>
          </MediaQuery>
          <MediaQuery query="(max-width: 768px)">
            <div className={classes.adressMob}>
              <FontAwesomeIcon className={classes.mailIconMob} icon={faEnvelope} />
              <p className={classes.mailAdMob}>8120505@ed.tus.ac.jp</p>             
            </div>
          </MediaQuery>
            
            <hr/>
            <div className={classes.icon}>
              <a href="https://github.com/Shinnosuke7031" className={classes.iconA}><i className="fa fa-github fa-2x" style={{color: "black"}}></i> </a>
              <a href="https://twitter.com/web7031boushi" className={classes.iconA}><i className="fa fa-twitter fa-2x" style={{color: "black"}}></i> </a>
            </div>
        </div>
    </div>    
  );
}
export default Contact;

