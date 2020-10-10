import React, { FC } from 'react';
import styles from './pages.module.css';
import MediaQuery from "react-responsive";
import AboutmeInfoes from '../templates/PC_Components/AboutmeInfoes';

const Aboutme: FC<{}> = () => {
  
  const items = [
    {title: 'WEB開発技術との出会い', text: '私が所属する研究室のホームページを編集する機会があり、そこで初めてHTMLに出会いました。また、緊急事態宣言で外出できない期間は時間がたくさんあったので、HTML，CSSを勉強し始めました。2020年6月にReactを勉強し始めたので、技術力はまだまだですが、楽しくインプット・アウトプットしています。'},
    {title: '名前', text: '飯野 信之介(Shinnosuke Iino)：某国民的アニメ「クレヨン◯◯ちゃん」のように元気に過ごしてほしいというのが、名前の由来です'},
    {title: '出身', text: '栃木県生まれ、栃木県育ち、小中学校の周りは田んぼだらけでした'},
    {title: '年齢', text: '23歳：大学院、修士1年生'},
    {title: '言語・技術', text: 'React.js,  TypeScript,  Next.js,  Redux, ContextAPI'},
  ];
  
  return(
    <div>
      <h1 className={styles.title}>About Me</h1>
        <MediaQuery minWidth={769}>
          <AboutmeInfoes items={items} />
        </MediaQuery>
        <MediaQuery query="(max-width: 768px)">
          <AboutmeInfoes items={items} />
        </MediaQuery>

    </div>    
  );
}
export default Aboutme;

