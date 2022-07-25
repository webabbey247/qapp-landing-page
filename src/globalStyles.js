import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`



:root {
    --primary: #09354a;
    --secondary: #1b4153;
    --header-color: #163e57;
    --orange: #ff6501;
    --icon-border-color: #235a74;
    --gray-color: #ECECEC;
    --input-color: #818181;
    --white: #ffffff;
    --icon-gradient: linear-gradient(
        99.54deg,
        rgba(16, 63, 87, 0.52) 7.46%,
        rgba(3, 33, 48, 0.52) 95.68%
      );
  }
  *,
    *::before,
    *::after {
    box-sizing: border-box;
  }

  

  body, html{
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    margin:0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -moz-text-size-adjust: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
    background: var(--white);
    text-rendering: optimizeLegibility;
   }

   h1, h2, h3, h4 {
    font-family: 'DM Sans', sans-serif;
   }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: ${({padding}) => (padding ? padding : "0 10px")};
  height: ${({height}) => (height ? height : "")};
  @media screen and (max-width: 960px) {
    padding: 0 15px;
  }
`;
export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({inverse}) => (inverse ? "$403ae3" : "var(--primary)")};
  letter-spacing: ${({spacing}) => (spacing ? spacing : "")};
  width: 100%;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({margin}) => (margin ? margin : "")};
  margin-bottom: ${({mb}) => (mb ? mb : "")};
  margin-top: ${({mt}) => (mt ? mt : "")};
  color: ${({inverse}) => (inverse ? "$403ae3" : "var(--primary)")};
  text-align: center;
  width: ${({width}) => (width ? width : "100%")};
  letter-spacing: ${({spacing}) => (spacing ? spacing : "")};
`;

export const MiniHeading = styled.h3`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({margin}) => (margin ? margin : "")};
  margin-bottom: ${({mb}) => (mb ? mb : "")};
  margin-top: ${({mt}) => (mt ? mt : "")};
  color: ${({inverse}) => (inverse ? "$403ae3" : "var(--primary)")};
  text-align: center;
  width: ${({width}) => (width ? width : "100%")};
  letter-spacing: ${({spacing}) => (spacing ? spacing : "")};
`;

export const TextWrapper = styled.span`
  color: ${({color}) => (color ? color : "var(--orange)")};
  font-size: ${({size}) => (size ? size : "")};
  font-weight: ${({weight}) => (weight ? weight : "")};
  letter-spacing: ${({spacing}) => (spacing ? spacing : "")};
  padding: ${({padding}) => (padding ? padding : "")};
  margin: ${({margin}) => (margin ? margin : "")};
  margin-bottom: ${({mb}) => (mb ? mb : "")};
  margin-top: ${({mt}) => (mt ? mt : "")};
`;

export const TextInfo = styled.p`
  color: ${({color}) => (color ? color : "var(--white)")};
  font-size: ${({size}) => (size ? size : "")};
  font-weight: ${({weight}) => (weight ? weight : "")};
  line-height: 20px;
  letter-spacing: ${({spacing}) => (spacing ? spacing : "")};
  padding: ${({padding}) => (padding ? padding : "")};
  margin: ${({margin}) => (margin ? margin : "")};
  margin-bottom: ${({mb}) => (mb ? mb : "")};
  margin-top: ${({mt}) => (mt ? mt : "")};
  height: ${({height}) => (height ? height : "100%")};

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    font-size: 13px;
  }
`;

export const Section = styled.section`
  padding: ${({padding}) => (padding ? padding : "2rem 0")};
  margin: ${({margin}) => (margin ? margin : "")};
  background: ${({inverse}) => (inverse ? "var(--white)" : "var(--primary)")};
  position: ${({position}) => (position ? position : "")};
  width: ${({width}) => (width ? width : "auto")};
  min-width: ${({minWidth}) => (minWidth ? minWidth : "auto")};
  max-width: ${({maxWidth}) => (maxWidth ? maxWidth : "auto")};
  height: ${({height}) => (height ? height : "auto")};
  max-height: ${({maxHeight}) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({minHeight}) => (minHeight ? minHeight : "auto")};
  position: relative;

  @media screen and (max-width: 768px) {
    padding: ${({smPadding}) => (smPadding ? smPadding : "1rem 0")};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({justify}) => (justify ? justify : "")};
  align-items: ${({align}) => (align ? align : "")};
  gap: ${({gap}) => (gap ? gap : "")};
  padding: ${({padding}) => (padding ? padding : "")};
  margin: ${({margin}) => (margin ? margin : "")};
  position: ${({position}) => (position ? position : "")};
  width: ${({width}) => (width ? width : "auto")};
  min-width: ${({minWidth}) => (minWidth ? minWidth : "auto")};
  max-width: ${({maxWidth}) => (maxWidth ? maxWidth : "auto")};
  height: ${({height}) => (height ? height : "auto")};
  max-height: ${({maxHeight}) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({minHeight}) => (minHeight ? minHeight : "auto")};
  flex-wrap: ${({wrap}) => (wrap ? wrap : "")};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({justify}) => (justify ? justify : "")};
  align-items: ${({align}) => (align ? align : "")};
  gap: ${({gap}) => (gap ? gap : "")};
  padding: ${({padding}) => (padding ? padding : "")};
  margin: ${({margin}) => (margin ? margin : "")};
  position: ${({position}) => (position ? position : "")};
  width: ${({width}) => (width ? width : "auto")};
  min-width: ${({minWidth}) => (minWidth ? minWidth : "auto")};
  max-width: ${({maxWidth}) => (maxWidth ? maxWidth : "auto")};
  height: ${({height}) => (height ? height : "auto")};
  max-height: ${({maxHeight}) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({minHeight}) => (minHeight ? minHeight : "auto")};
`;

export const Button = styled.button`
  border-radius: 4px;
  background: var(--orange);
  white-space: nowrap;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 13px;
  line-height: 25px;
  color: var(--white);
  outline: none;
  border: 2px solid var(--orange);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  width: ${({width}) => (width ? width : "100%")};
  font-weight: 600;
  margin: ${({margin}) => (margin ? margin : "")};
  display: block;

  &:hover {
    color: var(--white);
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;
  }
`;

export default GlobalStyle;
