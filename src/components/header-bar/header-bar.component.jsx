import React from 'react';
import './header-bar.styles.scss';
import Logo from '../logo/logo.component';
import { ReactComponent as UserIcon } from '../../assets/user-solid.svg';

const HeaderBar = () => (
  <div className="header-bar">
    <Logo width="125px" />
    <nav className="nav-bar">
      <span className="nav-item selected">
        <span>Home</span>
      </span>

      <span className="nav-item">
        <span>Navigation 2</span>
      </span>

      <span className="nav-item">
        <span>Navigation 3</span>
      </span>
      <div className="nav-item username">

        <UserIcon className="user-icon" />
        <span>Username</span>
      </div>
    </nav>
  </div>
);

export default HeaderBar;
