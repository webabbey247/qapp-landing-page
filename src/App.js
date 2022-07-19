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
import RequestDemo from "./pages/RequestDemo";
import "./styles/normalize.css";


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
          path='/financial-institutions/request-demo'
          exact
          component={FinancialInstitutions}
        />
        <Route path='/onboarding/merchants' exact component={Merchants} />
        <Route path='/onboarding/consumers' exact component={Consumers} />
        <Route path='/enquiry/request-demo' exact component={RequestDemo} />


      </Switch>
    </Router>
  );
}

export default App;
