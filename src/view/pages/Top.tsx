import React from 'react';
import MediaQuery from "react-responsive";
import TopContents from '../templates/PC_Components/TopContents';
import TopContentsMob from '../templates/MobileComponents/TopContentsMob';

const Top: React.FunctionComponent<{}> = () => {
    
  return (
    <React.Fragment>
      
      <MediaQuery query="(min-width: 769px)">
        <TopContents />
      </MediaQuery>

      <MediaQuery query="(max-width: 768px)">
        <TopContentsMob />
      </MediaQuery>

    </React.Fragment>
  );
}

export default Top;
