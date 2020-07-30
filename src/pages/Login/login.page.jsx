import React from 'react';
import Logo from '../../components/logo/logo.component';
import LoginForm from '../../components/login-form/login-form.component';

import './login.styles.scss';

const LoginPage = () => (
  <div className="login-page">
    <div className="login-container">
      <Logo width="228px" />
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
