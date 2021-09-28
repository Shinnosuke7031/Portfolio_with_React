import React, { useState } from "react";
import Draggable from "react-draggable";
import PinBlue from "../../../images/PinBlue.png";
import styled from "styled-components";
import CorkBoard from "../../../images/CorkBoard.png";

/************ Type Props ************/

/************ Components ************/
let isLoadwidgets = false;
const Twitter: React.VFC<{}> = () => {
  React.useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);
  return (
    <Draggable defaultPosition={{ x: 40, y: 10 }} bounds="parent">
      <Container
        width={300}
        height={400}
        backgroundColor="#ffffff"
        fontColor="#ffffff"
        image={CorkBoard}
      >
        <HeadingH1>Twitter</HeadingH1>
        <a
          className="twitter-timeline"
          data-lang="ja"
          // data-width="300"
          data-height="400"
          data-theme="light"
          data-chrome="noheadernofooternoborders"
          href="https://twitter.com/web7031boushi?ref_src=twsrc%5Etfw"
        ></a>
      </Container>
    </Draggable>
  );
};

export default Twitter;

/******** Styled-components *********/

const Container = styled.div<{
  height: number;
  width: number;
  backgroundColor: string;
  fontColor: string;
  image: string;
}>`
  position: relative;
  margin: 0;
  cursor: grab;
  padding: 0px 15px 70px 15px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 7px 5px #707070;
  color: ${(props) => props.fontColor};
  background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 45%, 0.15) 2rem,
      hsla(0, 100%, 100%, 0) 2.5rem
    ),
    linear-gradient(180deg, hsla(198, 100%, 82%, 1), hsla(198, 100%, 82%, 1));
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0 10px 6px 0; /* This trick side-steps a webkit bug */
    border-style: solid;
    border-color: #ffffff #e0aa87 #7b7d77 #7b7d77; /* A bit more verbose to work with .rounded too */
    z-index: 100;
    display: block;
    width: 0; /* Only for Firefox 3.0 damage limitation */
    /* Optional: shadow */
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3),
      -1px 1px 1px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3),
      -1px 1px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  a {
    display: block;
  }
`;

const HeadingH1 = styled.h1`
  font-size: 25px;
  box-shadow: 0px -6px 5px -5px #cf0000 inset, 0px 8px 4px -8px #cf0000;
  margin: 0 auto 20px;
  width: fit-content;
`;
