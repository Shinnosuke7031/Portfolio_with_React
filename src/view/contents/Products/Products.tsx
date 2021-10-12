import React from "react";
import styled, { keyframes } from "styled-components";
import Paper from "@mui/material/Paper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import BlogImg from "../../../images/NosukeBlog.png";
import BartenderGif from "../../../images/bartender.gif";
import TakuhaiGif from "../../../images/takuhai_4.gif";
import UmaImg from "../../../images/UmaEventSearch.png";

const products = [
  {
    title: "ブログ",
    url: "https://nosuke-blog.site/",
    img: BlogImg,
    skills: "Next.js, TypeScript",
    description:
      "SSGとSSRの両方を使って作成したブログです。マークダウンで記述した記事の基本情報（タイトルや日付、ブログの説明）はSSG、記事本文はSSRにすることで最初に読み込むファイルサイズを抑えています。",
  },
  {
    title: "ウマ娘イベント検索",
    url: "https://www.uma-event-search.com/",
    img: UmaImg,
    skills: "Next.js, TypeScript, Node.js, MySQL",
    description:
      "ウマ娘プリティダービーの育成イベントの検索がしやすいサイトです。基本はSPAでアプリのように操作できます。フロントエンドはNext.jsで静的な部分はSSGしています。バックエンドはAWSのEC2上でAPIを作成しました。",
  },
  // {
  //   title: "ブログ",
  //   url: "https://nosuke-blog.site/",
  //   img: BlogImg,
  //   skills: "Next.js, TypeScript",
  //   description:
  //     "SSGとSSRの両方を使って作成したブログです。\nマークダウンで記述した記事の基本情報（タイトルや日付、ブログの説明）はSSG、記事本文はSSRにすることで最初に読み込むファイルサイズを抑えています。",
  // },
];

/************ Type Props ************/

/************ Components ************/
const Products: React.VFC<{}> = () => {
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
            {products.map((product, i) => (
              <ElementWrapper key={i}>
                <Paper elevation={0} className="paper">
                  <h3 className="title">{product.title}</h3>
                  <div className="img-link">
                    <a href={product.url} target="_blank">
                      <img src={product.img} width={200} />
                    </a>
                  </div>
                  <HukidashiDiv>
                    <p>{product.description}▼</p>
                  </HukidashiDiv>
                  <img
                    src={i % 2 === 0 ? BartenderGif : TakuhaiGif}
                    width={20}
                    className="gif-icon"
                  />
                  <LogDiv>
                    <p>{product.skills}▼</p>
                  </LogDiv>
                </Paper>
              </ElementWrapper>
            ))}
          </Slider>
          {/* <img className="takuhai-gif" src={TakuhaiGif} width={50} /> */}
        </Wrapper>
      </Paper>
    </Container>
  );
};

export default Products;

/******** Styled-components *********/
const Container = styled.div<{}>`
  margin: -1rem auto 0;
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
  display: block;
  h3 {
    font-family: Arial;
    width: fit-content;
  }
  .paper {
    width: 95%;
    height: 500px;
    margin: 0 auto;
    position: relative;
    .title {
      text-align: center;
      width: 100%;
    }
    .img-link {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        img {
          box-shadow: 5px 5px 5px #000000;
        }
      }
    }
    p {
      line-height: 1.5rem;
      font-size: 0.75rem;
      text-align: left;
      color: #ffffff;
      font-family: "DotGothic16", sans-serif;
    }
    .gif-icon {
      height: fit-content;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 2.5rem;
      margin-top: 1rem;
    }
    .skills {
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 2.5rem;
    }
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

const HukidashiDiv = styled.div<{}>`
  position: relative;
  display: inline-block;
  margin: 2rem 0 0;
  padding: 7px 10px;
  width: calc(95% - 13px);
  height: 180px;
  border-radius: 5%;
  background-color: #000000;
  border: solid 1px #000000; /* 内側の線になる一本線の枠線をひく*/
  outline: solid 1px #000000; /* 外側の線になる一本線の枠線をひく*/
  outline-offset: 2px; /* 外側の線と内側の線の空き具合を調整*/
  ::before {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 20%;
    margin-left: -15px;
    border: 14px solid transparent;
    border-top: 14px solid #ffffff;
    z-index: 2;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: -31px;
    left: 20%;
    margin-left: -15px;
    border: 14px solid transparent;
    border-top: 14px solid #000000;
    z-index: 1;
  }
`;

const LogDiv = styled.div<{}>`
  position: absolute;
  bottom: 0;
  left: 3px;
  width: calc(95% - 13px);
  height: fit-content;
  margin: 0 0 0.2rem;
  padding: 7px 10px;
  border-radius: 1px;
  background-color: #000000;
  border: solid 1px #000000; /* 内側の線になる一本線の枠線をひく*/
  outline: solid 1px #000000; /* 外側の線になる一本線の枠線をひく*/
  outline-offset: 2px; /* 外側の線と内側の線の空き具合を調整*/
  display: flex;
  justify-content: center;
  align-items: center;
`;
