import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DeleteIcon from '@material-ui/icons/Delete';

import './Receipts.css';
import BaseTable from '../../../components/BaseTable';
import CustomSelect from '../../../components/CustomSelect';

const Index = (props) => {
    const [drug, setDrug ] = useState("");
    const [medications, setMedications] = useState([]);

    return (
        <section className="Receipts">
        	<h1 className="View__Heading">Generate Receipt</h1>
        	<div className="Drugs__TableSection">
        		<BaseTable 
                  headings={['Drug Name', 'Quantity', 'Price(Gh$)', 'Action']}
                  >
                  {medications.map((medication, index) => (
                        <tr key={medication.drug + index}>
                          <td>{medication.drug}</td>
                          <td>{medication.quantity} unit(s)</td>
                          <td>{medication.price}</td>
                          <td>
                            <a href="#" className="Drugs__ActionIcon">
                                <DeleteIcon/>
                                remove
                            </a>
                          </td>
                      </tr>
                    ))}
                </BaseTable>
        	</div>
        	<Formik
                initialValues={{
                    quantity: 0,
                    price: 0
                }}
                validationSchema={Yup.object({
                    quantity: Yup.number()
                        .moreThan(0, 'At least 1 unit of drug should be bought')
                        .required('Drug quantity bought is required'),
                    price: Yup.number()
                        .moreThan(0, 'Invalid price provided')
                        .required('How much is 1 unit of the drug')
                })}
                onSubmit={values => {
                    alert('on submit');
                    // check if drug was selected
                    // if (drug === "") {
                    //     alert('Please select drug being sold');
                    //     return;
                    // }
                    // if selected, proceed to add to items bought
                    // setMedications([
                    //     ...medications,
                    //     { ...values, drug: drug }
                    // ]);
                }}
                >
        		<Form>
                    <div className="FormGroup">
                        <label>Drug Name</label>
                        <CustomSelect
                            onSelect={value => setDrug(value)}
                            options={['Paracetamol', 'G tablet', 'ORS']}
                        />
                    </div>
                    <div className="FormGroup">
                        <label>Quantity</label>
                        <Field type="number" name="quantity"/>
                        <ErrorMessage name="quantity" component="small"/>
                    </div>
                    <div className="FormGroup">
                        <label>Price (Gh$)</label>
                        <Field type="number" name="price"/>
                        <ErrorMessage name="price" component="small"/>
                    </div>
                    <div className="FormGroup">
                        <button type="submit">Add</button>
                    </div>
                </Form>
        	</Formik>
            <button type="button" disabled={medications.length === 0}>
                Generate Receipt
            </button>
        </section>
    )
}

export default Index;