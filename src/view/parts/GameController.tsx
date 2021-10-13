import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useKey } from "rooks";
import * as Scroll from "react-scroll";
let scroller = Scroll.scroller;

const Navs: typeNavs[] = ["AboutThisSite", "Aboutme", "Products", "Contact"];
type typeNavs = "AboutThisSite" | "Aboutme" | "Products" | "Contact";
const scrollIds = ["aboutthissite", "aboutme", "products", "contact"];
/************ Type Props ************/

/************ Components ************/
const GameController: React.VFC<{}> = () => {
  const [Nav, setNav] = useState<typeNavs>("AboutThisSite");

  const handleClickCrossKeys = (direction: number) => {
    const CurrentNavIndex = Navs.indexOf(Nav);
    if (direction === 1) {
      if (Nav === "Contact") return;
      else setNav(Navs[CurrentNavIndex + direction]);
    } else if (direction === -1) {
      if (Nav === "AboutThisSite") return;
      else setNav(Navs[CurrentNavIndex + direction]);
    }
  };
  const KeyDown = () => {
    handleClickCrossKeys(1);
  };
  const KeyUp = () => {
    handleClickCrossKeys(-1);
  };

  const KeyEnter = () => {
    const CurrentNavIndex = Navs.indexOf(Nav);
    const scrollId = scrollIds[CurrentNavIndex];
    scroller.scrollTo(scrollId, { smooth: true });
  };

  useKey(["ArrowDown"], KeyDown);
  useKey(["ArrowUp"], KeyUp);
  useKey(["Enter"], KeyEnter);

  return (
    <Container>
      <PositionRelative>
        <Monitor>
          <p>
            {Nav === "AboutThisSite" ? ">" : "-"}
            &thinsp;&thinsp;&thinsp;&thinsp;
            <UnderLineSpan isSelecterd={Nav === "AboutThisSite"}>
              About&thinsp;this&thinsp;site
            </UnderLineSpan>
            &thinsp;&thinsp;&thinsp;&thinsp;
            {Nav === "AboutThisSite" ? "<" : "-"}
          </p>
          <p>
            {Nav === "Aboutme" ? ">" : "-"}
            &thinsp;&thinsp;&thinsp;&thinsp;
            <UnderLineSpan isSelecterd={Nav === "Aboutme"}>
              About&thinsp;me
            </UnderLineSpan>
            &thinsp;&thinsp;&thinsp;&thinsp;
            {Nav === "Aboutme" ? "<" : "-"}
          </p>
          <p>
            {Nav === "Products" ? ">" : "-"}
            &thinsp;&thinsp;&thinsp;&thinsp;
            <UnderLineSpan isSelecterd={Nav === "Products"}>
              Products
            </UnderLineSpan>
            &thinsp;&thinsp;&thinsp;&thinsp;
            {Nav === "Products" ? "<" : "-"}
          </p>
          <p>
            {Nav === "Contact" ? ">" : "-"}
            &thinsp;&thinsp;&thinsp;&thinsp;
            <UnderLineSpan isSelecterd={Nav === "Contact"}>
              Contact
            </UnderLineSpan>
            &thinsp;&thinsp;&thinsp;&thinsp;
            {Nav === "Contact" ? "<" : "-"}
          </p>
        </Monitor>
        <CrossKey>
          <div
            className="position-top common"
            onClick={() => handleClickCrossKeys(-1)}
          >
            <div className="triangle" />
          </div>
          <div className="position-left common">
            <div className="triangle" />
          </div>
          <div className="position-right common">
            <div className="triangle" />
          </div>
          <div
            className="position-bottom common"
            onClick={() => handleClickCrossKeys(1)}
          >
            <div className="triangle" />
          </div>
          <div className="position-center common">
            <div className="circle" />
          </div>
        </CrossKey>
        <Circle
          onClick={() => KeyEnter()}
          top={250}
          right={10}
          isHoverOn={true}
        >
          A
        </Circle>
        <Circle top={290} right={50}>
          B
        </Circle>
      </PositionRelative>
    </Container>
  );
};

export default GameController;

/******** Styled-components *********/
const Container = styled.div<{}>`
  margin: 10px auto 0;
  width: 250px;
  height: 400px;
  position: fixed;
  top: calc(100vh * 0.5 - 200px);
  box-shadow: 10px 5px 5px #000000;
  background-color: #33398f;
  border-radius: 10px 10px 50px 10px;
  padding: 1.2rem 0 0 0;
`;

const PositionRelative = styled.div<{}>`
  position: relative;
`;

const Monitor = styled.div<{}>`
  margin: 0 auto 2rem;
  padding: 0.5rem;
  border: 10px solid #202020;
  border-radius: 10px;
  box-shadow: 2px 1px 1px #000000;
  background-color: #ababab;
  width: 80%;
  box-shadow: 2px 1px 1px #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
  p {
    margin: 12px auto;
    display: flex;
    justify-content: left;
    align-items: center;
    font-family: "DotGothic16", sans-serif;
    font-size: 18px;
  }
`;

const UnderLineSpan = styled.span<{ isSelecterd: boolean }>`
  text-decoration: ${(props) => (props.isSelecterd ? "underline" : "none")};
`;

const CrossKey = styled.div<{}>`
  margin-left: 1rem;
  display: grid;
  grid-template-columns: 30px 30px 30px;
  grid-template-rows: 30px 30px 30px;
  .position-top {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    border-radius: 5px 5px 0 0;
    box-shadow: 2px 1px 1px #000000;
    cursor: pointer;
    .triangle {
      border-right: 10px solid transparent;
      border-bottom: ${(10 * 2) / Math.sqrt(3)}px solid #494949;
      border-left: 10px solid transparent;
      margin: 0 0 10px 0;
    }
  }

  .position-left {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    border-radius: 5px 0 0 5px;
    box-shadow: 2px 1px 1px #000000;
    .triangle {
      border-top: 10px solid transparent;
      border-right: ${(10 * 2) / Math.sqrt(3)}px solid #494949;
      border-bottom: 10px solid transparent;
      margin: 0 10px 0 0;
    }
  }

  .position-center {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    .circle {
      border: 10px solid #494949;
      border-radius: 50%;
    }
  }

  .position-right {
    grid-row: 2 / 3;
    grid-column: 3/4;
    border-radius: 0 5px 5px 0;
    box-shadow: 2px 1px 1px #000000;
    .triangle {
      border-top: 10px solid transparent;
      border-left: ${(10 * 2) / Math.sqrt(3)}px solid #494949;
      border-bottom: 10px solid transparent;
      margin: 0 0 0 10px;
    }
  }

  .position-bottom {
    grid-row: 3 / 4;
    grid-column: 2/3;
    border-radius: 0 0 5px 5px;
    box-shadow: 2px 1px 1px #000000;
    cursor: pointer;
    .triangle {
      border-right: 10px solid transparent;
      border-top: ${(10 * 2) / Math.sqrt(3)}px solid #494949;
      border-left: 10px solid transparent;
      margin: 10px 0 0 0;
    }
  }
  .common {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7c7c7c;
  }
`;

const Circle = styled.div<{ top: number; right: number; isHoverOn?: boolean }>`
  border-radius: 50%;
  margin: 0 10px 0 10px;
  position: absolute;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
  background-color: #7c7c7c;
  font-size: 1.5rem;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 2px 1px 1px #000000;
  cursor: ${(props) => (props.isHoverOn ? "pointer" : "default")};
`;
