import React from "react";
import styled from "styled-components";
import {Hero} from "../components";
import PageLayout from "../Layouts/PageLayout";

import {Section} from "../globalStyles";

import {Features} from "../components";
import { Content4Column4, ContentRow, SiteContainer } from "styles/GlobalCss";

export const FeaturesSection = styled(Section)`
  background: var(--secondary);
  backdrop-filter: blur(26px);
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeatureWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flexwrap: wrap;
  width: 100%;
  > * {
    flex: 1;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: none;
    flex-direction: column;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex: none;
    flex-direction: column;
  }
`;

const Homepage = () => {
  return (
    <PageLayout>
      <Hero />
      <FeaturesSection>
        <SiteContainer>
          <FeatureWrapper>
            <ContentRow>
              <Content4Column4>
              <Features pageType='finance' />
              </Content4Column4>
              <Content4Column4>
              <Features pageType='agent' />
              </Content4Column4>
              <Content4Column4>
              <Features pageType='merchant' />
              </Content4Column4>
              <Content4Column4>
              <Features pageType='consumer' />
              </Content4Column4>
            </ContentRow>
          </FeatureWrapper>
        </SiteContainer>
      </FeaturesSection>
    </PageLayout>
  );
};

export default Homepage;
