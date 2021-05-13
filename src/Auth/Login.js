import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {signInWithGoogle} from "../firebase/firebase.utils"

const Login = () => {
  //style
  const mb15 = {
    marginBottom: 15,
  };
  const dflex = {
    display: "flex",
  };
  const flexCenter = {
    justifyContent: "center",
  };
  const center = {
    ...dflex,
    ...flexCenter,
  };
  const heading = {
    ...center,
    ...mb15,
    fontSize: 20,
    fontWeight: 600,
  };
  const column = {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  };
  return (
    <div style={center}>
      <div style={{ width: "100%" }}>
        <div style={heading}>Firebase Auth App</div>
        <div style={column}>
          <div>
            <div style={mb15}>
              <div>Email</div>
              <TextField variant="outlined" size="small" />
            </div>
            <div style={mb15}>
              <div>Password</div>
              <TextField variant="outlined" size="small" />
            </div>
            <div style={center}>
              <Button variant="contained" color="secondary" onClick={()=>signInWithGoogle()}>
                SignIn with Google
              </Button>
            </div>
          </div>
          <div>
            <div style={mb15}>
              <div>Name</div>
              <TextField variant="outlined" size="small" />
            </div>
            <div style={mb15}>
              <div>Email</div>
              <TextField variant="outlined" size="small" />
            </div>
            <div style={mb15}>
              <div>Password</div>
              <TextField variant="outlined" size="small" />
            </div>
            <div style={center}>
              <Button variant="contained" color="secondary">
                SignUp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
