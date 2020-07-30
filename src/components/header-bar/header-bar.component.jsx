import React from 'react';
import './header-bar.styles.scss';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../logo/logo.component';
import { ReactComponent as UserIcon } from '../../assets/user-solid.svg';

const HeaderBar = () => {
  const location = useLocation();

  const currentPath = location.pathname.substr(1);
  const menuItems = ['home', 'interests', 'skills'];

  return (
    <header className="header-bar">

    <Logo width="125px" />

    <nav className="nav-bar">
        {
          menuItems.map(item => (
            <span className={`nav-item ${currentPath === item ? 'selected' : ''}`} key={item}>
              <Link to={`/${item}`}>
                {item}
              </Link>
      </span>
          ))
        }

      <div className="nav-item username">
        <UserIcon className="user-icon" />
        <span>Username</span>
      </div>

    </nav>
    </header>
);

export default HeaderBar;
