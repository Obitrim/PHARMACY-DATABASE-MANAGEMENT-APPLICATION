import React from 'react';
import './Dashboard.css';
import Dash from '../../../components/Dash';
import BaseTable from '../../../components/BaseTable';

const Index = (props) => {
  return (
    <>
    	<h1 className="Dashboard__Heading">Dashboard</h1>
    	<section className="Dashboard__Section Dashboard__Dashes">
    		<Dash title="Total Sales" value="$4,500"/>
    		<Dash title="Total Reports" value="30"/>
    		<Dash title="Drugs near expiry" value="$400"/>
    		<Dash title="Drugs out of stock" value="53"/>
    	</section>
    	<section className="Dashboard__Section">Graph Goes Here</section>
    	<section className="Dashboard__Section Dashboard__RecentOrders">
    		<BaseTable/>
    	</section>
    </>
  )
}

export default Index;