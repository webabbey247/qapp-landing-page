import React, { Fragment } from "react";
import styled from "styled-components";
import {
  ContentSection,
  ContentBankSection,
  MerchantSection,
  ContentVideoContainer,
  ContentVideoPlaceholder,
  ContentIconHolder,
  ContentIcon,
  ContentDescription,
  ContentCta,
  ContentContainer,
  ContentBackIcon,
  ContentSearchForm,
  ContentSearchFormContainer,
  SearchInput,
  SearchIconHolder,
  ContentBankList,
  ContentBankChild,
  ContentBankChildLTR,
  ContentBankLogo,
  ContentBankChildRTL
} from "./ContentStyles";
import { Container } from "../../globalStyles";
import { MFIForm, MerchantForm } from "components/Form";
import { Content2Column2, ContentFullColumn, ContentRow, CustomDiv, GeneralMdText, GeneralSmText } from "styles/GlobalCss";
import { BiArrowBack, BiSearch, BiCaretRight } from "react-icons/bi";
import { myBankIcon, gtbIcon, kudaIcon, bankPlaceholder } from "assets/images";


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

      {pageType === "mybanks" && (
        <ContentBankSection>
          <ContentContainer>

            <ContentRow>

              <ContentFullColumn>
                <ContentBackIcon>
                  <BiArrowBack size="28" color="var(--icon-color)" />
                </ContentBackIcon>
              </ContentFullColumn>

              <ContentFullColumn>
                <GeneralMdText textAlign="center" color="var(--orange)" fontSize="30px" lineHeight="40px" fontWeight="700" textTransform="unset">
                  List of Financial Institution you bank with
                </GeneralMdText>

                <ContentSearchForm>
                  <ContentSearchFormContainer>
                    <SearchInput
                      name='search'
                      type='text'
                      placeholder='Search'
                    />
                    <SearchIconHolder>
                      <BiSearch color="#292D32" size='28' strokeWidth="0" />
                    </SearchIconHolder>
                  </ContentSearchFormContainer>
                </ContentSearchForm>

                <ContentBankList>
                  <ContentSearchFormContainer>
                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={myBankIcon} alt="First bank" />
                        <GeneralMdText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">First bank</GeneralMdText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>

                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={gtbIcon} alt="Guaranty Trust Bank" />
                        <GeneralMdText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">Guaranty Trust Bank</GeneralMdText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>
                  </ContentSearchFormContainer>
                </ContentBankList>
              </ContentFullColumn>
            </ContentRow>
          </ContentContainer>
        </ContentBankSection>
      )}


{pageType === "onboarded" && (
        <ContentBankSection>
          <ContentContainer>

            <ContentRow>

              <ContentFullColumn>
                <ContentBackIcon>
                  <BiArrowBack size="28" color="var(--icon-color)" />
                </ContentBackIcon>
              </ContentFullColumn>

              <ContentFullColumn>
                <GeneralMdText textAlign="center" color="var(--orange)" fontSize="30px" lineHeight="40px" fontWeight="700" textTransform="unset">
                Bank with other Financial Institution
                </GeneralMdText>

                <ContentSearchForm>
                  <ContentSearchFormContainer>
                    <SearchInput
                      name='search'
                      type='text'
                      placeholder='Search'
                    />
                    <SearchIconHolder>
                      <BiSearch color="#292D32" size='28' strokeWidth="0" />
                    </SearchIconHolder>
                  </ContentSearchFormContainer>
                </ContentSearchForm>

                <ContentBankList>
                  <ContentSearchFormContainer>
                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={bankPlaceholder} alt="Chase MFB" />
                        <GeneralMdText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">Chase MFB</GeneralMdText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>

                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={kudaIcon} alt="Kuda MFB" />
                        <GeneralMdText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">Kuda MFB</GeneralMdText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>

                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={bankPlaceholder} alt="Tower Microfinance" />
                        <GeneralMdText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">Tower Microfinance</GeneralMdText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>


                  </ContentSearchFormContainer>
                </ContentBankList>
              </ContentFullColumn>
            </ContentRow>
          </ContentContainer>
        </ContentBankSection>
      )}


    </Fragment>
  );
};

export default Content;
