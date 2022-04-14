import React from "react";
import GlobalStyle from "./globalStyles";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//Components
import Homepage from "./pages/Homepage";
import FinancialInstitutions from "./pages/FinancialInstitutions";
import Merchants from "./pages/Merchants";
import Consumers from "./pages/Consumers";
import RequestDemo from "./pages/RequestDemo";
import "./styles/normalize.css";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route
          path='/financial-institutions'
          exact
          component={FinancialInstitutions}
        />
        <Route path='/merchants' exact component={Merchants} />
        <Route path='/consumers' exact component={Consumers} />
        <Route path='/enquiry/request-demo' exact component={RequestDemo} />
      </Switch>
    </Router>
  );
}

export default App;
