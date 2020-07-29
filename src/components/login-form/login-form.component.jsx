import React, { useState } from 'react';
import NiInput from '../ni-input/ni-input.component';
import NiButton from '../ni-button/ni-button.component';
import './login-form.styles.scss';
  // Setup state using useState hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameValidationMsg, setUsernameValidationMsg] = useState('');
  const [passwordValidationMsg, setPasswordValidationMsg] = useState('');
  // Keep state in sync with user input
  const onUsernameChanged = e => setUsername(e.target.value);
  const onPasswordChanged = e => setPassword(e.target.value);

const LoginForm = () => (
  <div className="login-form">
    <form className="login-form">
    <h2 className="form-header">Login to Our Magic Portal</h2>
      <NiInput type="text" placeholder="Username" name="username" id="username" validationMsg={usernameValidationMsg} handleChange={onUsernameChanged} autoComplete="username" />
      <NiInput type="password" placeholder="Password" name="password" id="password" validationMsg={passwordValidationMsg} handleChange={onPasswordChanged} autoComplete="password" />
      <NiButton onClick={onLoginAttempt} disabled={!canSubmit}>LOGIN</NiButton>
    </form>
);

export default LoginForm;
