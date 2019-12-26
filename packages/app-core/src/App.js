import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppHeader from "./AppHeader";
import MicroFrontend from "./MicroFrontend";

const { REACT_APP_ONE, REACT_APP_TWO } = process.env;

const AppOne = ({ history }) => (
  <MicroFrontend history={history} host={REACT_APP_ONE} name="AppOne" />
);
const AppTwo = ({ history }) => (
  <MicroFrontend history={history} host={REACT_APP_TWO} name="AppTwo" />
);


const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={AppOne} />
        <Route exact path="/app-two" component={AppTwo} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
