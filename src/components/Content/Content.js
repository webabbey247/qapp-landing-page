import React, {Fragment} from "react";
import {
  ContentSection,
  ContentHeading,
  ContentIconHolder,
  ContentIcon,
  ContentDescription,
  ContentCta,
} from "./ContentStyles";
import {Container} from "../../globalStyles";
import BankRequestDemoForm from "../Form/BankRequestDemoForm";

import {consumerLogo, merchantLogo, mfiLogo} from "../../common/images";

const Content = ({pageType}) => {
  return (
    <Fragment>
      {pageType === "finance" && (
        <ContentSection>
          <Container>
            <ContentHeading>Financial Institutions</ContentHeading>
            <ContentIconHolder>
              <ContentIcon src={mfiLogo} alt='Financial Institutions' />
            </ContentIconHolder>
            <ContentDescription>
              QAPP unifies all the banking APPs into one *SUPER APP* and also
              gives room for some MFIs that do not have an APP for their
              institutions to create their and manage it themselves for the
              benefit of their business and comfort of their customers.
            </ContentDescription>
            <ContentCta to='/enquiry/request-demo'>Request A Demo</ContentCta>
          </Container>
        </ContentSection>
      )}

      {pageType === "merchant" && (
        <ContentSection>
          <Container>
            <ContentHeading>Merchants</ContentHeading>
            <ContentIconHolder>
              <ContentIcon src={merchantLogo} alt='Merchants' />
            </ContentIconHolder>
            <ContentDescription>
              QAPP makes payment of services seamless and effortless as
              customers would be able to make payments from any of his/her bank
              account using the QAPP universal APP either by bank transfer or QR
              Code.
            </ContentDescription>
            <ContentCta to='/enquiry/request-demo'>Request A Demo</ContentCta>
          </Container>
        </ContentSection>
      )}

      {pageType === "consumer" && (
        <ContentSection>
          <Container>
            <ContentHeading>Consumers</ContentHeading>
            <ContentIconHolder>
              <ContentIcon src={consumerLogo} alt='Consumers' />
            </ContentIconHolder>
            <ContentDescription>
              This app is termed the “super app” to easily explain the quality,
              variety and super features
            </ContentDescription>
            <ContentCta to='/enquiry/request-demo'>Request A Demo</ContentCta>
          </Container>
        </ContentSection>
      )}

      {pageType === "demo" && (
        <ContentSection>
          <Container>
            <ContentHeading>Schedule A Demo</ContentHeading>
            <ContentIconHolder>
              <ContentIcon src={mfiLogo} alt='Schedule a demo' />
            </ContentIconHolder>
            <BankRequestDemoForm />
          </Container>
        </ContentSection>
      )}

      {pageType === "success" && (
        <ContentSection>
          <Container>
            <ContentHeading>Schedule A Demo</ContentHeading>
            <ContentIconHolder>
              <ContentIcon src={mfiLogo} alt='Financial Institutions' />
            </ContentIconHolder>
            <ContentHeading>Congratulations Ellem Kuti!</ContentHeading>
            <ContentDescription>
              Your request for a demo has been scheduled for May 1, 2022 at 4pm.
            </ContentDescription>
            <ContentCta to='/enquiry/request-demo'>Request A Demo</ContentCta>
          </Container>
        </ContentSection>
      )}
    </Fragment>
  );
};

export default Content;
