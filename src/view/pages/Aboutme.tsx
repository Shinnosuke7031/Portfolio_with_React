import React, { FC } from 'react';
import MediaQuery from "react-responsive";
import AboutmeInfoes from '../templates/PC_Components/AboutmeInfoes';
import AboutmeInfoesMob from '../templates/MobileComponents/AboutmeInfoesMob';

const Aboutme: FC<{}> = () => {
  
  const items = [
    {title: 'WEB開発技術との出会い', text: '所属する研究室のホームページを編集する機会があり、そこで初めてHTMLを触りました。また、緊急事態宣言で外出できない期間は時間がたくさんあったので、HTML，CSSを勉強し始めました。2020年6月にReactを勉強し始めたので、技術力はまだまだですが、楽しくインプット・アウトプットしています。'},
    {title: '名前', text: '飯野 信之介(Shinnosuke Iino)：某国民的アニメ「クレヨン◯◯ちゃん」のように元気に過ごしてほしいというのが、名前の由来です'},
    {title: '出身', text: '栃木県生まれ、栃木県育ち、小中学校の周りは田んぼだらけでした'},
    {title: '年齢', text: '23歳：大学院、修士1年生'},
    {title: '言語・技術', text: 'JavaScript(React.js,  TypeScript,  Next.js,  Redux, jQuery), PHP(Laravel, Lumen), MySQL, Docker, C/C++'},
  ];

  const imgs = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/test-f825e.appspot.com/o/images%2Fblog%2Fblog-icon%2Freact-2.svg?alt=media&token=deb078bd-642f-4f12-b2b1-12bc29572368",
      title: "React.js"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/test-f825e.appspot.com/o/images%2Fblog%2Fblog-icon%2Ftypescript.svg?alt=media&token=104cbf13-b1e3-413b-a557-e74e94620d2e",
      title: "TypeScript"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/test-f825e.appspot.com/o/images%2Fblog%2Fblog-icon%2Fnextjs-3.svg?alt=media&token=2caf9210-05c4-46e3-87c3-c369ab5c0db0",
      title: "Next.js"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/test-f825e.appspot.com/o/images%2Fblog%2Fblog-icon%2Fnew-php-logo.svg?alt=media&token=1d06892f-9706-4afe-9625-a5e3e78d01ae",
      title: "PHP"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/test-f825e.appspot.com/o/images%2Fblog%2Fblog-icon%2Flaravel-1.svg?alt=media&token=6bb4ee20-dfac-4ae7-8cf9-baacd9f6ea16",
      title: "Laravel"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/test-f825e.appspot.com/o/images%2Fblog%2Fblog-icon%2Flumen-1.svg?alt=media&token=56de4179-7bea-4945-8520-e59ca11bde72",
      title: "Lumen"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/test-f825e.appspot.com/o/images%2Fblog%2Fblog-icon%2Fmysql-5.svg?alt=media&token=8b135731-8b9e-4dbf-ad22-5d687638d0d9",
      title: "MySQL"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/test-f825e.appspot.com/o/images%2Fblog%2Fblog-icon%2Fdocker.svg?alt=media&token=889bea17-f03b-40a8-9565-b30981949c7d",
      title: "Docker"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };
  
  return(
    <div>
        <MediaQuery minWidth={769}>
          <AboutmeInfoes settings={settings} imgs={imgs} items={items} />
        </MediaQuery>
        <MediaQuery query="(max-width: 768px)">
          <AboutmeInfoesMob settings={settings} imgs={imgs} items={items} />
        </MediaQuery>

    </div>    
  );
}
export default Aboutme;

