import React from "react";
import Routes from "./Router/index";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./Router/history";


function App() {
  return (
    <Router history={history}>
      <Routes history={history} />
    </Router>
  );
}

export default App;
