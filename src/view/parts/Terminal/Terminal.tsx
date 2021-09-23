import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FixedSizeList as List } from "react-window";
import TerminalRow from "./TerminalRow";

/************ Type Props ************/

/************ Components ************/
const Terminal: React.VFC<{}> = () => {
  const heightPx = 200;
  const widthPx = 300;

  const [itemCount, setItemCount] = useState(1);

  const keyPress = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      setItemCount(itemCount + 1);
    }
  };

  useEffect(() => {
    document.getElementById(`input-${itemCount - 1}`)?.focus();
  }, [itemCount]);

  return (
    <Container
      height={heightPx}
      width={widthPx}
      backgroundColor="#000000"
      fontColor="#31b00a"
      onKeyPress={(e) => keyPress(e)}
    >
      <List
        height={heightPx}
        itemCount={itemCount}
        itemSize={35}
        width={widthPx}
      >
        {TerminalRow}
      </List>
    </Container>
  );
};

/******** Styled-components *********/
const Container = styled.div<{
  height: number;
  width: number;
  backgroundColor: string;
  fontColor: string;
}>`
  margin: 0 auto;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: ${(props) => props.backgroundColor};
  border: 3px solid #959595;
  box-shadow: 10px 5px 5px #707070;
  aspect-ratio: 3/2;
  color: ${(props) => props.fontColor};
`;

const Input = styled.textarea<{
  backgroundColor: string;
  fontColor: string;
}>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
`;

export default Terminal;
