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

import { mfiIcon, agentIcon, merchantIcon, consumerIcon } from "assets/images";

const Features = ({ pageType }) => {
  return (
    <>
      {pageType === "finance" && (
        <FeaturesCard>
          <FeaturesCardTop>
            <FeaturesCardIconHolder>
            <FeaturesCardIcon
                src={mfiIcon}
                alt='Financial Institutions'
              />
            </FeaturesCardIconHolder>

          </FeaturesCardTop>
          <FeaturesCardBottom>
            <GeneralMdText textAlign="center" color="var(--white)" fontSize="16px" lineHeight="21px" fontWeight="700" textTransform="Capitalize" margin="0.3rem 0 0.5rem">
              Financial Institutions
            </GeneralMdText>
            <GeneralSmText color="var(--white)" padding="0.5rem 1rem" fontSize="14px" lineHeight="17.05px" height="55px" textAlign="center" textTransform="unset">
            Free. Secure. Fast. Instantly deployable for banks, agents and customers.
            </GeneralSmText>
            <CustomRouterLink to="/financial-institutions/demo" fontSize="13px" lineHeight="25px" color="var(--white);" textAlign="center" float="center" borderRadius="5px" fontWeight="600" padding="8px 30px" background="var(--orange)" width="170px" display="flex" justifyContent="center" margin="10px auto 0" textTransform="capitzlize">Get Started</CustomRouterLink>
          </FeaturesCardBottom>
        </FeaturesCard>
      )}

      {pageType === "agent" && (
        <FeaturesCard>
          <FeaturesCardTop>
            <FeaturesCardIconHolder>
              <FeaturesCardIcon
                src={agentIcon}
                alt='Agents'
              />
            </FeaturesCardIconHolder>

          </FeaturesCardTop>
          <FeaturesCardBottom>
            <GeneralMdText textAlign="center" color="var(--white)" fontSize="16px" lineHeight="21px" fontWeight="700" textTransform="Capitalize" margin="0.3rem 0 0.5rem">
              Agents
            </GeneralMdText>
            <GeneralSmText color="var(--white)" padding="0.5rem 1rem" fontSize="14px" lineHeight="17.05px" height="55px" textAlign="center" textTransform="unset">
            Be the boss of your own. Partner with banks and be a street bank.
            </GeneralSmText>
            <FeaturesCta target="_blank" href='http://agent.qapp.space'>Get Started</FeaturesCta>
          </FeaturesCardBottom>
        </FeaturesCard>
      )}

      {pageType === "merchant" && (
        <FeaturesCard>
          <FeaturesCardTop>
            <FeaturesCardIconHolder>
            <FeaturesCardIcon
                src={merchantIcon}
                alt='Merchants'
              />
            </FeaturesCardIconHolder>

          </FeaturesCardTop>
          <FeaturesCardBottom>
          <GeneralMdText textAlign="center" color="var(--white)" fontSize="16px" lineHeight="21px" fontWeight="700" textTransform="Capitalize" margin="0.3rem 0 0.5rem">
            Merchants
            </GeneralMdText>
            <GeneralSmText color="var(--white)" padding="0.5rem 1rem" fontSize="14px" lineHeight="17.05px" height="55px" textAlign="center" textTransform="unset">
            The only APP you need to grow your business FREE.
            </GeneralSmText>
            <CustomRouterLink to="/merchants/demo" fontSize="13px" lineHeight="25px" color="var(--white);" textAlign="center" float="center" borderRadius="5px" fontWeight="600" padding="8px 30px" background="var(--orange)" width="170px" display="flex" justifyContent="center" margin="10px auto 0">Get Started</CustomRouterLink>
          </FeaturesCardBottom>
        </FeaturesCard>
      )}

      {pageType === "consumer" && (
        <FeaturesCard>
          <FeaturesCardTop>
            <FeaturesCardIconHolder>
            <FeaturesCardIcon
                src={consumerIcon}
                alt='Consumers'
              />
            </FeaturesCardIconHolder>

          </FeaturesCardTop>
          <FeaturesCardBottom>
          <GeneralMdText textAlign="center" color="var(--white)" fontSize="16px" lineHeight="21px" fontWeight="700" textTransform="Capitalize" margin="0.3rem 0 0.5rem">
            Consumers
            </GeneralMdText>
            <GeneralSmText color="var(--white)" padding="0.5rem 1rem" fontSize="14px" lineHeight="17.05px" height="55px" textAlign="center" textTransform="unset">
            All your Gaming. Betting. Social Media needs all in one SUPER APP.
            </GeneralSmText>
            <CustomRouterLink to="/onboarding/consumers" fontSize="13px" lineHeight="25px" color="var(--white);" textAlign="center" float="center" borderRadius="5px" fontWeight="600" padding="8px 30px" background="var(--orange)" width="170px" display="flex" justifyContent="center" margin="10px auto 0">Download Now</CustomRouterLink>
          </FeaturesCardBottom>
        </FeaturesCard>
      )}
    </>
  );
};

export default Features;
