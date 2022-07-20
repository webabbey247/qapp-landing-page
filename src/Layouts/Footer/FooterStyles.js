import styled from "styled-components";
import {Link} from "react-router-dom";

export const FooterSection = styled.footer`
  background-color: var(--primary);
  padding: 0.5rem 0;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    padding: 0.5rem 0;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
  }
`;

export const FooterLTR = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const FooterCopyright = styled.p`
  color: var(--white);
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  margin-top: 1rem !important;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    font-size: 13px;
    margin: 0;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    font-size: 13px;
    margin: 0;
  }
`;

export const FooterRTL = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 1rem;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    margin: 0;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    margin: 0 0 0.5rem 0;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    margin-top: 0.5rem;
  }
`;

export const FooterNavLinks = styled(Link)`
  text-decoration: none;
  margin-right: 20px;
  color: var(--white);
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    font-size: 13px;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    font-size: 13px;
  }
`;
