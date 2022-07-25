import styled from "styled-components";

export const FeaturesCard = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  background: var(--primary);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  height: 240px;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    max-width: 100%;
    margin: 0.5rem 0;
    height: 260px;
  }
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    max-width: 100%;
    margin: 0.5rem 0;
    height: auto;
    padding-bottom: 2rem;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    max-width: 100%;
    margin: 0.5rem 0;
  }
`;

export const FeaturesCardTop = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
    padding: 0.5rem 0;
  }
`;

export const FeaturesCardIconHolder = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  margin-top: 0.5rem;
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    margin: auto;
  }
`;

export const FeaturesCardIcon = styled.img`
  width: 30px;
  height: 30px;
  display: block;
  margin: 4px auto;
`;

export const FeaturesCardHeading = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: var(--white);
  margin-left: 15px;
  margin-top: 8px;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    font-size: 14px;
  }
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    text-align: center;
    margin-top: 1rem;
  }
`;

export const FeaturesCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
`;

export const FeatureTextInfo = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.93px;
  padding: 0 0 0 3.8rem;
  height: 100px;
  color: var(--white);

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    padding: 0;
    height: 140px;
    font-size: 13px;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 0;
    text-align: center;
    height: 100%;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 0;
  }
`;

export const FeaturesCta = styled.a`
  cursor: pointer;
  text-decoration: none;
  background: var(--orange);
  backdrop-filter: blur(8px);
  border-radius: 5px;
  margin-left: 3.5rem;
  padding: 8px 30px;
  margin-top: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 13px;
  line-height: 25px;
  color: var(--white);
  width: 170px;
  
  &:hover {
    background: #031b26;
    color: var(--white);
  }

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    margin-left: 0;
    width: 100%;
  }
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    margin-left: 0;
    width: 100%;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    margin-left: 0;
    width: 100%;
  }
`;
