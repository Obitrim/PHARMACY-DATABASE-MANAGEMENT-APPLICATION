import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import './Remove.css';
import SearchBox from '../../../components/SearchBox';
import BaseTable from '../../../components/BaseTable';

const Remove = (props) => {
	function searchHandler(){
		console.log('Searching');
	}

  return (
    <>
    	<h1 className="View__Heading">Remove record</h1>
    	{/*Filter box*/}
    	<div className="RemoveDrug__Filterbox">
    		<SearchBox 
	    		onSearch={searchHandler}
	    		placeholder="Search by name, manufacturer or FDA number"
	    		isFilter
	    	/>
    		<span className="Drugs__Filterbox__PageLabel">1 of 10 pages</span>
    	</div>
    	{/*Table*/}
    	<section className="Drugs__TableSection">
    		<BaseTable 
          		headings={[
	          	'Product Name', 'FDA number', 'Manufacturer', 'Administration method', 'Stock Quantity', 'Expiration Date', 'Action'
	          	]}
          	>
          <tr>
              <td>Paracetamol</td>
              <td>12342342879</td>
              <td>Lucky Herbal</td>
              <td>Oral</td>
              <td>300</td>
              <td>24/12/2020</td>
              <td>
              	<a href="#" className="Drugs__ActionIcon">
              		<DeleteIcon/>
              	</a>
              </td>
          </tr>
           <tr>
              <td>Paracetamol</td>
              <td>12342342879</td>
              <td>Lucky Herbal</td>
              <td>Oral</td>
              <td>300</td>
              <td>24/12/2020</td>
              <td>
              	<a href="#" className="Drugs__ActionIcon">
              		<DeleteIcon/>
              	</a>
              </td>
          </tr>
           <tr>
              <td>Paracetamol</td>
              <td>12342342879</td>
              <td>Lucky Herbal</td>
              <td>Oral</td>
              <td>300</td>
              <td>24/12/2020</td>
              <td>
              	<a href="#" className="Drugs__ActionIcon">
              		<DeleteIcon/>
              	</a>
              </td>
          </tr>
           <tr>
              <td>Paracetamol</td>
              <td>12342342879</td>
              <td>Lucky Herbal</td>
              <td>Oral</td>
              <td>300</td>
              <td>24/12/2020</td>
              <td>
              	<a href="#" className="Drugs__ActionIcon">
              		<DeleteIcon/>
              	</a>
              </td>
          </tr>
           <tr>
              <td>Paracetamol</td>
              <td>12342342879</td>
              <td>Lucky Herbal</td>
              <td>Oral</td>
              <td>300</td>
              <td>24/12/2020</td>
              <td>
              	<a href="#" className="Drugs__ActionIcon">
              		<DeleteIcon/>
              	</a>
              </td>
          </tr>
           <tr>
              <td>Paracetamol</td>
              <td>12342342879</td>
              <td>Lucky Herbal</td>
              <td>Oral</td>
              <td>300</td>
              <td>24/12/2020</td>
              <td>
              	<a href="#" className="Drugs__ActionIcon">
              		<DeleteIcon/>
              	</a>
              </td>
          </tr>
           <tr>
              <td>Paracetamol</td>
              <td>12342342879</td>
              <td>Lucky Herbal</td>
              <td>Oral</td>
              <td>300</td>
              <td>24/12/2020</td>
              <td>
              	<a href="#" className="Drugs__ActionIcon">
              		<DeleteIcon/>
              	</a>
              </td>
          </tr>
           <tr>
              <td>Paracetamol</td>
              <td>12342342879</td>
              <td>Lucky Herbal</td>
              <td>Oral</td>
              <td>300</td>
              <td>24/12/2020</td>
              <td>
              	<a href="#" className="Drugs__ActionIcon">
              		<DeleteIcon/>
              	</a>
              </td>
          </tr>
           <tr>
              <td>Paracetamol</td>
              <td>12342342879</td>
              <td>Lucky Herbal</td>
              <td>Oral</td>
              <td>300</td>
              <td>24/12/2020</td>
              <td>
              	<a href="#" className="Drugs__ActionIcon">
              		<DeleteIcon/>
              	</a>
              </td>
          </tr>
           <tr>
              <td>Paracetamol</td>
              <td>12342342879</td>
              <td>Lucky Herbal</td>
              <td>Oral</td>
              <td>300</td>
              <td>24/12/2020</td>
              <td>
              	<a href="#" className="Drugs__ActionIcon">
              		<DeleteIcon/>
              	</a>
              </td>
          </tr>
           <tr>
              <td>Paracetamol</td>
              <td>12342342879</td>
              <td>Lucky Herbal</td>
              <td>Oral</td>
              <td>300</td>
              <td>24/12/2020</td>
              <td>
              	<a href="#" className="Drugs__ActionIcon">
              		<DeleteIcon/>
              	</a>
              </td>
          </tr>
        </BaseTable>
    	</section>
      {/*Pagination button*/}
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