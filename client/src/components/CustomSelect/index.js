import React, { useState, useEffect } from 'react';
import './CustomSelect.css';
import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Index = ({ options }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState("Select Option");

	function toggleOptions(evt) {
		evt.stopPropagation();
		setIsOpen(!isOpen);
	}

	function onClickOutsideHandler(evt) {
		setIsOpen(false);
	}

	function selectOption(evt) {
		let value = evt.target.dataset.value;
		setSelectedValue(value);
	}

	useEffect(() => {
		document.documentElement.addEventListener('click', onClickOutsideHandler);
		return () => document.documentElement.removeEventListener('click', onClickOutsideHandler);
	}, []);

  return (
    <div className="CustomSelect">
    	<div className="CustomSelect__Toggler" onClick={toggleOptions}>
    		{selectedValue}
    		{isOpen 
    			? <KeyboardArrowUpIcon className="CustomSelect__Icon"/>
    			: <KeyboardArrowDownIcon className="CustomSelect__Icon"/>}
    	</div>
    	<ul className={`CustomSelect__Options ${isOpen && 'CustomSelect__Options__Show'}`}>
    		{options.map((option, index) => (
    				<li 
    					className="CustomSelect__Option" 
    					key={index} 
    					data-value={option} 
    					onClick={selectOption}>
    					{option}
    					{option === selectedValue && <CheckIcon className="CustomSelect__CheckIcon"/>}
    				</li>
    			))}
    	</ul>
    </div>
  )
}

Index.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Index;