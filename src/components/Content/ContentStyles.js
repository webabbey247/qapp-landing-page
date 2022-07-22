import styled from "styled-components";
import { Link } from "react-router-dom";

const video = require('../../assets/images/video-placeholder.png')

export const ContentSection = styled.section`
  margin: 0 auto;
  background: var(--white);
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 7.3rem 0;
  flex-direction: row;
  width: 100%;
`;

export const MerchantSection = styled.section`
  margin: 0 auto;
  background: var(--white);
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 4.3rem 0;
  flex-direction: row;
  width: 100%;
`;

export const ContentContainer = styled.div`
width: min(100%, 85rem);
`;

export const ContentVideoContainer = styled.div`
width: auto;
margin-bottom: 0;
`;

export const ContentVideoPlaceholder = styled.div`
background-image: url("${video}");
background-size: cover;
background-position: center;
height: 350px;
background-repeat: no-repeat;
border-radius: 8px;
`;

export const ContentIconHolder = styled.div`
  width: 70px;
  height: 70px;
  background: var(--primary);
  border: 0.770559px solid var(--icon-border-color);
  box-sizing: border-box;
  border-radius: 5px;
  margin: 0 auto;
  display: block;
`;

export const ContentIcon = styled.img`
  width: 42px;
  height: 42px;
  margin: 0 auto;
  display: block;
  margin-top: 13px;
`;

export const ContentDescription = styled.p`
  font-weight: 400;
  font-size: 19px;
  line-height: 26px;
  text-align: center;
  color: var(--header-color);
  margin-bottom: 1rem;
  padding: 1rem 0;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    font-size: 17px;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    font-size: 17px;
  }
`;

export const ContentCta = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  background: #ff6501;
  border-radius: 5px;
  margin-left: 3.5rem;
  padding: 11px 25px;
  margin: 2rem auto;
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 25px;
  color: var(--white);
  width: 220px;
  font-weight: 600;
`;
