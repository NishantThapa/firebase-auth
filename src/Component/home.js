import React from "react";
import { auth } from "../firebase/firebase.utils";

const home = (props) => {
  const handleLogout = () => {
    auth.signOut();
    props.history.push("/login");
  };
  return (
    <div>
      <span style={{fontSize: 20,marginRight: 10}}>FireBase Auth Successfull</span>
      <span onClick={() => handleLogout()} style={{fontWeight: 600,cursor:"pointer"}}>LOGOUT</span>
    </div>
  );
};

export default home;
