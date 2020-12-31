import React from 'react';

import './Manufacturers.css';
import FilterBox from '../../../components/SearchBox';
import ManufacturerCard from '../../../components/ManufacturerCard';

const Manufacturers = (props) => {
  return (
    <>
    	<h1 className="View__Heading View__Heading--Manufacturer">Manufacturers</h1>
    	<FilterBox isFilter/>
    	<div className="Manufacturers__Row">
    		<ManufacturerCard/>
    		<ManufacturerCard/>
    		<ManufacturerCard/>
    		<ManufacturerCard/>
    		<ManufacturerCard/>
    		<ManufacturerCard/>
    		<ManufacturerCard/>
    	</div>
    </>
  )
}

export default Manufacturers;