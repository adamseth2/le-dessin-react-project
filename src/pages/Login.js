import React from "react";
import "../scss/pages/Login.scss";

import Nav from "../components/Nav";

import LoginTitle from "../components/LoginTitle";
import LoginInput from "../components/LoginInput";

function Login() {
  return (
    <React.Fragment>
      <Nav />
      <div id="login">
        <LoginTitle />
        <LoginInput />
      </div>
    </React.Fragment>
  );
}

export default Login;
