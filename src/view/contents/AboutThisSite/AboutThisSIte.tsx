import React, { ReactNode } from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";

/************ Type Props ************/

/************ Components ************/
const AboutThisSite: React.VFC<{}> = () => {
  return (
    <Container>
      <Paper elevation={3}>
        <Wrapper>
          <h2>About this site</h2>
          <p>当サイトは、Shinnosuke Iinoのポートフォリオサイトです。</p>
          <p>
            これまで開発した製作物や使用経験のあるスキルなどをまとめています。
          </p>
          <p>私について少しでも知っていただければ幸いです。</p>
        </Wrapper>
      </Paper>
    </Container>
  );
};

export default AboutThisSite;

/******** Styled-components *********/
const Container = styled.div<{}>`
  margin: 0 auto 2rem;
  position: relative;
  width: 100%;
  height: fit-content;
`;

const Wrapper = styled.div<{}>`
  background-color: #f1f1f1;
  padding: 1rem;
  text-align: center;
  h2 {
    font-size: 3rem;
    margin: 1rem auto 2rem;
  }
  p {
    font-family: Arial;
  }
`;

const MainWrapper = styled.div<{}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 1000px;
  margin: 0 auto;
`;
