import React, { useContext } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';

import { StoreContext } from '../../store';

const Index = (props) => {
  const { dispatch } = useContext(StoreContext);

  function toggleNavbar(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    dispatch({ type: 'TOGGLE_NAVBAR', show: true });
  }

  return (
    <header className="Header">
    	<a href="#" className="Header__MenuIcon" onClick={toggleNavbar}>
    		<MenuIcon/>
    	</a>
    	<strong className="Header__Name"><span className="Header__Phar">PHAR</span>MACY</strong>
    	<a href="#" className="Header__Notifications">
    		<NotificationsIcon/>
    		<span className="Header__NotificationsBadge">3</span>
    	</a>
    </header>
  )
}

export default Index;