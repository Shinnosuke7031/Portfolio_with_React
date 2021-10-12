import React from "react";
import styled from "styled-components";
import { Link as Scroll } from "react-scroll";

const Navs = [
  { name: "About this site", scrollId: "aboutthissite" },
  { name: "About me", scrollId: "aboutme" },
  { name: "Products", scrollId: "products" },
  { name: "Contact", scrollId: "contact" },
];

/************ Type Props ************/

/************ Components ************/
const Header: React.VFC<{}> = () => {
  return (
    <Container>
      <LogoWrapper>
        {/* <img src={`${LogoPNG}`} height={50} /> */}
        <h1>SHINNOSUKE IINO</h1>
      </LogoWrapper>
      <NavsWrapper>
        {Navs.map((nav, index) => (
          <Scroll to={nav.scrollId} smooth={true} key={index}>
            <p>{nav.name}</p>
          </Scroll>
        ))}
      </NavsWrapper>
    </Container>
  );
};

export default Header;

/******** Styled-components *********/
const Container = styled.div<{}>`
  margin: 0;
  width: 100vw;
  height: 3.5rem;
  background-color: rgba(0, 0, 0, 0.807);
  /* border-width: 3px 0 0 0;
  border-color: #000000;
  border-style: solid; */
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 7px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  position: sticky;
  top: 0;
  color: #c5c5c5;
  z-index: 999;
`;
const LogoWrapper = styled.div<{}>`
  margin: 0 0 0 1rem;
  width: fit-content;
  height: fit-content - 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const NavsWrapper = styled.div<{}>`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  p {
    position: relative;
    font-size: 19px;
    margin: 0 2.5rem 0.5rem 0;
    :hover {
      cursor: pointer;
      ::after {
        bottom: -4px;
        opacity: 1;
        visibility: visible;
      }
    }
    ::after {
      position: absolute;
      bottom: 2px;
      left: 0;
      content: "";
      width: 100%;
      height: 2px;
      background: #c5c5c5;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s;
    }
  }
`;
