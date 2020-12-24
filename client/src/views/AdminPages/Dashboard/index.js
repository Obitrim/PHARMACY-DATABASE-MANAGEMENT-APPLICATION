import React from 'react';
import { Link } from 'react-router-dom';

import './Dashboard.css';
import Dash from '../../../components/Dash';
import BaseTable from '../../../components/BaseTable';

const Index = (props) => {
  return (
    <>
    	<h1 className="View__Heading">Dashboard</h1>
    	<section className="Dashboard__Section Dashboard__Dashes">
    		<Dash title="Total Sales" value="$4,500"/>
    		<Dash title="Total Reports" value="30"/>
    		<Dash title="Drugs near expiry" value="$400"/>
    		<Dash title="Drugs out of stock" value="53"/>
    	</section>
    	<section className="Dashboard__Section">
       <h2 className="Section__Heading">Sales Graph</h2> 
       <div className="Dashboard__SalesGraph"></div>
      </section>
    	<section className="Dashboard__Section Dashboard__RecentOrders">
        <h2 className="Section__Heading">
          Recent Orders 
          <Link to="/admin/orders" className="Dashboard__SeeAll">See All</Link> 
        </h2>
    		<BaseTable 
          headings={['Drug Name', 'Description', 'Date']}
          >
          <tr>
              <td>Paracetamol</td>
              <td>I feel notious whenever i take this drug</td>
              <td>24/12/2020</td>
          </tr>
          <tr>
              <td>Paracetamol</td>
              <td>I feel notious whenever i take this drug</td>
              <td>24/12/2020</td>
          </tr>
          <tr>
              <td>Paracetamol</td>
              <td>I feel notious whenever i take this drug</td>
              <td>24/12/2020</td>
          </tr>
          <tr>
              <td>Paracetamol</td>
              <td>I feel notious whenever i take this drug</td>
              <td>24/12/2020</td>
          </tr>
          <tr>
              <td>Paracetamol</td>
              <td>I feel notious whenever i take this drug</td>
              <td>24/12/2020</td>
          </tr>
        </BaseTable>
    	</section>
    </>
  )
}

export default Index;