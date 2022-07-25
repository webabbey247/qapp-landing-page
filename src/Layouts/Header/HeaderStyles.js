import styled from "styled-components";
import {Link} from "react-router-dom";

export const Menu = styled.nav`
  background: var(--primary);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: background-color 0.3s ease-in;
  top: 0;
  position: sticky;
  z-index: 1020;

  @media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
  }

  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
    padding: 0 1rem;
  }

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    // box-shadow: 0 2px 3px rgba(96, 96, 96, .1);
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    // box-shadow: 0 2px 3px rgba(96, 96, 96, .1);
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  z-index: 50;
`;

export const NavMenuWrapper = styled.div`
display: flex;
flex-basis: auto;
flex-grow: 1;
align-items: center;
`;

export const NavMenuUl = styled.ul`
flex-direction: row;
margin-left: auto !important;
display: flex;
padding-left: 0;
list-style: none;
margin-bottom: 15px;
`;


export const MenuNavLi = styled.li`
display: inline-block;
line-height: 40px;
margin-left: 20px;
animation: FadeIn 1s cubic-bezier(.65,.05,.36,1);
animation-fill-mode: both;
margin-top: 15px;
`;


export const NavIcon = styled.img`
  margin-right: 1rem;
  width: 80px;
`;

export const NavLanguage = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.35rem;
`;

export const NavLanguageText = styled.p`
  color: var(--white);
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  margin: 5px;
`;

export const NavLanguageIcon = styled.span`
  margin-left: 0.2rem;
`;

export const NavNightMood = styled.span`
  margin-left: 1rem;
`;

export const NavLanguageDropdownIcon = styled.span`
  margin-left: 0.2rem;
`;
