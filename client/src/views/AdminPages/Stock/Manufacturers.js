import React, { useState, useContext } from 'react';
import PlusIcon from '@material-ui/icons/Add';

import './Manufacturers.css';
import { StoreContext } from '../../../store';
import FilterBox from '../../../components/SearchBox';
import ManufacturerCard from '../../../components/ManufacturerCard';

const Manufacturers = (props) => {
    const [filter, setFilter] = useState('');
    const { store } = useContext(StoreContext);

    function getFilteredManufacturersData() {
        return store.manufacturers.filter(manufacturer => {
            let { name, drug} = manufacturer;
            let filterRegex = new RegExp(`${filter}`, 'i');
            return filterRegex.test(name) || filterRegex.test(drug);
        });
    }

    let filteredManufacturers = getFilteredManufacturersData();

    return (
        <>
        	<h1 className="View__Heading View__Heading--Manufacturer">Manufacturers</h1>
        	<FilterBox 
                onFilterChanged={evt => setFilter(evt.target.value)} 
                placeholder="Search by manufacturer's name or drug name"
                isFilter
            />
        	<div className="Manufacturers__Row">
                {filteredManufacturers.map((manufacturer, index) => (
        		  <ManufacturerCard
                    key={manufacturer.name + index}
                    name={manufacturer.name}
                    drug={manufacturer.drug}
                    phone={manufacturer.phone}
                    email={manufacturer.email}
                    />
                    ))
                }
        	</div>
            <button type="button" className="Manufacturers__CreateNewBtn">
                <PlusIcon/>
                <span className="Manufacturers__CreateNewBtn__Text">Create New</span>
            </button>
        </>
    )
}

export default Manufacturers;