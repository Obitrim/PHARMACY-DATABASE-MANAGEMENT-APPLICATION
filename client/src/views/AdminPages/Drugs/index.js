import React, { useState, useContext } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import './Drugs.css';
import { StoreContext } from '../../../store';
import SearchBox from '../../../components/SearchBox';
import BaseTable from '../../../components/BaseTable';
import CustomSelect from '../../../components/CustomSelect';

const Index = (props) => {
  const { store } = useContext(StoreContext);
  const [filter, setFilter] = useState('all');
  const [searchKey, setSearchKey] = useState("");
  /**
   *
   * handles search through the search bar
   */
	function searchHandler(evt) {
		setSearchKey(evt.target.value);
	}
  /**
   *
   * Filters drugs based on the value of the selected 
   * value from the custom select box
   *
   * @returns {Array} drugs
   */
  function getFilteredDrugs() {
    let drugs = [...store.drugs];
    if (filter.toLowerCase() === 'finished') {
      drugs = store.drugs.filter(drug => drug.quantity === 0);

    } else if (filter.toLowerCase() === 'expired') {
      let todayInMilliSeconds = new Date().valueOf();

      drugs = store.drugs.filter(drug => {
        let expirationDateInYearMonthDay = getYearMonthDayFormat(drug.expirationDate);
        let expirationDateInMilliSeconds = new Date(expirationDateInYearMonthDay).valueOf();
        return todayInMilliSeconds > expirationDateInMilliSeconds;
      });
    }
    // Further filter drugs by the search key
    let drugNameRegex = new RegExp(`${searchKey}`, 'i');
    drugs = drugs.filter(drug => drugNameRegex.test(drug.name));

    return drugs;
  }

  /**
   *
   * formats date string in the format DD/MM/YYYY to YYYY/MM/DD
   *  
   * @returns {String} dateString of format YYYY/MM?DD
   */
  function getYearMonthDayFormat(dayYearMonthDateString) {
    return dayYearMonthDateString.split('/').reverse().join('/');
  }

  let filteredDrugs = getFilteredDrugs();
  // table rows for a list of drugs
  let drugRowsTemplate = filteredDrugs.map((drug, index) => (
    <tr key={index}>
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
          <a href="#" className="Drugs__ActionIcon Drugs__EditIcon">
            <EditIcon/>
          </a>
        </td>
    </tr>
  ));

  return (
    <>
    	<h1 className="View__Heading">Drugs</h1>
    	<SearchBox 
    		placeholder="Search by name, manufacturer or FDA number"
        onFilterChanged={searchHandler}
    		isFilter
    	/>

    	<div className="Drugs__Filterbox">
    		<span className="Drugs__Filterbox__Label">Filter</span>
    		<CustomSelect 
          options={['All', 'Expired', 'Finished']}
          onSelect={selectedValue =>  setFilter(selectedValue)}
        />
    		<span className="Drugs__Filterbox__PageLabel">1 of 10 pages</span>
    	</div>

    	<section className="Drugs__TableSection">
    		<BaseTable 
          headings={[
          	'Product Name', 'FDA number', 'Manufacturer', 'Administration method', 'Stock Quantity', 'Expiration Date', 'Action'
          	]}
          >
          { filteredDrugs.length === 0 
              ? <>
                  <tr>
                    <td colSpan="7" style={{textAlign: 'center'}}>No results found for <em>{filter}</em></td>
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

export default Index;