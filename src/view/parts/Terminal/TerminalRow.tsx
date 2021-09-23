import React, { useState } from "react";
import styled from "styled-components";

/************ Type Props ************/
type Props = {
  index: number;
};

/************ Components ************/
const TerminalRow: React.VFC<Props> = ({ index }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 20) setValue(e.target.value);
  };

  return (
    <Container backgroundColor="#000000" fontColor="#31b00a">
      <p>Welcome@portfolio&nbsp;&nbsp;</p>
      <input
        type="text"
        id={`input-${index}`}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
};

/******** Styled-components *********/
const Container = styled.div<{ backgroundColor: string; fontColor: string }>`
  width: 100%;
  margin: 5px 0 0 0;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
  p {
    margin: 0;
  }
  input {
    display: inline-block;
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.fontColor};
    font-size: 12px;
    :focus {
      outline: none;
    }
  }
`;

export default TerminalRow;
