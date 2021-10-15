import React from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import KuronekoGif from "../../../images/kuroneko_an.gif";
import { useInView } from "react-intersection-observer";

/************ Type Props ************/

/************ Components ************/
const AboutThisSite: React.VFC<{}> = () => {
  const { ref, inView } = useInView({
    rootMargin: "-50px",
    triggerOnce: true,
  });
  return (
    <Container>
      <div ref={ref}>
        {inView && (
          <div className="animate__animated animate__fadeInUp">
            <Paper elevation={3}>
              <Wrapper>
                <h2>About this site</h2>
                <p>当サイトは、Shinnosuke Iinoのポートフォリオサイトです。</p>
                <p>
                  これまで開発した製作物や使用経験のあるスキルなどをまとめています。
                </p>
                <p>
                  私について少しでも知っていただければ幸いです。
                  <img src={KuronekoGif} width={20} />
                </p>
                <p>
                  PCで見ている方は、キーボードの上下キーで左側のゲーム機の画面を操作できます。
                </p>
                <p>Enterキーを押すと、選択されている部分にスクロールします。</p>
                <br />
                <p>
                  もちろん、左側のゲーム機にある上下キーとAボタンでも同じことができます。
                </p>
              </Wrapper>
            </Paper>
          </div>
        )}
      </div>
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
  min-height: 100vh;
`;

const Wrapper = styled.div<{}>`
  background-color: #f1f1f1;
  padding: 1rem;
  text-align: center;
  height: fit-content;
  min-height: 100vh;
  h2 {
    font-size: 3rem;
    margin: 1rem auto 2rem;
  }
  p {
    font-family: Arial;
    text-align: left;
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
