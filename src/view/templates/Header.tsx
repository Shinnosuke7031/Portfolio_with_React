import React, { useState } from "react";
import styled from "styled-components";
import { Link as Scroll } from "react-scroll";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Navs = [
  { name: "About this site", scrollId: "aboutthissite" },
  { name: "About me", scrollId: "aboutme" },
  { name: "Products", scrollId: "products" },
  { name: "Contact", scrollId: "contact" },
];

/************ Type Props ************/

/************ Components ************/
const Header: React.VFC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsOpen(open);
  };

  const menuList = (
    <div
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
      onTouchEnd={() => toggleDrawer(false)}
    >
      <List>
        {Navs.map((nav, index) => (
          <Scroll to={nav.scrollId} smooth={true} key={index}>
            <ListItem button>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
              <ListItemText>
                <ListText>{nav.name}</ListText>
              </ListItemText>
            </ListItem>
          </Scroll>
        ))}
      </List>
    </div>
  );
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
      <NavsWrapperMob>
        <IconButton
          onClick={() => toggleDrawer(true)}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={() => toggleDrawer(false)}
        >
          {menuList}
        </Drawer>
      </NavsWrapperMob>
    </Container>
  );
};

export default Header;

/******** Styled-components *********/
const Container = styled.div<{}>`
  margin: 0;
  width: 100%;
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
  @media (max-width: 901px) {
    display: none;
  }
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

const NavsWrapperMob = styled.div<{}>`
  display: none;
  @media (max-width: 901px) {
    display: block;
  }
`;

const ListText = styled.div`
  text-decoration: underline;
  text-decoration-color: #656565;
  font-family: "DotGothic16", sans-serif !important;
  font-weight: bold;
`;
