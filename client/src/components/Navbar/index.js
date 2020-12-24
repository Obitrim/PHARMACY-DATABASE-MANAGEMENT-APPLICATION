import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import BlockIcon from '@material-ui/icons/Block';
import BusinessIcon from '@material-ui/icons/Business';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutline';

import './Navbar.css';
import { StoreContext } from '../../store';
import CollapsibleCard from '../CollapsibleCard';

const Index = (props) => {
  const { store, dispatch } = useContext(StoreContext);

  useEffect(() => {
    document.documentElement.addEventListener('click', closeNavbar);
    return () => {
      document.documentElement.removeEventListener('click', closeNavbar);
    }
  }, []);

  function closeNavbar(evt) {
    evt.preventDefault();
    if (!evt.target.matches('.Navbar')) {
      dispatch({ type: 'TOGGLE_NAVBAR', show: false });
    }
  }

  return (
    <nav className={`Navbar ${store.navOpen && 'Navbar__Show'}`}>
      <a href="#" onClick={closeNavbar} id="Cancel__Icon">
        <CancelIcon/>
      </a>
    	<NavLink to="/admin" className="Navbar__Item" activeClassName="Active" exact>Dashboard</NavLink>
    	<NavLink to="/admin/drugs" className="Navbar__Item" activeClassName="Active">Drugs</NavLink>
      <NavLink to="/admin/orders" className="Navbar__Item" activeClassName="Active">Orders</NavLink>
    	<CollapsibleCard title="Stocks">
    		<NavLink to="/admin/stock/add" className="Navbar__Item" activeClassName="Active">
    			<AddIcon className="Navbar__Icon"/>
    			Add
    		</NavLink>
    		<NavLink to="/admin/stock/remove" className="Navbar__Item" activeClassName="Active">
    			<RemoveIcon className="Navbar__Icon"/>
    			Remove
    		</NavLink>
    		<NavLink to="/admin/stock/near-expiry" className="Navbar__Item" activeClassName="Active">
    			<BlockIcon className="Navbar__Icon"/>
    			Near Expiry
    		</NavLink>
    		<NavLink to="/admin/stock/manufacturers" className="Navbar__Item" activeClassName="Active">
    			<BusinessIcon className="Navbar__Icon"/>
    			Manufacturers
    		</NavLink>
    	</CollapsibleCard>
    	<NavLink to="/admin/reports" className="Navbar__Item" activeClassName="Active">Reports</NavLink>
    	<NavLink to="/admin/receipts" className="Navbar__Item" activeClassName="Active">Receipts</NavLink>
    </nav>
  )
}

export default Index;