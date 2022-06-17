import React, {Fragment} from "react";
import {
  ContentSection,
  ContentHeading,
  ContentIconHolder,
  ContentIcon,
  ContentDescription,
  ContentCta,
  ContentContainer,
} from "./ContentStyles";
import {Container} from "../../globalStyles";
import { MFIForm, MerchantForm } from "components/Form";

import {consumerLogo} from "../../common/images";

const Content = ({pageType}) => {
  return (
    <Fragment>
      {pageType === "finance" && (
        <ContentSection>
          <ContentContainer>
            <MFIForm />
          </ContentContainer>
        </ContentSection>
      )}

      {pageType === "merchant" && (
        <ContentSection>
        <ContentContainer>
          <MerchantForm />
        </ContentContainer>
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
            <ContentCta to='/'>Download Now</ContentCta>
          </Container>
        </ContentSection>
      )}

      
    </Fragment>
  );
};

export default Content;
