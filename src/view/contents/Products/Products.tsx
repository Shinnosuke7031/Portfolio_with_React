import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";

/************ Type Props ************/

/************ Components ************/
const AboutMe: React.VFC<{}> = () => {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrowWrraper>
        <ArrowForwardIosIcon />
      </NextArrowWrraper>
    ),
    prevArrow: (
      <BackArrowWrraper>
        <ArrowBackIosIcon />
      </BackArrowWrraper>
    ),
  };
  return (
    <Container>
      <Paper elevation={3}>
        <Wrapper>
          <h2>Products</h2>
          <Slider {...settings}>
            <ElementWrapper>
              <Paper elevation={0} sx={{ width: "90%", margin: "0 auto" }}>
                <h3>タイトル</h3>
              </Paper>
            </ElementWrapper>
            <ElementWrapper>
              <Paper elevation={0} sx={{ width: "90%", margin: "0 auto" }}>
                <h3>タイトル</h3>
              </Paper>
            </ElementWrapper>
            <ElementWrapper>
              <Paper elevation={0} sx={{ width: "90%", margin: "0 auto" }}>
                <h3>タイトル</h3>
              </Paper>
            </ElementWrapper>
          </Slider>
        </Wrapper>
      </Paper>
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
`;

const Wrapper = styled.div<{}>`
  background-color: #f1f1f1;
  text-align: center;
  width: 100%;
  text-align: center;

  height: fit-content;
  h2 {
    font-size: 3rem;
    margin: 1rem auto 2rem;
  }
  p {
    font-family: Arial;
  }
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;

const ElementWrapper = styled.div<{}>`
  /* width: fit-content;
  margin: 0 auto; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  h3 {
    font-family: Arial;
    width: fit-content;
  }
`;

const NextArrowWrraper = styled.div<{}>`
  top: 28px;
  right: 0;
  color: #676767;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: #676767;
  }
`;
const BackArrowWrraper = styled.div<{}>`
  top: 28px;
  left: 0;
  color: #676767;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: #676767;
  }
`;
