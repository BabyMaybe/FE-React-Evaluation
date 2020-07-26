import React from 'react';
import './login-form.styles.scss';

const LoginForm = () => (
  <div className="login-form">
    <h3 className="form-header">Login to Our Magic Portal</h3>
    <input class="ni-input" type="text" name="username" id="username" placeholder="Username"/>
    <input  class="ni-input" type="password" name="password" id="password" placeholder="Password"/>
    <button class="ni-button" type="submit">LOGIN</button>
  </div>
);


export default LoginForm;
