import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import nosukeMemo1 from './img/nosukeMemo1.jpg';
import nosukeMemo2 from './img/nosukeMemo2.jpg';
import chatAPP1 from './img/chatAPP1.jpg';
import chatAPP2 from './img/chatAPP2.jpg';
import othello1 from './img/othello1.png';
import othello2 from './img/othello2.png';
import weather1 from './img/weather1.png';
import weather2 from './img/weather2.png';
import MediaQuery from "react-responsive";

const useStyles = makeStyles({
  bbody: {
    margin: "0 auto",
    minHeight: "100%",
    backgroundColor: "#d3d3d3",
  },
  contentsTitle: {
    margin: "0 auto",
    paddingTop: "50px",
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    fontSize: "80px",
    padding: "50px 0 10px 0",
    textAlign: "center",
  },
  portBox: {
    margin: "0 auto",
    border: "solid 3px #000000",
    boxSizing: "border-box",
    width: "80%",
    padding: "40px 10px",
    marginTop: "30px"
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
    backgroundColor: "#d3d3d3",
  },
  pTagMob: {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    marginTop: "10px",
    textAlign: "center",
    fontSize: "15px",
  },
  li: {
    listStyle: "none",
    padding: 0,
  },
  appTitle: {
    margin: "0 auto",
    marginBottom: "10px",
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold"
  },
  ul: {
    paddingLeft: "0px",
    margin: 0,
  }
});

const Portfolio = () => {
  
  const classes=useStyles();
  const contents=[
    {
      id: 0, name: '気象情報 App（現在制作中）', url: 'https://next-app-theta.vercel.app/', 
      img1: weather1, img2: weather2,
      text: '外部APIとNext.jsを用いた開発練習 (Next.js, TypeScript, React.js, 気象情報API: OpenWeather)'
    },
    {
      id: 1, name: '掲示板 App', url: 'http://test-nodejs.eba-fwryman3.ap-northeast-1.elasticbeanstalk.com/', 
      img1: chatAPP1, img2: chatAPP2,
      text: 'AWS-EB, RDSを用いて作成した掲示板APP (React.js, Node.js, MySQL)'
    },
    {
      id: 2, name: 'オセロゲーム', url: 'https://shinnosuke7031.github.io/OthelloGame-ToStudy-React-TypeScript/', 
      img1: othello1, img2: othello2,
      text: 'Reactの公式チュートリアル(三目並べ)をTypeScript化させ、オセロに改造 (React.js, TypeScript)'
    },
    {
      id: 3, name: 'Memo App (現在公開していません)', url: '#', 
      img1: nosukeMemo2, img2: nosukeMemo1,
      text: '初めて作ったアプリケーション (HTML/CSS, Node.js, MySQL)'
    },
  ]

  return (
    <div className={classes.bbody}>
      <h1 className={classes.contentsTitle}>Output</h1>
      
      <MediaQuery query="(min-width: 769px)">
        <ul className={classes.ul}>
          {contents.map((content)=>(
          <li key={content.id} className={classes.li}>
            <div className={classes.portBox}>
            <p className={classes.appTitle}>{ content.name }</p>
              <a href={content.url} target="_blank" rel="noopener noreferrer" className={classes.imgLink}>
                <img className={classes.image} alt={content.name} src={content.img1}/>
                <img className={classes.image} alt={content.name} src={content.img2}/>
              </a>
              <p className={classes.pTag}>{ content.text }</p>
            </div>
          </li>
          ))
          }
        </ul>
        
      </MediaQuery>
      <MediaQuery query="(max-width: 768px)">
        <ul className={classes.ul}>
          {contents.map((content)=>(
          <li key={content.id} className={classes.li}>
            <div className={classes.portBox}>
              <p className={classes.appTitle}>{ content.name }</p>
              <p className={classes.pTagMob}>{ content.text }</p>
              <a href={content.url} target="_blank" rel="noopener noreferrer" className={classes.imgLinkMob}>
                <img className={classes.imageMob} alt={content.name} src={content.img1}/>
                <img className={classes.imageMob} alt={content.name} src={content.img2}/>
              </a>
            </div>
          </li>
          ))
          }
        </ul>
      </MediaQuery>
      <p　className={classes.pTag} style={{paddingBottom: "20px"}}>今後も追加していく予定です</p>
    </div>
  );
};

export default Portfolio;