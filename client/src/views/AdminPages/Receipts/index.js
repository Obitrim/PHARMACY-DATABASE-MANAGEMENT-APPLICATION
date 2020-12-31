import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Formik, Form, Field } from 'formik';

import './Receipts.css';
import BaseTable from '../../../components/BaseTable';
import CustomSelect from '../../../components/CustomSelect';

const Index = (props) => {
  return (
    <section className="Receipts">
    	<h1 className="View__Heading">Generate Receipt</h1>
    	<div className="Drugs__TableSection">
    		<BaseTable 
	          headings={['Drug Name', 'Quantity', 'Price(Gh$)', 'Action']}
	          >
	          <tr>
	              <td>Paracetamol</td>
	              <td>2 tablets</td>
	              <td>20</td>
	              <td>
	              	<a href="#" className="Drugs__ActionIcon">
	              		<DeleteIcon/>
	              		remove
	              	</a>
	              </td>
	          </tr>
	        </BaseTable>
    	</div>
    	<Formik>
    		{(formik) => (
    			<Form>
    				<div className="FormGroup">
    					<label>Drug Name</label>
    					<CustomSelect options={[]}/>
    				</div>
    				<div className="FormGroup">
    					<label>Quantity</label>
    					<Field type="number" name="quantity"/>
    				</div>
    				<div className="FormGroup">
    					<label>Price (Gh$)</label>
    					<Field type="number" name="price"/>
    				</div>
    				<div className="FormGroup">
    					<button type="submit">Add</button>
    				</div>
    			</Form>
    		)}
    	</Formik>
    </section>
  )
}

export default Index;