import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TerminalRow from "./TerminalRow";
import { Virtuoso } from "react-virtuoso";
import Draggable from "react-draggable";
import ClearIcon from "@material-ui/icons/Clear";
import PinBlue from "../../../images/PinBlue.png";

/************ Type Props ************/

/************ Components ************/
const Terminal: React.VFC<{}> = () => {
  const heightPx = 200;
  const widthPx = 300;

  const [itemCount, setItemCount] = useState(1);
  const [isPinShowed, setIsPinShowed] = useState(true);
  const virtuoso = useRef(null);

  const keyPress = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      setItemCount(itemCount + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      document.getElementById(`input-${itemCount - 1}`)?.focus();
      virtuoso.current;
      // console.log(document.activeElement?.id);
    }, 1);
  }, [itemCount]);

  return (
    <Draggable
      onStop={() => setIsPinShowed(true)}
      onDrag={() => setIsPinShowed(false)}
      defaultPosition={{ x: 30, y: 0 }}
      bounds="parent"
    >
      <Container
        height={heightPx}
        width={widthPx}
        backgroundColor="#000000"
        fontColor="#31b00a"
        onKeyPress={keyPress}
      >
        <IconsDiv>
          <IconDiv color="#74312a" backgroundColor="#ff5858">
            <ClearIcon style={{ fontSize: "10px" }} />
          </IconDiv>
        </IconsDiv>
        <PinImgDiv>{isPinShowed && <img src={PinBlue} width={40} />}</PinImgDiv>
        <Virtuoso
          style={{ height: heightPx }}
          totalCount={itemCount}
          itemContent={(index) => {
            return <TerminalRow index={index} />;
          }}
        />
      </Container>
    </Draggable>
  );
};

/******** Styled-components *********/
const Container = styled.div<{
  height: number;
  width: number;
  backgroundColor: string;
  fontColor: string;
}>`
  position: relative;
  margin: 0;
  padding: 0 3px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: ${(props) => props.backgroundColor};
  border-top: 15px solid #3d3d3d;
  border-radius: 5px;
  box-shadow: 10px 5px 5px #707070;
  aspect-ratio: 3/2;
  color: ${(props) => props.fontColor};
  cursor: grab;
`;

const IconsDiv = styled.div`
  position: absolute;
  top: -12px;
  left: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 10px;
`;

const IconDiv = styled.div<{ color: string; backgroundColor: string }>`
  height: 10px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const PinImgDiv = styled.div<{}>`
  position: absolute;
  top: -20px;
  left: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 10px;
`;

export default Terminal;
