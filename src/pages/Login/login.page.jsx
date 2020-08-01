import React from 'react';
import Logo from '../../components/logo/logo.component';
import LoginForm from '../../components/login-form/login-form.component';

import './login.styles.scss';

// This is the Login Page.
// It does what it says on the tin.
const LoginPage = () => (
  <div className="login-page">
    <div className="login-container">
      <Logo width="228px" />
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
