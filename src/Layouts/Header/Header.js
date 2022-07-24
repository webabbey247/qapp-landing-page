import React from "react";
import {
  Menu,
  NavbarWrapper,
  NavLogo,
  NavIcon,
  NavLanguage,
  NavLanguageText,
  NavLanguageIcon,
  // NavLanguageDropdownIcon,
  NavMenuWrapper,
  NavMenuUl,
  MenuNavLi,
  // NavNightMood
} from "./HeaderStyles";
import { FaGlobe } from "react-icons/fa";
import { Container } from "../../globalStyles";
import { IconContext } from "react-icons";
import { qappLogo } from "../../assets/images";
import { CustomRouterLink } from "styles/GlobalCss";
// import { Calendar, Sunrise } from "react-feather";


const Header = () => {
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Menu>
        <Container padding='0'>
          <NavbarWrapper>
            <NavLogo to='/'>
              <NavIcon src={qappLogo} alt='QAPP' />
            </NavLogo>


            <NavMenuWrapper>
              <NavMenuUl>
                <MenuNavLi>
                <CustomRouterLink to="/" fontSize="13px" lineHeight="25px" color="var(--white);" 
                textAlign="center" borderRadius="5px" fontWeight="600" padding="10px 30px" background="var(--orange)" display="flex" justifyContent="center" margin="0 auto 0" textTransform="capitzlize">Login</CustomRouterLink>
                </MenuNavLi>
                <MenuNavLi>
                <NavLanguage>
                <NavLanguageText>English</NavLanguageText>
                <NavLanguageIcon>
                  <FaGlobe size="18px" />
                </NavLanguageIcon>
                {/* <NavNightMood>
                  <FaSun size="18px" />
                </NavNightMood> */}
              </NavLanguage>
                </MenuNavLi>
              </NavMenuUl>
            </NavMenuWrapper>
          </NavbarWrapper>
        </Container>
      </Menu>
    </IconContext.Provider>
  );
};
export default Header;
