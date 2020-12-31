import React from 'react';
import PropTypes from 'prop-types';

import './ManufacturerCard.css';

const Index = ({ name, contact, drug, email}) => {
  return (
    <div className="ManufacturerCard">
    	<div>
    		<h2 className="Manufacturer__Label TWarning">Manufacturer's name</h2>
    		<p className="Manufacturer__Value">{name}</p>
    	</div>
    	<div>
    		<h2 className="Manufacturer__Label TWarning">Contact</h2>
    		<p className="Manufacturer__Value">{contact}</p>
    	</div>
    	<div>
    		<h2 className="Manufacturer__Label TWarning">Drug Name</h2>
    		<p className="Manufacturer__Value">{drug}</p>
    	</div>
    	<div>
    		<h2 className="Manufacturer__Label TWarning">Email</h2>
    		<p className="Manufacturer__Value">{email}</p>
    	</div>
    </div>
  )
}

Index.propTypes = {
	name: PropTypes.string,
	contact: PropTypes.string,
	drug: PropTypes.string,
	email: PropTypes.string,
};

Index.defaultProps = {
	name: 'Manufacturer\'s name',
	contact: 'Contact',
	drug: 'Name of drug',
	email: 'domain@gmail.com'
};

export default Index;