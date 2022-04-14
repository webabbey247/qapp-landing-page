import React from "react";
import {
  Menu,
  NavbarWrapper,
  NavLogo,
  NavIcon,
  NavLanguage,
  NavLanguageText,
  NavLanguageIcon,
  NavLanguageDropdownIcon,
} from "./HeaderStyles";
import {FaGlobe, FaCaretDown} from "react-icons/fa";
import {Container} from "../../globalStyles";
import {IconContext} from "react-icons";
import {qappLogo} from "../../common/images";

const Header = () => {
  return (
    <IconContext.Provider value={{color: "#fff"}}>
      <Menu>
        <Container padding='0'>
          <NavbarWrapper>
            <NavLogo to='/'>
              <NavIcon src={qappLogo} alt='QAPP' />
            </NavLogo>
            <NavLanguage>
              <NavLanguageText>English</NavLanguageText>
              <NavLanguageIcon>
                <FaGlobe />
              </NavLanguageIcon>
              <NavLanguageDropdownIcon>
                <FaCaretDown />
              </NavLanguageDropdownIcon>
            </NavLanguage>
          </NavbarWrapper>
        </Container>
      </Menu>
    </IconContext.Provider>
  );
};

export default Header;
