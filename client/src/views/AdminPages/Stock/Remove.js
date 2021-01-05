import React, { useState, useContext } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import './Remove.css';
import { StoreContext } from '../../../store';
import SearchBox from '../../../components/SearchBox';
import BaseTable from '../../../components/BaseTable';

const Remove = (props) => {
  const [searchKey, setSearchKey] = useState("");
  const { store } = useContext(StoreContext);
  /**
   *
   * filters drugs based on searchKey
   *
   * @returns {Array} drugs that match searchKey
   */
  
  function getFilteredDrugs() {
    return store.drugs.filter(drug => {
      return new RegExp(`${searchKey}`, 'i').test(drug.name) 
             || new RegExp(`${searchKey}`, 'i').test(drug.manufacturer) 
             || new RegExp(`${searchKey}`, 'i').test(drug.FDANumber);
    })
  }

  let filteredDrugs = getFilteredDrugs();
  let drugRowsTemplate = filteredDrugs.map((drug, index) => (
    <tr key={drug.name + index}>
      <td>{drug.name}</td>
      <td>{drug.FDANumber}</td>
      <td>{drug.manufacturer}</td>
      <td>{drug.adminMethod}</td>
      <td>{drug.quantity}</td>
      <td>{drug.expirationDate}</td>
      <td>
        <a href="#" className="Drugs__ActionIcon">
          <DeleteIcon/>
        </a>
      </td>
    </tr>
  ));

  return (
    <>
    	<h1 className="View__Heading">Remove record</h1>

    	<div className="RemoveDrug__Filterbox">
    		<SearchBox 
	    		onFilterChanged={evt => setSearchKey(evt.target.value)}
	    		placeholder="Search by name, manufacturer or FDA number"
	    		isFilter
	    	/>
    		<span className="Drugs__Filterbox__PageLabel">1 of 10 pages</span>
    	</div>

    	<section className="Drugs__TableSection">
    		<BaseTable 
          		headings={[
	          	'Product Name', 'FDA number', 'Manufacturer', 'Administration method', 'Stock Quantity', 'Expiration Date', 'Action'
	          	]}
          	>
            {filteredDrugs.length === 0
              ? <>
                  <tr>
                    <td>No result(s) found for <q><em>{searchKey}</em></q></td>
                  </tr>
                </>
              : drugRowsTemplate }
        </BaseTable>
    	</section>

      <div className="Drugs__PaginationBtns">
      	<a href="#" className="Drugs__PaginationBtn">
      		<ChevronLeftIcon/>
      	</a>
      	<a href="#" className="Drugs__PaginationBtn Drugs__PaginationBtn--Next">
      		<ChevronRightIcon/>
      	</a>
      </div>
    </>
  )
}

export default Remove;