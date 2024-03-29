import React from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import { useInView } from "react-intersection-observer";

/************ Type Props ************/

/************ Components ************/
const Contact: React.VFC<{}> = () => {
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
                <h2>Contact</h2>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScGhPS3eQ6Ua-MKLDq5WA9Zngz3fPljuQnF93MT7PGdgFNLCQ/viewform?embedded=true"
                  width="100%"
                  height="900px"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  読み込んでいます…
                </iframe>
              </Wrapper>
            </Paper>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Contact;

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
