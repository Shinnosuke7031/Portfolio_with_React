import React, { FC } from 'react';
import SiteDetailInfoes from '../templates/PC_Components/SiteDetailInfoes';
import SiteDetailInfoesMob from '../templates/MobileComponents/SiteDetailInfoesMob';
import MediaQuery from "react-responsive";

const skills = ['React.js', 'TypeScript', 'CSS Module', 'React Router', 'Webpack', 'Babel', 'Material UI'];

const AboutThisSite: FC<{}> = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
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
      src: "https://firebasestorage.googleapis.com/v0/b/test-f825e.appspot.com/o/images%2Fblog%2Fblog-icon%2Freact-router.svg?alt=media&token=595b85e8-d441-45b3-bbfb-1f2dd96c06b0",
      title: "React Router"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/test-f825e.appspot.com/o/images%2Fblog%2Fblog-icon%2Fmaterial-ui-1.svg?alt=media&token=f7f97eee-5c83-4744-aa6f-06ad1c7c948e",
      title: "Material-UI"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/test-f825e.appspot.com/o/images%2Fblog%2Fblog-icon%2Fwebpack-icon.svg?alt=media&token=e2d81fc6-7691-4f3a-8455-0f34c2cb8c11",
      title: "Webpack"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/test-f825e.appspot.com/o/images%2Fblog%2Fblog-icon%2Fbabel-10.svg?alt=media&token=c7089768-80fc-4a2f-ac5a-9f3ae7d197e9",
      title: "Babel"
    },
  ];

  return (
    <div>
      <MediaQuery query="(min-width: 769px)">
        <SiteDetailInfoes imgs={imgs} settings={settings} skills={skills}/>
      </MediaQuery>

      <MediaQuery query="(max-width: 768px)">
        <SiteDetailInfoesMob imgs={imgs} settings={settings} skills={skills}/>
      </MediaQuery>
    </div>
  );
}

export default AboutThisSite;