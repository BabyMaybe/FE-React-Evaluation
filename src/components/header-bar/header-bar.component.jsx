import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logout from '../logout/logout.component';
import Logo from '../logo/logo.component';

import { ReactComponent as UserIcon } from '../../assets/user-solid.svg';

import './header-bar.styles.scss';

const HeaderBar = () => {
  // Static array to build menu from
  const menuItems = ['home', 'interests', 'skills'];

  const currentPath = useLocation().pathname.substr(1);

  const [menuClosed, setMenuClosed] = useState(true);
  const [logoutOpened, setlogoutOpened] = useState(false);

  const currentUser = useSelector(state => state.authentication.currentUser.username);

  // Opens and closes Hamburger Menu in Mobile view
  const menuToggle = () => {
    if (window.matchMedia('(max-width: 850px)').matches) {
      setMenuClosed(!menuClosed);
    }
  };

  // This wasn't in spec but I added a logout feature under the username
  // this function toggles a menu option for it in and out and only toggles
  // in desktop view
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
          // I set this up like this for simplicity, but a flaw of this approach is that it requires
          // the menu text and the path to be the same. A better way would probably be to have a configuration
          // object that includes both a text property and a path property
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
