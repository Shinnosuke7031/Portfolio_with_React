import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import CorkBoard from "../../images/CorkBoard.png";

/************ Type Props ************/
type Props = {
  children: ReactNode;
};

/************ Components ************/
const Layout: React.VFC<Props> = ({ children }) => {
  return <Container image={CorkBoard}>{children}</Container>;
};

export default Layout;

/******** Styled-components *********/
const Container = styled.div<{ image: string }>`
  margin: 0 auto;
  position: relative;
  background-image: url(${(props) => props.image});
  border: 30px #905335;
  border-style: ridge;
  width: calc(100vw - 60px);
  height: calc(100vh - 60px);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
