import React, {useState} from "react";
import {Content} from "../components";
import PageLayout from "../Layouts/PageLayout";
import { MerchantForm } from "components/Form";
import {
  ContentSection,
  ContentHeading,
  ContentIconHolder,
  ContentIcon,
} from "../components/Content/ContentStyles";


const Merchants = () => {
  return (
    <PageLayout>
      <Content pageType='merchant' />
    </PageLayout>
  );
};

export default Merchants;
