import React, { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "./templates/Layout";
import GameController from "./parts/GameController";
import AboutThisSite from "./contents/AboutThisSite/AboutThisSIte";
import styled, { keyframes } from "styled-components";
import AboutMe from "./contents/AboutMe/AboutMe";
import CatGif from "../images/dot_kuroneko.gif";
import KeibaGif from "../images/keiba.gif";
import Runner from "../images/runner.png";
import Products from "./contents/Products/Products";
import Contact from "./contents/Contact/Contact";
import InitLoading from "./parts/InitLoading";

const Routers: FC<{}> = () => {
  const [isDisplayLoading, setIsDisplayLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsDisplayLoading(false), 7000);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <Layout>
        {isDisplayLoading && <InitLoading />}
        <GameControllerWrapper>
          <GameController />
        </GameControllerWrapper>
        <ContentsWrapper>
          <LoopSlide>
            <div id="aboutthissite" className="yoko">
              <p>
                <img src={CatGif} width={30} />
              </p>
            </div>
          </LoopSlide>
          <AboutThisSite />
          <LoopSlide>
            <div id="aboutme" className="yoko">
              <p>
                <img src={KeibaGif} width={30} />
              </p>
            </div>
          </LoopSlide>
          <AboutMe />
          <LoopSlide>
            <div id="products" className="yoko">
              <p>
                <img src={KeibaGif} width={30} />
              </p>
            </div>
          </LoopSlide>
          <Products />
          <LoopSlide>
            <div id="contact" className="yoko">
              <p>
                <img src={Runner} width={30} />
              </p>
            </div>
          </LoopSlide>
          <Contact />
        </ContentsWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default Routers;

const GameControllerWrapper = styled.div<{}>`
  width: 300px;
`;

const ContentsWrapper = styled.div<{}>`
  width: 600px;
`;

const ushiugokiyoko = keyframes`
  0%   {transform: translateX(0px);}
  50%  {transform: translateX(580px);}
  100% {transform: translateX(0px);}
`;
const ushiugokimuki = keyframes`
  0%   {transform: scaleX(-1);}
  49%  {transform: scaleX(-1);}
  50%  {transform: scaleX(1);}
  99%  {transform: scaleX(1);}
  100% {transform: scaleX(-1);}
`;
const ushiugoki = keyframes`
  0%   {transform: rotate(2deg);}
  50%  {transform: rotate(2deg);}
  51%  {transform: rotate(-2deg);}
  100% {transform: rotate(-2deg);}
`;

const LoopSlide = styled.div<{}>`
  position: relative;
  width: fit-content;
  height: 50px;
  .yoko {
    position: absolute;
    width: 100%;
    height: 30px;
    top: 0;
    animation: ${ushiugokiyoko} 30s infinite;
    p {
      animation: ${ushiugokimuki} 30s infinite;
      width: fit-content;

      img {
        width: fit-content;
        height: 100%;
        animation: ${ushiugoki} 1.5s infinite;
      }
    }
  }
`;
