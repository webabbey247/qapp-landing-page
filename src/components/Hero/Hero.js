import React from "react";
import styled from "styled-components";
import {HeroContainer} from "./HeroStyles";
import { GeneralLgText, GeneralSmText } from "styles/GlobalCss";

export const HeroSection = styled.section`
  background: transparent;
  padding: 7rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <GeneralLgText fontWeight="700" lineHeight="55.6px" fontSize="43px" color="var(--white)" textAlign="center" textTransform="capitalize" margin="0.5rem 0" padding="0">
        Your multiple services platform     
        </GeneralLgText>
        <GeneralSmText fontWeight="400" lineHeight="28px" fontSize="20px" color="var(--orange)" textAlign="center" textTransform="unset" padding="0">
        Free. Fast and Secured way to do business with your customers. 
        </GeneralSmText>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
