import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './RouterView.css';
import DrugsView from '../../views/Drugs';
import Dashboard from '../../views/Dashboard';
import ReportsView from '../../views/Reports';
import ReceiptsView from '../../views/Receipts';
import AddStockView from '../../views/Stock/Add.js';
import RemoveStockView from '../../views/Stock/Remove.js';
import NearExpiryView from '../../views/Stock/NearExpiry.js';
import ManufacturersView from '../../views/Stock/Manufacturers.js';

const Index = (props) => {
  return (
    <div className="RouterView">
    	<Switch>
    		<Route path="/admin" exact component={Dashboard}/>
    		<Route path="/admin/drugs" component={DrugsView}/>
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