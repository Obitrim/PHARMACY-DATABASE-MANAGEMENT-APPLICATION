import React, { useState } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './Add.css';
import CustomSelect from '../../../components/CustomSelect';

const Add = (props) => {
	// const [expirationDate, setExpirationDate] = useState("");
	const [administrationMethod, setAdministrationMethod] = useState("");

	const administrationOptions = [
		'Oral', 'topical (skin surface)', 'Nasal',
		'Inhalable', 'Enteral',  'Intramuscular',
		'Infused', 'Intravenous', 'Intrathecal', 
		'subcutaneous', 'sublingual', 'Opthalmic', 
		'Buccal', 'Otic', 'Rectal', 'transdermal'

	]; 

	function onSelect(value) {
		setAdministrationMethod(value);
	}

	return (
		<section className="CreateDrug">
			<div className="CreateDrug__Info">
				<h1 className="View__Heading">Create Drug Record</h1>
				<p className="CreateDrug__Info__Para">
					Keeping records of drugs helps the system to easily track drugs in your possession. 
					<span className="TWarning">&nbsp;Please provide all details</span>
				</p>
			</div>
			<Formik
				initialValues={{
					drugName: '',
					manufacturer: '',
					FDARegistrationNumber: '',
					quantity: 0
				}}
				validationSchema={Yup.object({
					drugName: Yup.string().required('Drug name is missing'),
					manufacturer: Yup.string().trim()
						.min(5, 'Minimum of 5 characters expected')
						.required('Provide name of manufacturer of the drug'),
					FDARegistrationNumber: Yup.string().trim()
						.matches(/^[1-9][0-9]{10}$/g, 'Invalid FDA number. 11 digits expected')
						.required('FDA number is missing'),
					quantity: Yup.number()
						.min(1, 'Quantity should be 1 or more')
						.required('Provide drug\'s stock quantity')
				})}
				onSubmit={formik => {
					console.log('Submitting');
				}}
				>
				{() => (
					<Form className="CreateDrug__Form">
						<div className="FormGroup">
							<label className="CreateDrug__Label" htmlFor="DrugName">Drug Name</label>
							<Field className="CreateDrug__Input" 
								type="text" 
								name="drugName" 
								id="DrugName"
							/>
							<ErrorMessage 
								name="drugName"
								component="small" 
								className="ErrorLabel" 
							/>
						</div>
						<div className="FormGroup">
							<label className="CreateDrug__Label" htmlFor="Manufacturer">Manufacturer</label>
							<Field className="CreateDrug__Input" 
								type="text" 
								name="manufacturer" 
								id="Manufacturer"
							/>
							<ErrorMessage 
								name="manufacturer"
								component="small" 
								className="ErrorLabel" 
							/>
						</div>
						<div className="FormGroup">
							<label className="CreateDrug__Label" htmlFor="FDARegistrationNumber">FDA Registration Number</label>
							<Field className="CreateDrug__Input" 
								type="text" 
								name="FDARegistrationNumber" 
								id="FDARegistrationNumber"
							/>
							<ErrorMessage 
								name="FDARegistrationNumber"
								component="small" 
								className="ErrorLabel" 
							/>
						</div>
						<div className="FormGroup">
							<label>Administration Method</label>
							<CustomSelect onSelect={onSelect} options={administrationOptions}/>
						</div>
						<div className="FormGroup FormGroup--Row">
							<div>
								<label className="CreateDrug__Label" htmlFor="expirationDate">Expiration Date</label>
								<Field className="CreateDrug__Input" 
									type="text" 
									name="expirationDate" 
									id="expirationDate"
								/>
								<ErrorMessage 
									name="expirationDate"
									component="small" 
									className="ErrorLabel" 
								/>
							</div>
							<div>
								<label className="CreateDrug__Label" htmlFor="quantity">Quantity</label>
								<Field className="CreateDrug__Input" 
									type="number" 
									name="quantity" 
									id="quantity"
								/>
								<ErrorMessage 
									component="small" 
									className="ErrorLabel" 
									name="quantity"/>
							</div>
						</div>
						<div className="FormGroup FormGroup--BtnBar">
							<Link to="/admin/drgus" className="CreateDrug__DrugListLink">Drug List</Link>
							<button className="CreateDrug__SubmitBtn">Create Record</button>
						</div>
					</Form>
				)}
			</Formik>
		</section>
	)
}

export default Add;