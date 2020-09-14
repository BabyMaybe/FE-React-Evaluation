import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../redux/authentication.slice';

import NiInput from '../ni-input/ni-input.component';
import NiButton from '../ni-button/ni-button.component';

import './login-form.styles.scss';

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // Setup state using useState hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameValidationMsg, setUsernameValidationMsg] = useState('');
  const [passwordValidationMsg, setPasswordValidationMsg] = useState('');

  // Keep state in sync with user input
  const onUsernameChanged = e => setUsername(e.target.value);
  const onPasswordChanged = e => setPassword(e.target.value);

  // Login using new backend
  const onLoginAttempt = async e => {
    e.preventDefault();

    // Clear any previous error messages
    setUsernameValidationMsg('');
    setPasswordValidationMsg('');

    // Build a fake simplified request object
    const request = {
      username,
      password,
    };

    const response = await dispatch(loginUser(request));

    if (response.error) {
      setUsernameValidationMsg(response.error.message);
      setPasswordValidationMsg(response.error.message);
    } else {
      history.push('/home');
    }
  };

  // Make sure both username and password are not empty before submitting request
  const canSubmit = username && password;

  return (
    <form className="login-form">
      <h2 className="form-header">Login to Our Magic Portal</h2>

      <NiInput type="text" placeholder="Username" name="username" id="username" validationMsg={usernameValidationMsg} handleChange={onUsernameChanged} autoComplete="username" />

      <NiInput type="password" placeholder="Password" name="password" id="password" validationMsg={passwordValidationMsg} handleChange={onPasswordChanged} autoComplete="password" />

      <NiButton onClick={onLoginAttempt} disabled={!canSubmit}>LOGIN</NiButton>
    </form>
  );
};

export default LoginForm;
