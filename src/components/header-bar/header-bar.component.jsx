import React from 'react';
import './header-bar.styles.scss';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo.component';
import { ReactComponent as UserIcon } from '../../assets/user-solid.svg';

const HeaderBar = () => (
    <header className="header-bar">
    <Logo width="125px" />
    <nav className="nav-bar">

      <span className="nav-item selected">
        <Link to="/">Home</Link>
      </span>

      <span className="nav-item">
        <Link to="/interests">Interests</Link>
      </span>

      <span className="nav-item">
        <Link to="/skills">Skills</Link>
      </span>

      <div className="nav-item username">
        <UserIcon className="user-icon" />
        <span>Username</span>
      </div>

    </nav>
    </header>
);

export default HeaderBar;
