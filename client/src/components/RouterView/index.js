import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './RouterView.css';
// Customer views
import HomeView from '../../views/Home';
// Admin views
import DrugsView from '../../views/AdminPages/Drugs';
import OrdersView from '../../views/AdminPages/Orders';
import Dashboard from '../../views/AdminPages/Dashboard';
import ReportsView from '../../views/AdminPages/Reports';
import ReceiptsView from '../../views/AdminPages/Receipts';
import AddStockView from '../../views/AdminPages/Stock/Add.js';
import RemoveStockView from '../../views/AdminPages/Stock/Remove.js';
import NearExpiryView from '../../views/AdminPages/Stock/NearExpiry.js';
import ManufacturersView from '../../views/AdminPages/Stock/Manufacturers.js';

const Index = (props) => {
  return (
    <div className="RouterView">
    	<Switch>
            <Route path="/" exact component={HomeView}/>
    		<Route path="/admin" exact component={Dashboard}/>
    		<Route path="/admin/drugs" component={DrugsView}/>
            <Route path="/admin/orders" component={OrdersView}/>
    		<Route path="/admin/reports" component={ReportsView}/>
    		<Route path="/admin/receipts" component={ReceiptsView}/>
    		<Route path="/admin/stock/add" component={AddStockView}/>
    		<Route path="/admin/stock/remove" component={RemoveStockView}/>
    		<Route path="/admin/stock/near-expiry" component={NearExpiryView}/>
    		<Route path="/admin/stock/manufacturers" component={ManufacturersView}/>
    	</Switch>
    </div>
  )
}

export default Index;