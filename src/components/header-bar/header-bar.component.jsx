import React, { useState } from 'react';
import './header-bar.styles.scss';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../logo/logo.component';
import { ReactComponent as UserIcon } from '../../assets/user-solid.svg';

const HeaderBar = () => {
  const location = useLocation();
  const currentUser = useSelector(state => state.authentication.currentUser);
  const [menuClosed, setMenuClosed] = useState(true);

  const currentPath = location.pathname.substr(1);
  const menuItems = ['home', 'interests', 'skills'];

  const menuToggle = () => {
    if (window.matchMedia('(max-width: 850px)').matches) {
      setMenuClosed(!menuClosed);
    }
  };

  return (
    <header className={`header-bar ${menuClosed ? 'closed' : null}`} onClick={menuToggle}>

      <Logo width="125px" />

      <nav className="nav-bar">
        {
          menuItems.map(item => (
            <Link to={`/${item}`} className={`nav-item ${currentPath.includes(item) ? 'selected' : ''}`} key={item}>
              <span className="nav-item-text">
                {item}
              </span>
            </Link>
          ))
        }

        <div className="nav-item username">
          <UserIcon className="user-icon" />
          <span>
            {currentUser}
          </span>
        </div>

      </nav>
    </header>
  );
};

export default HeaderBar;
