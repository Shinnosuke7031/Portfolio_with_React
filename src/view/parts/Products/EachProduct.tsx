import Paper from "@material-ui/core/Paper";
import React from "react";
import styled from "styled-components";
import LazyAndPreloadImage from "../LazyAndPreloadImage";

/************ Type Props ************/
type Props = {
  index: number;
  product: {
    src: any;
    title: string;
    skills: string[];
    description: string;
    url: string;
  };
};

/************ Components ************/
const EachProducts: React.VFC<Props> = ({ index, product }) => {
  const heightPx = 200;
  const widthPx = 300;
  const keyPress = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <Container
      height={heightPx}
      width={widthPx}
      backgroundColor="transparent"
      fontColor={index % 2 !== 0 ? "#000000" : "#000000"}
      onMouseDown={keyPress}
      onMouseUp={keyPress}
    >
      <a href={product.url} target="_blank">
        <Paper
          elevation={0}
          style={{
            padding: "10px",
            background: index % 2 === 0 ? "#ffffff" : "#dddddd",
          }}
        >
          <HeaddingH1 fontColor={index % 2 !== 0 ? "#000000" : "#000000"}>
            {product.title}
          </HeaddingH1>
          {/* <LazyAndPreloadImage
            imgUrl={product.src}
            alt={product.title}
            width={260}
            height={150}
            isLoading={true}
          /> */}
          <img src={product.src} alt={product.title} width={260} height={150} />
          <SkillsP>{product.skills}</SkillsP>
          <DescripionP>{product.description}</DescripionP>
        </Paper>
      </a>
    </Container>
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
  margin: 0 auto 10px;
  cursor: grab;
  /* height: ${(props) => props.height}px; */
  height: fit-content;
  /* width: fit-content; */
  width: 280px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  a {
    display: block;
    text-decoration: none;
    color: ${(props) => props.fontColor};
    cursor: pointer;
  }
`;

const HeaddingH1 = styled.h3<{
  fontColor: string;
}>`
  box-shadow: 0px -6px 5px -5px #00cfcf inset, 0px 8px 4px -8px #00cfcf;
  margin: 0 0 10px;
  color: ${(props) => props.fontColor};
  width: fit-content;
`;

const SkillsP = styled.p<{}>`
  font-size: 10px;
`;
const DescripionP = styled.p<{}>`
  font-size: 10px;
`;

export default EachProducts;
