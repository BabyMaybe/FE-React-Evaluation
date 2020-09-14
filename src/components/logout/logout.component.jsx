import React from 'react';

import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/authentication.slice';

import './logout.styles.scss';
import { useHistory } from 'react-router-dom';

const Logout = ({ open }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = async e => {
    e.stopPropagation();
    dispatch(userLoggedOut());
    const response = await dispatch(logoutUser());
    console.log(response);
    if (response.error) {
    } else {
      history.push('/login');
    }
  };

  return (
    <div className={`logout ${open ? 'open' : ''}`}>
      <span className={`logout-text ${open ? 'open' : ''}`} onClick={logout}>
        Log Out
      </span>
    </div>
  );
};

export default Logout;
