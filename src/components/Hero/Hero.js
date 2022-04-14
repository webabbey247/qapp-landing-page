import React from "react";
import {
  HeroContainer,
  HeroTagLine,
  HeroHeading,
  HeroSubtitle,
} from "./HeroStyles";
import {Section} from "../../globalStyles";

const Hero = () => {
  return (
    <Section padding='4rem 0'>
      <HeroContainer>
        <HeroTagLine>Your multiple services platform</HeroTagLine>
        <HeroHeading>
          For a seamless universal banking, and business experience.
        </HeroHeading>
        <HeroSubtitle>
          Join millions of people getting seamless banking experience. We’re the
          first non-banking bank in the world
        </HeroSubtitle>
      </HeroContainer>
    </Section>
  );
};

export default Hero;
