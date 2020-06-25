import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import nosukeMemo1 from './img/nosukeMemo1.jpg';
import nosukeMemo2 from './img/nosukeMemo2.jpg';

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
  image: {
    width: "45%",
    height: "auto",
  },
  imgLink: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "0 auto",
  },
  pTag:  {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    marginTop: "30px",
    textAlign: "center",
    fontSize: "20px",
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
        
          <a href={contents.url} target="_blank" className={classes.imgLink}>
            <img className={classes.image} src={contents.img2}/>
            <img className={classes.image} src={contents.img1}/>
          </a>
          <p className={classes.pTag}>{ contents.text }</p>
        </div>
      </div>
  );
};

export default Portfolio;