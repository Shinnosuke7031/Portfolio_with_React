import React, { FC, useState } from 'react';
import nosukeMemo1 from './img/nosukeMemo1.jpg';
import nosukeMemo2 from './img/nosukeMemo2.jpg';
import blogsite1 from './img/blogsite1.png';
import blogsite2 from './img/blogsite2.png';
import chatAPP1 from './img/chatAPP1.jpg';
import chatAPP2 from './img/chatAPP2.jpg';
import othello1 from './img/othello1.png';
import othello2 from './img/othello2.png';
import weather1 from './img/weather1.png';
import weather2 from './img/weather2.png';
import MediaQuery from "react-responsive";
import Output from '../templates/PC_Components/Output';
import OutputSub from '../templates/PC_Components/OutputSub';
import OutputMob from '../templates/MobileComponents/OutputMob';

const contents=[
  {
    id: 0, name: 'ブログサイト', url: 'https://nosuke-blog.site/', 
    img1: blogsite1, img2: blogsite2,
    text: 'SSG＋SSRブログサイト (Next.js, TypeScript, React.js)'
  },
  {
    id: 1, name: '気象情報 App（現在制作中）', url: 'https://next-app-theta.vercel.app/', 
    img1: weather1, img2: weather2,
    text: '外部APIとNext.jsを用いた開発練習 (Next.js, TypeScript, React.js, 気象情報API: OpenWeather)'
  },
  {
    id: 2, name: 'オセロゲーム', url: 'https://shinnosuke7031.github.io/OthelloGame-ToStudy-React-TypeScript/', 
    img1: othello1, img2: othello2,
    text: 'Reactの公式チュートリアル(三目並べ)をTypeScript化させ、オセロに改造 (React.js, Redux, TypeScript)'
  },
  {
    id: 3, name: '掲示板 App(現在公開していません)', url: '#', 
    img1: chatAPP1, img2: chatAPP2,
    text: 'AWS-EB, RDSを用いて作成した掲示板APP (React.js, Node.js, MySQL)'
  },
  {
    id: 4, name: 'Memo App (現在公開していません)', url: '#', 
    img1: nosukeMemo2, img2: nosukeMemo1,
    text: '初めて作ったアプリケーション (HTML/CSS, Node.js, MySQL)'
  },
]

const Portfolio: FC<{}> = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: any) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ul style={{ margin: 0, padding: 0 }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#c22ecf9f",
        }}
      >
        {i + 1}
      </div>
    )
  };

  return (
    <div>
      
      <MediaQuery minWidth={1050}>
        <Output settings={settings} contents={contents} />
      </MediaQuery>

      <MediaQuery maxWidth={1049} minWidth={769}>
        <OutputSub settings={settings} contents={contents} />
      </MediaQuery>

      <MediaQuery query="(max-width: 768px)">
        <OutputMob settings={settings} contents={contents} />
      </MediaQuery>
      
    </div>
  );
};

export default Portfolio;