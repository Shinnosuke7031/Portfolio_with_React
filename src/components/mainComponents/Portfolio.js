import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import nosukeMemo1 from './img/nosukeMemo1.jpg';
import nosukeMemo2 from './img/nosukeMemo2.jpg';
import MediaQuery from "react-responsive";

const useStyles = makeStyles({
  bbody: {
    margin: "0 auto",
  },
  contentsTitle: {
    margin: "0 auto",
    paddingTop: "50px",
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    fontSize: "80px",
    padding: "50px 0 10px 0",
    textAlign: "center",
  },
  blank: {
    margin: "0 auto",
    position: "relative",
    width: "175px",
    height: "50px"
  },
  memoTitle: {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    fontSize: "30px",
    textAlign: "center",
    position: "absolute",
    backgroundColor: "#d3d3d3",
    top: "3px",
    left: "0",
    width: "175px",
    zIndex: 1
  },
  portBox: {
    margin: "0 auto",
    border: "solid 3px #000000",
    boxSizing: "border-box",
    width: "80%",
    padding: "40px 10px",
    position: "relative",
  },
  imgLink: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "0 auto",
  },
  imgLinkMob:
  {
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
    margin: "0 auto",
    flexDirection: "column",
  },
  image: {
    width: "45%",
    height: "auto",
  },
  imageMob: {
    width: "90%",
    height: "auto",
    margin: "10px auto",
  },
  pTag:  {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    marginTop: "30px",
    textAlign: "center",
    fontSize: "20px",
  },
  pTagMob: {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    marginTop: "10px",
    textAlign: "center",
    fontSize: "15px",
  }
});


const Portfolio = () => {

  const classes=useStyles();
  const contents={
    name: 'memoApp', url: 'http://18.219.131.219:3000/', 
    img1: nosukeMemo1, img2: nosukeMemo2,
    text: '初めて作ったアプリケーション (HTML/CSS, Node.js, MySQL)'
  };

  return (
    <div className={classes.bbody}>
      <h1 className={classes.contentsTitle}>Practice</h1>
      <div className={classes.blank}>
        <h2 className={classes.memoTitle}>Memo App</h2>
      </div>
      <div className={classes.portBox}>
        <MediaQuery query="(min-width: 769px)">
          <a href={contents.url} target="_blank" className={classes.imgLink}>
            <img className={classes.image} src={contents.img2}/>
            <img className={classes.image} src={contents.img1}/>
          </a>
          <p className={classes.pTag}>{ contents.text }</p>
        </MediaQuery>
        <MediaQuery query="(max-width: 768px)">
          <p className={classes.pTagMob}>{ contents.text }</p>
          <a href={contents.url} target="_blank" className={classes.imgLinkMob}>
            <img className={classes.imageMob} src={contents.img2}/>
            <img className={classes.imageMob} src={contents.img1}/>
          </a>
        </MediaQuery>
      </div>
    </div>
  );
};

export default Portfolio;