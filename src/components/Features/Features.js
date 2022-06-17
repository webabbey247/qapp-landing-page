import React from "react";
import { CustomRouterLink, GeneralMdText, GeneralSmText } from "styles/GlobalCss";
import {
  FeaturesCard,
  FeaturesCardTop,
  FeaturesCardIconHolder,
  FeaturesCardIcon,
  FeaturesCardBottom,
  FeaturesCta,
} from "./FeaturesStyles";

const Features = ({ pageType }) => {
  return (
    <>
      {pageType === "finance" && (
        <FeaturesCard>
          <FeaturesCardTop>
            <FeaturesCardIconHolder>
            <FeaturesCardIcon
                src='./assets/mfi-icon.png'
                alt='Financial Institutions'
              />
            </FeaturesCardIconHolder>

          </FeaturesCardTop>
          <FeaturesCardBottom>
            <GeneralMdText textAlign="center" color="var(--white)" fontSize="16px" lineHeight="21px" fontWeight="700" textTransform="Capitalize" margin="1rem 0">
              Financial Institutions
            </GeneralMdText>
            <GeneralSmText color="var(--white)" padding="0.5rem 0" fontSize="14px" lineHeight="16.93px" height="130px" textAlign="center" textTransform="unset">
            This portal connects all the financial institutions across African countries which enables the customers manage all their bank accounts transactions and history in one APP.
            </GeneralSmText>
            <CustomRouterLink to="/financial-institutions/request-demo" fontSize="13px" lineHeight="25px" color="var(--white);" textAlign="center" float="center" borderRadius="5px" fontWeight="500" padding="6px 20px" background="var(--orange)" width="170px" display="flex" justifyContent="center" margin="10px auto 0" textTransform="capitzlize">Request a demo</CustomRouterLink>
          </FeaturesCardBottom>
        </FeaturesCard>
      )}

      {pageType === "agent" && (
        <FeaturesCard>
          <FeaturesCardTop>
            <FeaturesCardIconHolder>
              <FeaturesCardIcon
                src='./assets/mfi-icon.png'
                alt='Agents'
              />
            </FeaturesCardIconHolder>

          </FeaturesCardTop>
          <FeaturesCardBottom>
            <GeneralMdText textAlign="center" color="var(--white)" fontSize="16px" lineHeight="21px" fontWeight="700" textTransform="Capitalize" margin="1rem 0">
              Agents
            </GeneralMdText>
            <GeneralSmText color="var(--white)" padding="0.5rem 0" fontSize="14px" lineHeight="16.93px" height="130px" textAlign="center" textTransform="unset">
              This portal connects all the financial institutions across African
              countries which enables the customers manage all their bank
              accounts transactions and history in one APP.
            </GeneralSmText>
            <FeaturesCta target="_blank" href='http://agent.qapp.space'>Apply Now</FeaturesCta>
          </FeaturesCardBottom>
        </FeaturesCard>
      )}

      {pageType === "merchant" && (
        <FeaturesCard>
          <FeaturesCardTop>
            <FeaturesCardIconHolder>
            <FeaturesCardIcon
                src='./assets/merchant-icon.png'
                alt='Merchants'
              />
            </FeaturesCardIconHolder>

          </FeaturesCardTop>
          <FeaturesCardBottom>
            <GeneralMdText textAlign="center" color="var(--white)" fontSize="16px" lineHeight="21px" fontWeight="700" textTransform="Capitalize" margin="1rem 0">
            Merchants
            </GeneralMdText>
            <GeneralSmText color="var(--white)" padding="0.5rem 0" fontSize="14px" lineHeight="16.93px" height="130px" textAlign="center" textTransform="unset">
            This portal is for large and small scaled business owners, institutions or organizations to come leverage FREE OF CHARGE on our millions of already existing and active customer data base across African countries.
            </GeneralSmText>
            <CustomRouterLink to="/onboarding/merchants" fontSize="13px" lineHeight="25px" color="var(--white);" textAlign="center" float="center" borderRadius="5px" fontWeight="500" padding="6px 30px" background="var(--orange)" width="170px" display="flex" justifyContent="center" margin="10px auto 0">Get Started</CustomRouterLink>
          </FeaturesCardBottom>
        </FeaturesCard>
      )}

      {pageType === "consumer" && (
        <FeaturesCard>
          <FeaturesCardTop>
            <FeaturesCardIconHolder>
            <FeaturesCardIcon
                src='./assets/consumers-icon.png'
                alt='Consumers'
              />
            </FeaturesCardIconHolder>

          </FeaturesCardTop>
          <FeaturesCardBottom>
            <GeneralMdText textAlign="center" color="var(--white)" fontSize="16px" lineHeight="21px" fontWeight="700" textTransform="Capitalize" margin="1rem 0">
            Consumers
            </GeneralMdText>
            <GeneralSmText color="var(--white)" padding="0.5rem 0" fontSize="14px" lineHeight="16.93px" height="130px" textAlign="center" textTransform="unset">
            This portal is termed the “super app” to easily explain the quality, variety and super features yet in its easiest way.
            </GeneralSmText>
            <CustomRouterLink to="/onboarding/consumers" fontSize="13px" lineHeight="25px" color="var(--white);" textAlign="center" float="center" borderRadius="5px" fontWeight="500" padding="6px 30px" background="var(--orange)" width="170px" display="flex" justifyContent="center" margin="10px auto 0">Download Now</CustomRouterLink>
          </FeaturesCardBottom>
        </FeaturesCard>
      )}
    </>
  );
};

export default Features;
