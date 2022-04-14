import React from "react";
import styled from "styled-components";
//Components
import {Header, Footer} from "../components";

const PageContent = styled.main`
  width: 100%;
  padding: 0 !important;
  margin-right: auto;
  margin-left: auto;
`;

const PageLayout = ({children}) => {
  return (
    <>
      <Header />
      <PageContent>{children}</PageContent>
      <Footer />
    </>
  );
};

export default PageLayout;
