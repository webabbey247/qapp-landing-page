import React from "react";
import styled from "styled-components";
//Components
import {Header, Footer} from "../components";
import { homeBg } from "assets/images";

const PageContent = styled.main`
background: var(--primary);
  padding: 0 !important;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  background-image: url("${homeBg}");
  background-repeat: no-repeat;
  background-position: right;
  min-height: 100vh;
  background-size: contain;
`;

const PageLayout = ({children}) => {
  return (
    <>
      
      <PageContent>
      <Header />
      {children}
      <Footer />
      </PageContent>
     
    </>
  );
};

export default PageLayout;
