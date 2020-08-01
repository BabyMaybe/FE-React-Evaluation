import React from 'react';

import { useDispatch } from 'react-redux';
import { userLoggedOut } from '../../redux/authentication.slice';

import './logout.styles.scss';

const Logout = ({ open }) => {
  const dispatch = useDispatch();

  const logout = e => {
    e.stopPropagation();
    dispatch(userLoggedOut());
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
