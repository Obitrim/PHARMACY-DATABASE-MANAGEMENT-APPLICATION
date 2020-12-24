import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import './Drugs.css';
import SearchBox from '../../../components/SearchBox';
import BaseTable from '../../../components/BaseTable';
import CustomSelect from '../../../components/CustomSelect';

const Index = (props) => {
	function searchHandler(){
		console.log('Searching');
	}

  return (
    <>
    	<h1 className="View__Heading">Drugs</h1>
    	<SearchBox 
    		onSearch={searchHandler}
    		placeholder="Search by name, manufacturer or FDA number"
    	/>
    	{/*Filter box*/}
    	<div className="Drugs__Filterbox">
    		<span className="Drugs__Filterbox__Label">Filter</span>
    		<CustomSelect options={['All', 'Expired', 'Finished']}/>
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
    </>
  )
}

export default Index;