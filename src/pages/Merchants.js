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
import {Container} from "../globalStyles";
import {mfiLogo} from "../assets/images";


const Merchants = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <PageLayout>
      { showForm ? (
         <ContentSection>
         <Container>
           <ContentHeading>Schedule A Demo</ContentHeading>
           <ContentIconHolder>
             <ContentIcon src={mfiLogo} alt='Schedule a demo' />
           </ContentIconHolder>
           <MerchantForm />
         </Container>
       </ContentSection>
      ) : (
        <Content pageType='merchant' setShowForm={setShowForm} />
        )}
    </PageLayout>
  );
};

export default Merchants;
