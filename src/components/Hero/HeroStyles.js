import styled from "styled-components";
import {Container, Heading} from "../../globalStyles";

export const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: min(100%, 44rem);

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    width: min(100%, 45rem);
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: min(100%, 24rem);
    padding: 3rem 1rem;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 2rem 1rem 1rem;
  }
`;

export const HeroTagLine = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: var(--orange);
  text-align: center;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    font-size: 20px;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    font-size: 18px;
    text-align: left;
  }
`;

export const HeroHeading = styled(Heading)`
  font-weight: 700;
  font-size: 40px;
  line-height: 43px;
  color: var(--white);
  text-align: center;
  margin-top: 15px;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    font-size: 30px;
    line-height: 38px;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    font-size: 25px;
    line-height: 33px;
    text-align: left;
  }

  ${Heading}
`;

export const HeroSubtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--white);
  text-align: center;
  padding: 0 6rem;
  margin-top: 5px;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    font-size: 16px;
    padding: 0;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    text-align: left;
    padding: 0;
  }
`;
