import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import AppOneList from "./AppOneList";
import AppOneView from "./AppOneView";

export const AppOne = ({ match }) => {
  return (
    <>
      <Link to={`${match.url}`}> Table list</Link>
      <Link to={`${match.url}/view`}> View</Link>
      <Switch>
        <Route exact path={`${match.url}`} component={AppOneList} />
        <Route exact path={`${match.url}/view`} component={AppOneView} />
      </Switch>
    </>
  );
};
