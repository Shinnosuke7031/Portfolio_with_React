import React from "react";
import styled from "styled-components";
import { Virtuoso } from "react-virtuoso";
import Draggable from "react-draggable";
import EachProduct from "./EachProduct";
import NosukeBlogPNG from "../../../images/NosukeBlog.png";
import UmaEventSearchPNG from "../../../images/UmaEventSearch.png";

const ProductsObjs = [
  {
    src: NosukeBlogPNG,
    title: "NOSUKE BLOG",
    skills: ["Next.js, TypeScript"],
    description:
      "SSGとSSRの両方を使って作成したブログです。\nマークダウンで記述した記事の基本情報（タイトルや日付、ブログの説明）はSSG、記事本文はSSRにすることで最初に読み込むファイルサイズを抑えています。",
    url: "https://nosuke-blog.site/",
  },
  {
    src: UmaEventSearchPNG,
    title: "うまいべさーち",
    skills: ["Next.js, TypeScript, Node.js, EC2, RDS, MySQL"],
    description:
      "ウマ娘プリティダービーの育成イベントの検索に特化です。\nフロントエンドはNext.jsで静的な部分はSSGしています。バックエンドはAWSのEC2上でAPIを作成しました。",
    url: "https://www.uma-event-search.com/",
  },
  {
    src: NosukeBlogPNG,
    title: "NOSUKE BLOG",
    skills: ["Next.js, TypeScript"],
    description:
      "SSGとSSRの両方を使って作成したブログです。\nマークダウンで記述した記事の基本情報（タイトルや日付、ブログの説明）はSSG、記事本文はSSRにすることで最初に読み込むファイルサイズを抑えています。",
    url: "https://nosuke-blog.site/",
  },
];

/************ Type Props ************/

/************ Components ************/
const Products: React.VFC<{}> = () => {
  const heightPx = 470;
  const widthPx = 330;
  const itemCount = ProductsObjs.length;

  return (
    <Draggable defaultPosition={{ x: 50, y: 10 }} bounds="parent">
      <Container
        height={heightPx}
        width={widthPx}
        backgroundColor="transparent"
        fontColor="#000000"
      >
        <HeadingH1>Products</HeadingH1>
        <Virtuoso
          style={{ height: heightPx - 50 }}
          totalCount={itemCount}
          itemContent={(index) => {
            return <EachProduct index={index} product={ProductsObjs[index]} />;
          }}
        />
      </Container>
    </Draggable>
  );
};

/******** Styled-components *********/
const Container = styled.div<{
  height: number;
  width: number;
  backgroundColor: string;
  fontColor: string;
}>`
  position: relative;
  margin: 0;
  cursor: grab;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 7px 5px #707070;
  color: ${(props) => props.fontColor};
  background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 45%, 0.15) 2rem,
      hsla(0, 100%, 100%, 0) 2.5rem
    ),
    linear-gradient(180deg, hsla(56, 93%, 57%, 1), hsla(56, 93%, 57%, 1));
  overflow: hidden;
`;

const HeadingH1 = styled.h1`
  font-size: 25px;
  box-shadow: 0px -6px 5px -5px #cf0000 inset, 0px 8px 4px -8px #cf0000;
  margin: 0 auto 20px;
  width: fit-content;
`;

export default Products;
