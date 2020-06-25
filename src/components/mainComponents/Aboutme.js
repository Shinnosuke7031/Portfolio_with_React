import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  title: {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    fontSize: "100px",
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
  detail: {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    fontSize: "15px",
    listStyle: "none",
  },
  text:
  {
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    fontSize: "15px",
    padding: "0 20px",
  }
});

const Aboutme=()=>{
  const classes = useStyles();
  const items = [
    {title: '名前', text: 'Shinnosuke Iino'},
    {title: '出身', text: '栃木県'},
    {title: '年齢', text: '22'},
    {title: '勉強中', text: 'HTML/CSS，React.js，Node.js，MySQL'},
    {title: '勉強予定', text: 'サーバーサイド(Ruby，PHP)，フロントエンド(Typescript，Vue.js)'},
  ];
  
  return(
    <div>
      <h1 className={classes.title}>Profile</h1>
        <div className={classes.box}>
          <ul style={{padding: "0 20px"}}>
            {items.map((temp)=>(
              <li className={classes.detail}>
                <p>{temp.title}  :  {temp.text}</p>
              </li>
            ))
            }
          </ul>
          <div><hr></hr>
            <div>
              <p className={classes.text}>私が所属する研究室のホームページを編集する機会があり，そこで初めてHTMLに出会いました．
                また，緊急事態宣言で外出できない期間は時間がたくさんあったので，HTML/CSSを勉強し始めました．</p>
            </div>
          </div>
        </div>
    </div>    
  );
}
export default Aboutme;

