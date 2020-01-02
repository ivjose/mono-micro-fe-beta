import React from "react";
import { Link } from "react-router-dom";

const AppOneList = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App One List</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/app-one/view"> View</Link>
      </header>
    </div>
  );
};

export default AppOneList;
