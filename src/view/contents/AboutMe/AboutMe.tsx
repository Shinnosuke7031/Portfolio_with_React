import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useInView } from "react-intersection-observer";

const Row: React.VFC<{ name: string; term: string; star: number }> = (
  props
) => {
  return (
    <React.Fragment>
      <Grid
        textAlign="left"
        item
        xs={3}
        justifyContent="center"
        alignItems="center"
        style={{ wordBreak: "break-word" }}
      >
        {props.name}
      </Grid>
      <Grid
        textAlign="left"
        item
        xs={3}
        justifyContent="center"
        alignItems="center"
      >
        {props.term}
      </Grid>
      <Grid
        textAlign="left"
        item
        xs={3}
        justifyContent="center"
        alignItems="center"
      >
        <StarBorderIcon />
        {props.star >= 2 && <StarBorderIcon />}
        {props.star >= 3 && <StarBorderIcon />}
        {props.star >= 4 && <StarBorderIcon />}
        {props.star >= 5 && <StarBorderIcon />}
      </Grid>
    </React.Fragment>
  );
};

/************ Type Props ************/

/************ Components ************/
const AboutMe: React.VFC<{}> = () => {
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
                <h2>About Me</h2>
                <ElementWrapper>
                  <br />
                  <br />
                  <br />
                  <div className="ele">
                    <p className="sub">中学時代(2010~)</p>
                    <h3>バスケとゲームに没頭する</h3>
                    <p>
                      "スラ○ダンク"を読んだ影響でバスケを始めました。
                      <br />
                      3Pシュートが得意(自称)でした。
                    </p>
                    <p>
                      休日はDSを持って友人と公園に集まり、色んなゲームで遊んでいました。
                    </p>
                  </div>
                  <br />
                  <br />
                  <div className="ele">
                    <p className="sub">高校時代(2013~)</p>
                    <h3>理系に進むことを志す</h3>
                    <p>
                      初めてスマートフォンを手にして
                      <span style={{ fontStyle: "italic" }}>
                        「こんな便利なものがあったのか！」
                      </span>
                      と思い、理系に進みました。
                    </p>
                    <p>
                      バスケも続けており、守備の要(自称)として起用されていました。
                    </p>
                  </div>
                  <br />
                  <br />
                  <div className="ele">
                    <p className="sub">大学・大学院時代(2016~)</p>
                    <h3>研究、そしてプログラミング</h3>
                    <p>
                      大学では電気回路・通信・半導体・プログラミングなど幅広く学びました。
                    </p>
                    <p>
                      研究では、通信のコンピュータシミュレーションをしており、その中でプログラミングの面白さのハマりました。
                    </p>
                  </div>
                  <br />
                  <br />
                </ElementWrapper>

                <Skills>
                  <h3>使用経験のある技術</h3>
                  <Grid container spacing={1}>
                    <Grid
                      justifyContent="center"
                      alignItems="center"
                      container
                      item
                      spacing={3}
                    >
                      <Row name="C++" term="2019年4月~" star={4} />
                    </Grid>
                    <Grid
                      justifyContent="center"
                      alignItems="center"
                      container
                      item
                      spacing={3}
                    >
                      <Row name="React.js" term="2020年6月~" star={4} />
                    </Grid>
                    <Grid
                      justifyContent="center"
                      alignItems="center"
                      container
                      item
                      spacing={3}
                    >
                      <Row name="MySQL" term="2020年6月~" star={2} />
                    </Grid>
                    <Grid
                      justifyContent="center"
                      alignItems="center"
                      container
                      item
                      spacing={3}
                    >
                      <Row name="Next.js" term="2020年9月~" star={3} />
                    </Grid>
                    <Grid
                      justifyContent="center"
                      alignItems="center"
                      container
                      item
                      spacing={3}
                    >
                      <Row name="Node.js" term="2020年6月~" star={3} />
                    </Grid>
                    <Grid
                      justifyContent="center"
                      alignItems="center"
                      container
                      item
                      spacing={3}
                    >
                      <Row name="PHP" term="2020年12月~" star={4} />
                    </Grid>
                    <Grid
                      justifyContent="center"
                      alignItems="center"
                      container
                      item
                      spacing={3}
                    >
                      <Row name="Laravel(Lumen)" term="2021年2月~" star={2} />
                    </Grid>
                    <Grid
                      justifyContent="center"
                      alignItems="center"
                      container
                      item
                      spacing={3}
                    >
                      <Row name="AWS" term="2021年5月~" star={2} />
                    </Grid>
                  </Grid>
                  <br />
                  <div className="description">
                    <Grid container spacing={1}>
                      <Grid
                        container
                        item
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item xs={2}>
                          <StarBorderIcon style={{ fontSize: "1rem" }} />
                        </Grid>
                        <Grid item xs={1}>
                          :
                        </Grid>
                        <Grid textAlign="left" item xs={6}>
                          軽く使用した程度
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item xs={2}>
                          <StarBorderIcon style={{ fontSize: "1rem" }} />
                          <StarBorderIcon style={{ fontSize: "1rem" }} />
                        </Grid>
                        <Grid item xs={1}>
                          :
                        </Grid>
                        <Grid textAlign="left" item xs={6}>
                          ドキュメントなどを見ながら扱える
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item xs={2}>
                          <StarBorderIcon style={{ fontSize: "1rem" }} />
                          <StarBorderIcon style={{ fontSize: "1rem" }} />
                          <StarBorderIcon style={{ fontSize: "1rem" }} />
                        </Grid>
                        <Grid item xs={1}>
                          :
                        </Grid>
                        <Grid textAlign="left" item xs={6}>
                          開発経験がある
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        spacing={3}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item xs={2}>
                          <StarBorderIcon style={{ fontSize: "1rem" }} />
                          <StarBorderIcon style={{ fontSize: "1rem" }} />
                          <StarBorderIcon style={{ fontSize: "1rem" }} />
                          <StarBorderIcon style={{ fontSize: "1rem" }} />
                        </Grid>
                        <Grid item xs={1}>
                          :
                        </Grid>
                        <Grid textAlign="left" item xs={6}>
                          実務で使用経験がある or ある程度自由に駆使できる
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </Skills>
              </Wrapper>
            </Paper>
          </div>
        )}
      </div>
    </Container>
  );
};

export default AboutMe;

/******** Styled-components *********/
const Container = styled.div<{}>`
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
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

const ElementWrapper = styled.div<{}>`
  border-left: 3px solid #6d6c6c;
  position: relative;
  margin: 0;
  text-align: left;
  .ele {
    h3 {
      border-bottom: 3px solid #6d6c6c;
      font-size: 1.5rem;
      font-family: Arial;
      margin: 0.5rem 0 2rem 0;
      width: fit-content;
    }
    p {
      font-family: Arial;
      padding: 0 0 0 1rem;
    }
    .sub {
      font-size: 1rem;
      margin: 0;
      padding: 0 0 0 5px;
    }
  }
`;

const Skills = styled.div<{}>`
  margin: 3rem auto 1rem;
  width: fit-content;
  font-family: Arial;
  @media (max-width: 901px) {
    width: 100%;
  }
  .description {
    font-size: 10px;
    border: 1px dotted #000000;
  }
`;

const Ul = styled.ul<{}>`
  margin: 0;
`;

const Circle = styled.div<{ top: number; left: number }>`
  border-radius: 50%;
  margin: 0 10px 0 10px;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background-color: #7c7c7c;
  font-size: 1.5rem;
  height: 1.5rem;
  width: 1.5rem;
`;
