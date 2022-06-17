import React from "react";
import {HeroContainer} from "./HeroStyles";
import {Section} from "../../globalStyles";
import { GeneralLgText, GeneralMdText, GeneralSmText } from "styles/GlobalCss";

const Hero = () => {
  return (
    <Section padding='4rem 0'>
      <HeroContainer>
        <GeneralLgText fontWeight="700" lineHeight="46.6px" fontSize="40px" color="var(--white)" textAlign="center" textTransform="capitalize" margin="0.5rem 0">
        Your multiple services platform     
        </GeneralLgText>
        <GeneralMdText fontWeight="400" lineHeight="22px" fontSize="20px" color="var(--orange)" textAlign="center" textTransform="unset" margin="0.5rem 0" >Free. Fast and Secured way to do business with your customers.   </GeneralMdText>
        <GeneralSmText fontWeight="400" lineHeight="22px" fontSize="16px" color="var(--white)" textAlign="center" textTransform="unset" padding="0 6rem" margin="10px 0 0">
          Join millions of people getting seamless banking experience. We’re the
          first non-banking bank in the world
        </GeneralSmText>
        {/* font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--white);
  text-align: center;
  padding: 0 6rem;
  margin-top: 5px; */}
        {/* <HeroSubtitle>
          Join millions of people getting seamless banking experience. We’re the
          first non-banking bank in the world
        </HeroSubtitle> */}
      </HeroContainer>
    </Section>
  );
};

export default Hero;
