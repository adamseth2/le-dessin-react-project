import React from 'react';
import '../scss/pages/Login.scss';

import LoginTitle from '../components/LoginTitle';
import LoginInput from '../components/LoginInput';

function Login() {
  return (
    <div id='login'>
      <LoginTitle />
      <LoginInput />
    </div>
  );
}

export default Login;
