import React from 'react';
import { Link } from 'react-router-dom'; 

const Index = (props) => {
  return (
    <div>
    	<h1>No page for customer</h1>
    	<p>Unfortunately, since group members aren't supporting, I'm handling the admin side first</p>
    	<Link to="/admin">Admin Page</Link>
    </div>
  )
}

export default Index;