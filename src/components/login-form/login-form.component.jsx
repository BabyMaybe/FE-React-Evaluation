import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fakeAuthenticate } from '../../utilities/utilities';
import { userLoggedIn } from '../../redux/authentication.slice';

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

  // Simulate a fake login attempt
  const onLoginAttempt = e => {
    e.preventDefault();

    // Clear any previous error messages
    setUsernameValidationMsg('');
    setPasswordValidationMsg('');

    // Simulate hashing password using this SUPER SECURE hashing function I made so we don't send plaintext passwords out of our app
    const hashedPassword = `hashed${password}`;

    // Build a fake simplified request object
    const request = {
      username,
      password: hashedPassword,
    };

    fakeAuthenticate(request).then(user => {
      // store user in store
      dispatch(userLoggedIn(user.name));
      // redirect to home page
      history.push('/home');
    })
      .catch(error => {
        // Set custom error messages based on error type sent back from "server"
        if (error.name === 'UsernameException') {
          setUsernameValidationMsg(error.message);
        }
        if (error.name === 'PasswordException') {
          setPasswordValidationMsg(error.message);
        }
      });
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
