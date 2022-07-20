import React from "react";
import {HeroContainer} from "./HeroStyles";
import {Section} from "../../globalStyles";
import { GeneralLgText, GeneralSmText } from "styles/GlobalCss";

const Hero = () => {
  return (
    <Section padding='5rem 0'>
      <HeroContainer>
        <GeneralLgText fontWeight="700" lineHeight="55.6px" fontSize="43px" color="var(--white)" textAlign="center" textTransform="capitalize" margin="0.5rem 0" padding="0">
        Your multiple services platform     
        </GeneralLgText>
        <GeneralSmText fontWeight="400" lineHeight="28px" fontSize="20px" color="var(--orange)" textAlign="center" textTransform="unset" padding="0">
        Free. Fast and Secured way to do business with your customers. 
        </GeneralSmText>
      </HeroContainer>
    </Section>
  );
};

export default Hero;
