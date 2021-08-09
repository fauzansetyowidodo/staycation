import LandingPage from "pages/LandingPage";
import ExampleIN from "pages/ExampleIN";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../src/assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/example-in" component={ExampleIN} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
