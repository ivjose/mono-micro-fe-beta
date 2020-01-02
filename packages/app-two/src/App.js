import React from "react";
import { Link, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history }) {
  console.log(window);

  return (
    <Router history={history || defaultHistory}>
      <div className="App">
        <header className="App-header">
          <h1>App Two</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/app-one">App One</Link>
          <br />
          <Link to="/app-one/view">App View</Link>
        </header>
      </div>
    </Router>
  );
}

export default App;
