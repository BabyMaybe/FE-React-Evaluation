import React from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../../redux/authentication.slice';

import './logout.styles.scss';

const Logout = ({ open }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = async e => {
    e.stopPropagation();
    const response = await dispatch(logoutUser());
    if (!response.error) {
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
