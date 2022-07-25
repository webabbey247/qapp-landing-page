import React from "react";
import { SiteContainer } from "styles/GlobalCss";
import {
  FooterSection,
  FooterWrapper,
  FooterLTR,
  FooterCopyright,
  FooterRTL,
  FooterNavLinks,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterSection>
      <SiteContainer>
        <FooterWrapper>
          <FooterLTR>
            <FooterCopyright>
              Copyright &copy; 2022 Qapp. All rights reserved.
            </FooterCopyright>
          </FooterLTR>
          <FooterRTL>
            <FooterNavLinks to='/terms-condition'>
              Terms and Condition
            </FooterNavLinks>
            <FooterNavLinks to='/privacy-policy'>Privacy Policy</FooterNavLinks>
          </FooterRTL>
        </FooterWrapper>
      </SiteContainer>
    </FooterSection>
  );
};

export default Footer;
