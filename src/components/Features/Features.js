import React from "react";
import {
  FeaturesCard,
  FeaturesCardTop,
  FeaturesCardIconHolder,
  FeaturesCardIcon,
  FeaturesCardHeading,
  FeaturesCardBottom,
  FeatureTextInfo,
  FeaturesCta,
} from "./FeaturesStyles";

const Features = ({pageType}) => {
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
            <FeaturesCardHeading>Financial Institutions</FeaturesCardHeading>
          </FeaturesCardTop>
          <FeaturesCardBottom>
            <FeatureTextInfo>
              This portal connects all the financial institutions across African
              countries which enables the customers manage all their bank
              accounts transactions and history in one APP.
            </FeatureTextInfo>
            <FeaturesCta to='/financial-institutions'>Read More</FeaturesCta>
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
            <FeaturesCardHeading>Merchants</FeaturesCardHeading>
          </FeaturesCardTop>
          <FeaturesCardBottom>
            <FeatureTextInfo>
              This portal is for large and small scaled business owners,
              institutions or organizations to come leverage FREE OF CHARGE on
              our millions of already existing and active customer data base
              across African countries.
            </FeatureTextInfo>
            <FeaturesCta to='/merchants'>Read More</FeaturesCta>
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
            <FeaturesCardHeading>Consumers</FeaturesCardHeading>
          </FeaturesCardTop>
          <FeaturesCardBottom>
            <FeatureTextInfo>
              This portal is termed the “super app” to easily explain the
              quality, variety and super features yet in its easiest way.
            </FeatureTextInfo>
            <FeaturesCta to='/consumers'>Get App</FeaturesCta>
          </FeaturesCardBottom>
        </FeaturesCard>
      )}
    </>
  );
};

export default Features;
