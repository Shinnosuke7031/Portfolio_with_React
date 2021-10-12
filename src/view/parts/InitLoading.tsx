import React, { ReactNode, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import "../css/loading.css";
import RakugoGif from "../../images/rakugoka_lay.gif";
/************ Type Props ************/

/************ Components ************/
const Layout: React.VFC<{}> = () => {
  const [isDisplay, setIsDisplay] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsDisplay(false);
  //   }, 3000);
  // }, []);
  return (
    <Container isDisplay={true}>
      {/* <div className="loader-parent"> */}
      <div className="loader">
        <p>Welcome!</p>
      </div>
      <div className="rakugo">
        <img src={RakugoGif} width={50} />
      </div>
      {/* </div> */}
    </Container>
  );
};

export default Layout;

/******** Styled-components *********/
const hideop = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display:none;
  }
`;

const Container = styled.div<{ isDisplay: boolean }>`
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #ffffff;
  animation: ${hideop} 7s linear 0s;
  animation-fill-mode: forwards;
  .rakugo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
