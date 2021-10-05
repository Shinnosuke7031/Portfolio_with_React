import React, { FC } from "react";
import { Helmet } from "react-helmet";
import Layout from "./templates/Layout";
import GameController from "./parts/GameController";
import AboutThisSite from "./contents/AboutThisSite/AboutThisSIte";
import styled, { keyframes } from "styled-components";
import AboutMe from "./contents/AboutMe/AboutMe";
import CatGif from "../images/dot_kuroneko.gif";
import KeibaGif from "../images/keiba.gif";
import Products from "./contents/Products/Products";

const Routers: FC<{}> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <Layout>
        <GameControllerWrapper>
          <GameController />
        </GameControllerWrapper>
        <ContentsWrapper>
          <LoopSlide>
            <div className="yoko">
              <p>
                <img src={CatGif} width={30} />
              </p>
            </div>
          </LoopSlide>
          <AboutThisSite />
          <LoopSlide>
            <div className="yoko">
              <p>
                <img src={KeibaGif} width={30} />
              </p>
            </div>
          </LoopSlide>
          <AboutMe />
          <LoopSlide>
            <div className="yoko">
              <p>
                <img src={KeibaGif} width={30} />
              </p>
            </div>
          </LoopSlide>
          <Products />
        </ContentsWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default Routers;

const GameControllerWrapper = styled.div<{}>`
  width: 300px;
  height: 100%;
  /* background-color: #929292; */
`;

const ContentsWrapper = styled.div<{}>`
  width: 600px;
  height: 100%;
  /* background-color: #ff8686; */
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
