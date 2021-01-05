import React from 'react';
import PropTypes from 'prop-types';

import './ManufacturerCard.css';

const Index = ({ name, phone, drug, email}) => {
  return (
    <div className="ManufacturerCard">
    	<div>
    		<h2 className="Manufacturer__Label TWarning">Manufacturer's name</h2>
    		<p className="Manufacturer__Value">{name}</p>
    	</div>
    	<div>
    		<h2 className="Manufacturer__Label TWarning">Phone</h2>
    		<p className="Manufacturer__Value">{phone}</p>
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
	phone: PropTypes.string,
	drug: PropTypes.string,
	email: PropTypes.string,
};

Index.defaultProps = {
	name: 'Manufacturer\'s name',
	phone: 'phone',
	drug: 'Name of drug',
	email: 'domain@gmail.com'
};

export default Index;