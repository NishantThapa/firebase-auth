import React, { useState, useEffect } from "react";
import Routes from "./Router/index";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./Router/history";
import { auth } from "./firebase/firebase.utils";
import { setCookie } from "./utils";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCookie("token", user ? user.refreshToken : "");
      if(user){
        history.push("/home");
      }else{
        history.push("/login")
      }
    });
  }, []);
  
  return (
    <Router history={history}>
      <Routes history={history} />
    </Router>
  );
}

export default App;
