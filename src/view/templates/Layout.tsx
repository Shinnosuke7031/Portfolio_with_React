import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/************ Type Props ************/
type Props = {
  children: ReactNode;
};

/************ Components ************/
const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      <br />
      <MainWrapper>{children}</MainWrapper>
    </Container>
  );
};

export default Layout;

/******** Styled-components *********/
const Container = styled.div<{}>`
  margin: 0 auto;
  width: 100vw;
  height: fit-content;
`;

const MainWrapper = styled.div<{}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: fit-content;
  margin: 0 auto;
`;
