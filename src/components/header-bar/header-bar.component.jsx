import React from 'react';
import './header-bar.styles.scss';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo.component';
import { ReactComponent as UserIcon } from '../../assets/user-solid.svg';

const HeaderBar = () => {
  const menuItems = ['home', 'interests', 'skills'];

  return (
    <header className="header-bar">

    <Logo width="125px" />

    <nav className="nav-bar">
        {
          menuItems.map(item => (
            <span className="nav-item" key={item}>
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
