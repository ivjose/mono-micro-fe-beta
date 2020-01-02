import React from "react";
import { Link, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppOneList from "./container/AppOneList";
import AppOneView from "./container/AppOneView";
import "./App.css";

// const AppOneList = React.lazy(() => import("./container/AppOneList"));

const defaultHistory = createBrowserHistory();

function App({ history }) {
  console.log(window);

  return (
    <Router history={history || defaultHistory}>
      <React.Suspense fallback={<div>Liad</div>}>
        <Switch>
          <Route exact path="/app-one" component={AppOneList} />
          <Route exact path="/app-one/view" component={AppOneView} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
