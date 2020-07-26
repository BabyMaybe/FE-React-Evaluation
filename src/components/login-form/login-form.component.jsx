import React from 'react';
import './login-form.styles.scss';

const LoginForm = () => (
  <div className="login-form">
    <h2 className="form-header">Login to Our Magic Portal</h2>
    <input className="ni-input" type="text" name="username" id="username" placeholder="Username" />
    <input className="ni-input" type="password" name="password" id="password" placeholder="Password" />
    <button className="ni-button" type="submit">LOGIN</button>
  </div>
);

export default LoginForm;
