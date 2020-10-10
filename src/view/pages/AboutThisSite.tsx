import React, { FC } from 'react';
import SiteDetailInfoes from '../templates/PC_Components/SiteDetailInfoes';
import SiteDetailInfoesMob from '../templates/MobileComponents/SiteDetailInfoesMob';
import MediaQuery from "react-responsive";

const skills = ['React.js', 'TypeScript', 'CSS Module', 'React Router', 'Material UI'];

const AboutThisSite: FC<{}> = () => {

  return (
    <div>
      <MediaQuery query="(min-width: 769px)">
        <SiteDetailInfoes skills={skills}/>
      </MediaQuery>

      <MediaQuery query="(max-width: 768px)">
        <SiteDetailInfoesMob skills={skills}/>
      </MediaQuery>
    </div>
  );
}

export default AboutThisSite;