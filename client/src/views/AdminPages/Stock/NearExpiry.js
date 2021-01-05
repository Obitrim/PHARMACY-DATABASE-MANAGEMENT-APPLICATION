import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import "./NearExpiry.css";
import BaseTable from '../../../components/BaseTable';

const NearExpiry = (props) => {
	const [activeLinkIndex, setActiveLinkIndex] = useState("");

	// function getYearMonthDayFormat(dateStringInDDMMYYYYFormat) {

	// }

	return (
		<section>
			<h1 className="View__Heading">Near Expiry</h1>
			<p className="IntroText">The drugs below are close to expiry</p>
			{/*Filter box*/}
			<div className="Drugs__Filterbox">
				<button 
					className={`FilterBtn ${activeLinkIndex === "" && 'FilterBtn--Active'}`} 
					onClick={() => setActiveLinkIndex("")}
					>Today
				</button>
				<button 
					className={`FilterBtn ${activeLinkIndex === "next week" && 'FilterBtn--Active'}`} 
					onClick={() => setActiveLinkIndex("next week")}
					>Next Week
				</button>
				<button 
					className={`FilterBtn ${activeLinkIndex === "next month" && 'FilterBtn--Active'}`} 
					onClick={() => setActiveLinkIndex("next month")}
					> Next Month
				</button>
				<button 
					className={`FilterBtn ${activeLinkIndex === "next year" && 'FilterBtn--Active'}`} 
					onClick={() => setActiveLinkIndex("next year")}
					>Next Year
				</button>
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
				      	<a href="#" className="Drugs__ActionIcon Drugs__EditIcon">
				      		<EditIcon/>
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
				      	<a href="#" className="Drugs__ActionIcon Drugs__EditIcon">
				      		<EditIcon/>
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
				      	<a href="#" className="Drugs__ActionIcon Drugs__EditIcon">
				      		<EditIcon/>
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
				      	<a href="#" className="Drugs__ActionIcon Drugs__EditIcon">
				      		<EditIcon/>
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
				      	<a href="#" className="Drugs__ActionIcon Drugs__EditIcon">
				      		<EditIcon/>
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
				      	<a href="#" className="Drugs__ActionIcon Drugs__EditIcon">
				      		<EditIcon/>
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
				      	<a href="#" className="Drugs__ActionIcon Drugs__EditIcon">
				      		<EditIcon/>
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
				      	<a href="#" className="Drugs__ActionIcon Drugs__EditIcon">
				      		<EditIcon/>
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
				      	<a href="#" className="Drugs__ActionIcon Drugs__EditIcon">
				      		<EditIcon/>
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
				      	<a href="#" className="Drugs__ActionIcon Drugs__EditIcon">
				      		<EditIcon/>
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
				      	<a href="#" className="Drugs__ActionIcon Drugs__EditIcon">
				      		<EditIcon/>
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
		</section>
	)
}

export default NearExpiry;