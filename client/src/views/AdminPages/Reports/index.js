import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import "./Reports.css";
import BaseTable from '../../../components/BaseTable';

const Index = (props) => {
  return (
    <section>
    	<h1 className="View__Heading">Reports</h1>
    	<div className="Reports__FilterBox">
    		<div className="Reports__FilterBox__Col">
    			<label htmlFor="#">From:</label>
    			<input type="text" className="Reports__DateInput"/>
    		</div>
    		<div className="Reports__FilterBox__Col">
    			<label htmlFor="#">To:</label>
    			<input type="text" className="Reports__DateInput"/>
    		</div>
    	</div>
    	<div className="Drugs__TableSection">
    		<BaseTable 
	          headings={['Product Name', 'Description', 'Date']}
	          >
	          <tr>
	              <td>Paracetamol</td>
	              <td>Lucky Herbal</td>
	              <td>24/12/2020</td>
	          </tr>
	           <tr>
	              <td>Paracetamol</td>
	              <td>Lucky Herbal</td>
	              <td>24/12/2020</td>
	          </tr>
	           <tr>
	              <td>Paracetamol</td>
	              <td>Lucky Herbal</td>
	              <td>24/12/2020</td>
	          </tr>
	           <tr>
	              <td>Paracetamol</td>
	              <td>Lucky Herbal</td>
	              <td>24/12/2020</td>
	          </tr>
	           <tr>
	              <td>Paracetamol</td>
	              <td>Lucky Herbal</td>
	              <td>24/12/2020</td>
	          </tr>
	        </BaseTable>
    	</div>
    	 {/*Pagination button*/}
	     <div className="Drugs__PaginationBtns">
	      	<a href="#" className="Drugs__PaginationBtn">
	      		<ChevronLeftIcon/>
	      	</a>
	      	<a href="#" className="Drugs__PaginationBtn Drugs__PaginationBtn--Next">
	      		<ChevronRightIcon/>
	      	</a>
	     </div>
    </section>
  )
}

export default Index;