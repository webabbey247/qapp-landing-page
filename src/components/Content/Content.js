import React, { Fragment } from "react";
import {
  ContentSection,
  MerchantSection,
  ContentVideoContainer,
  ContentVideoPlaceholder,
  ContentIconHolder,
  ContentIcon,
  ContentDescription,
  ContentCta,
  ContentContainer,
} from "./ContentStyles";
import { Container } from "../../globalStyles";
import { MFIForm, MerchantForm } from "components/Form";
import { Content2Column2, ContentFullColumn, ContentRow, CustomDiv, GeneralMdText, GeneralSmText } from "styles/GlobalCss";

// const video = require('../../assets/images/video-placeholder.png');
// const videoMP4 = require('../../assets/media/video-placeholder.mp4');


const Content = ({ pageType }) => {
  return (
    <Fragment>
      {pageType === "finance" && (
        <ContentSection>
          <ContentContainer>
            <ContentRow>
              <Content2Column2>
             <CustomDiv display="flex" flexDirection="column" padding="0 3rem 0 1.5rem">
             <GeneralMdText fontSize="24px" margin="0 0 10px" lineHeight="35px" textAlign="left" color="var(--orange)" textTransform="unset" fontWeight="600">See How it works</GeneralMdText>
              <ContentVideoContainer>
              {/* <video width="550" frameBorder="0" height="350" preload="none" autoPlay="true" loop="true" playsInline="" poster={video}>
                <source src={videoMP4} type="video/mp4" />
            </video> */}
              <iframe width="550" frameBorder="0" height="350" src="https://www.youtube.com/embed/pygGug3TCaI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </ContentVideoContainer>
             </CustomDiv>
              </Content2Column2>

              <Content2Column2>
                <MFIForm />
              </Content2Column2>
            </ContentRow>
          </ContentContainer>
        </ContentSection>
      )}

      {pageType === "merchant" && (
        <MerchantSection>
          <ContentContainer>
            <ContentRow>
              <Content2Column2>
             <CustomDiv display="flex" flexDirection="column" padding="0 3rem 0 1.5rem">
             <GeneralMdText fontSize="24px" margin="0 0 10px" lineHeight="35px" textAlign="left" color="var(--orange)" textTransform="unset" fontWeight="600">See How it works</GeneralMdText>
              <ContentVideoContainer>
              {/* <video width="550" frameBorder="0" height="350" preload="none" autoPlay="true" loop="true" playsInline="" poster={video}>
                <source src={videoMP4} type="video/mp4" />
            </video> */}
              <iframe width="550" frameBorder="0" height="350" src="https://www.youtube.com/embed/pygGug3TCaI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </ContentVideoContainer>
              <GeneralMdText color="var(--orange)" margin="1rem 0 0.6rem" fontSize="18px" lineHeight="29.05px" fontWeight="600" textAlign="left" textTransform="unset">
           Dispatch Merchant: How it works
            </GeneralMdText>

            <GeneralMdText color="var(--primary)" margin="0" fontSize="18px" lineHeight="29.05px" fontWeight="600" textAlign="left" textTransform="unset">
           Ecommerce Merchant: How it works
            </GeneralMdText>
             </CustomDiv>
              </Content2Column2>

              <Content2Column2>
              <MerchantForm />
              </Content2Column2>
            </ContentRow>
          </ContentContainer>
          {/* <ContentContainer>
          <ContentRow>
            
              <Content2Column2>
              <GeneralMdText margin="0.6rem 0" fontSize="24px" lineHeight="39px" textAlign="left" color="var(--orange)" textTransform="capitalize" fontWeight="600">
                How it works
                </GeneralMdText>

              <ContentVideoContainer>
                <ContentVideoPlaceholder />
              </ContentVideoContainer>

              <GeneralMdText color="var(--orange)" margin="1rem 0 0.6rem" fontSize="18px" lineHeight="29.05px" fontWeight="600" textAlign="left" textTransform="unset">
           Dispatch Merchant: How it works
            </GeneralMdText>

            <GeneralMdText color="var(--primary)" margin="0" fontSize="18px" lineHeight="29.05px" fontWeight="600" textAlign="left" textTransform="unset">
           Ecommerce Merchant: How it works
            </GeneralMdText>

              </Content2Column2>
              <Content2Column2>
                <MerchantForm />
              </Content2Column2>
            </ContentRow>
          </ContentContainer> */}
        </MerchantSection>
      )}

      {pageType === "consumer" && (
        <ContentSection>
          <Container>
            {/* <ContentHeading>Consumers</ContentHeading> */}
            <ContentIconHolder>
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
