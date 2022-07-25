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

  @media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
  }
  
  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
    padding: 10rem 0;
  }
  
  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  }
  
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 3rem 0;
  }
  
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {

  }
`;

export const ContentBankSection = styled.section`
  margin: 0 auto;
  background: #F7F7F7;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 7.3rem 0;
  flex-direction: row;
  width: 100%;

  @media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
  }
  
  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
    padding: 10rem 0;
  }
  
  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  }
  
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 3rem 0.5rem;
  }
  
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {

  }
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
display: flex;
flex-direction: column;

@media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
  
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {

}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  display: none;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
  display: none;
}
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


export const ContentBackIcon = styled.div`
margin: 0 0 2rem;
cursor: pointer;
`;

export const MobileBackIcon = styled.div`
margin: 0 0 2rem;
cursor: pointer;
display: none;


@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  display: flex;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
  display: flex;
}
`;



export const ContentSearchForm = styled.div`
padding: 1rem 0;
display: flex;
justify-content: center;
`;

export const ContentSearchFormContainer = styled.div`
width: min(100%,45rem);
position: relative;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--primary);
  height: 54px;
  padding: 0 4rem;
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 0;
  font-weight: 600;
  box-sizing: border-box;
  color: var(--primary);
  font-size: 14px;
  line-height: 17.05px;
  margin-bottom: 1rem;
  position: relative;


  &.invalid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E") !important;
    border-color: rgba(220, 53, 69, 0.5) !important;
    color: #dc3545;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  &::placeholder {
    font-size: 14px;
    line-height: 17.05px;
    font-weight: 400;
    color: var(--primary);
    opacity: 0.2;
  }

  &:focus {
    color: var(--orange);
    border-color: var(--orange);
    outline: 0;
    box-shadow: none !important;
    background-color: transparent;
  }
`;


export const SearchIconHolder = styled.div`
display: flex;
flex-direction: row;
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
align-items: center;
margin: 0px;
padding: 0px;
position: absolute;
left: 0%;
top: 20%;
`;

export const ContentBankList = styled.div`
display: flex;
flex-drection: column;
justify-content: center;
`;

export const ContentBankChild = styled.div`
display: flex;
flex-drection: row;
justify-content: space-between;
background: var(--white);
padding: 1rem;
border-radius: 8px;
margin: 15px 0;

@media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  padding: 0.8rem;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
}
`;


export const ContentBankChildLTR = styled.div`
display: flex;
flex-drection: row;
justify-content: flex-start;
padding-top: 5px;
`;


export const ContentBankLogo = styled.img`
margin-right: 1rem;
height: 30px;
width: 30px;
`;

export const ContentBankChildRTL = styled.div`
padding-top: 5px;
`;

export const ContentBankCta = styled.a`
justify-content: center;
display: flex;
text-decoration: underline;
padding: 20px 0;
text-align: center;
font-size: 20px;
line-height: 24.43px;
color: var(--orange);
font-weight: 700;

&:hover {
  color: var(--primary);
}
`;

export const ContentFormLTR = styled.div`
order: 1;
display: flex;
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  order: 2;
  display: flex;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {

}
`;


export const ContentFormRTL = styled.div`
order: 2;
display: flex;
`;

export const MobileContainer = styled.div`

@media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
  display: none;
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
  display: none;
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  display: none;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
}
`;

export const MobileVideoContainer = styled.div``