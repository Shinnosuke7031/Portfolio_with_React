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
  width: 100%;
  min-height: 100vh;
  background-image: url(${(props) => props.image});
`;
