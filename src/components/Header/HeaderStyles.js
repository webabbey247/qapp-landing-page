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
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
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

export const NavIcon = styled.img`
  margin-right: 1rem;
  width: 80px;
`;

export const NavLanguage = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.45rem;
`;

export const NavLanguageText = styled.p`
  color: var(--white);
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  margin: 0;
`;

export const NavLanguageIcon = styled.span`
  margin-left: 0.4rem;
  margin-top: 0.25rem;
`;

export const NavLanguageDropdownIcon = styled.span`
  margin-left: 0.3rem;
  margin-top: 0.25rem;
`;
