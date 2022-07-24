import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "styles/GlobalCss";
import { ToastContainer } from "react-toastify";

//Components
import Homepage from "./pages/Homepage";
import FinancialInstitutions from "./pages/FinancialInstitutions";
import Merchants from "./pages/Merchants";
import Consumers from "./pages/Consumers";
import MyBanks from "pages/MyBanks";
import OnboardedBanks from "pages/OnboardedBanks";
import "./styles/normalize.css";
import "./styles/responsive.css";


axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://qapp-bank-admin-auth.eu-west-1.elasticbeanstalk.com/api/v1";

function App() {
  return (
    <Router>
      <ToastContainer />
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route
          path='/financial-institutions/demo'
          exact
          component={FinancialInstitutions}
        />
        <Route path='/merchants/demo' exact component={Merchants} />
        <Route path='/onboarding/consumers' exact component={Consumers} />
        <Route path='/financial-institutions/my-banks' exact component={MyBanks} />
        <Route path='/financial-institutions/onboarded-banks' exact component={OnboardedBanks} />
      </Switch>
    </Router>
  );
}

export default App;
