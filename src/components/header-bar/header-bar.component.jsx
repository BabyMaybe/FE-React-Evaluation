import React, { useState } from 'react';
import './header-bar.styles.scss';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../logo/logo.component';
import { ReactComponent as UserIcon } from '../../assets/user-solid.svg';
import Logout from '../logout/logout.component';

const HeaderBar = () => {
  const location = useLocation();
  const currentUser = useSelector(state => state.authentication.currentUser);
  const [menuClosed, setMenuClosed] = useState(true);
  const [logoutOpened, setlogoutOpened] = useState(false);

  const currentPath = location.pathname.substr(1);
  const menuItems = ['home', 'interests', 'skills'];

  const menuToggle = () => {
    if (window.matchMedia('(max-width: 850px)').matches) {
      setMenuClosed(!menuClosed);
    }
  };

  const logoutToggle = () => {
    if (!window.matchMedia('(max-width: 850px)').matches) {
      setlogoutOpened(!logoutOpened);
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

        <div className={`nav-item username ${logoutOpened ? 'open' : ''}`} onClick={logoutToggle}>
          <UserIcon className="user-icon" />
          <Logout open={logoutOpened} />
          <span>
            {currentUser}
          </span>
        </div>

      </nav>
    </header>
  );
};

export default HeaderBar;
