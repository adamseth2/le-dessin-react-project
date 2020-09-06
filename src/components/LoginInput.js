import React from 'react';
import '../scss/LoginInput.scss';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

function LoginInput() {
  return (
    <div className='LoginInput'>
      <form action=''>
        <div className='input-container'>
          <input type='text' id='Username' required />
          <label htmlFor='Username'>Username</label>
        </div>
        <div className='input-container'>
          <input type='password' id='Password' required />
          <label htmlFor='Password'>Password</label>
        </div>
        <input type='submit' value='Log in' />
      </form>
      <Link to='/Guest'>
        <button className='log-in-as-guest-btn'>
          <i className='fa fa-user fa-2x log-in-icon'></i>
          <p>Log in as Guest</p>
        </button>
      </Link>
    </div>
  );
}

export default LoginInput;
