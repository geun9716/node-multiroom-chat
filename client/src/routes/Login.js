import React from 'react';
import {Menu} from '../components';


const Login = () => {


  return (
    <div>
      <Menu />
      <h1>로그인</h1>
      <ul>
        <li class="login page">
          <div class="form">
            <h3 class="title">What's your nickname?</h3>
            <input class="usernameInput" type="text" maxlength="14" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Login;