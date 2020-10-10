import React, { FC, useState } from 'react';
import nosukeMemo1 from './img/nosukeMemo1.jpg';
import nosukeMemo2 from './img/nosukeMemo2.jpg';
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
    id: 0, name: '気象情報 App（現在制作中）', url: 'https://next-app-theta.vercel.app/', 
    img1: weather1, img2: weather2,
    text: '外部APIとNext.jsを用いた開発練習 (Next.js, TypeScript, React.js, 気象情報API: OpenWeather)'
  },
  {
    id: 1, name: 'オセロゲーム', url: 'https://shinnosuke7031.github.io/OthelloGame-ToStudy-React-TypeScript/', 
    img1: othello1, img2: othello2,
    text: 'Reactの公式チュートリアル(三目並べ)をTypeScript化させ、オセロに改造 (React.js, Redux, TypeScript)'
  },
  {
    id: 2, name: '掲示板 App', url: 'http://test-nodejs.eba-fwryman3.ap-northeast-1.elasticbeanstalk.com/', 
    img1: chatAPP1, img2: chatAPP2,
    text: 'AWS-EB, RDSを用いて作成した掲示板APP (React.js, Node.js, MySQL)'
  },
  {
    id: 3, name: 'Memo App (現在公開していません)', url: '#', 
    img1: nosukeMemo2, img2: nosukeMemo1,
    text: '初めて作ったアプリケーション (HTML/CSS, Node.js, MySQL)'
  },
]

const Portfolio: FC<{}> = () => {

  const [content, setContent] = useState(contents[0]);
  const NumberOfContent = contents.length;

  const handleClickNext = (): void => {
    const isNumberOfContentOver = content.id + 1 > NumberOfContent - 1;
    const NextContentId = isNumberOfContentOver ? content.id + 1 - NumberOfContent : content.id + 1;
    setContent(contents[NextContentId]);
  }

  const handleClickBack = (): void => {
    const isNumberOfContentOver = content.id - 1 <  0;
    const BacktContentId = isNumberOfContentOver ? content.id - 1 + NumberOfContent : content.id - 1;
    setContent(contents[BacktContentId]);
  }

  return (
    <div>
      
      <MediaQuery minWidth={1050}>
        <Output content={content} onClickNext={handleClickNext} onClickBack={handleClickBack} />
      </MediaQuery>

      <MediaQuery maxWidth={1049} minWidth={769}>
        <OutputSub content={content} onClickNext={handleClickNext} onClickBack={handleClickBack} />
      </MediaQuery>

      <MediaQuery query="(max-width: 768px)">
        <OutputMob content={content} onClickNext={handleClickNext} onClickBack={handleClickBack} />
      </MediaQuery>
      
    </div>
  );
};

export default Portfolio;