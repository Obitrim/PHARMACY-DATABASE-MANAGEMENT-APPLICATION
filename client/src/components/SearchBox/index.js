import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBox.css';

const Index = ({ placeholder, isFilter, onSearch, onFilterChanged }) => {
	const searchInput = useRef(null);

	function keyPressedHandler(evt) {
		if (evt.code === 'Enter') {
			onSearch( 'searchKey', searchInput.value);
		}
	}

  return (
    <div className="SearchBox">
    	<SearchIcon className="SearchBox__Icon"/>
    	{ isFilter 
    		? (
    			<input 
		    		type="text" 
		    		className="SearchBox__Input" 
		    		placeholder={placeholder}
		    		onChange={onFilterChanged}
		    	/>)
    		: (
    			<input 
		    		type="text" 
		    		className="SearchBox__Input" 
		    		placeholder={placeholder}
		    		onKeyPress={keyPressedHandler}
		    		ref={searchInput}
		    	/>
    		)}
    </div>
  )
}

Index.propTypes = {
	placeholder: PropTypes.string,
	isFilter: PropTypes.bool,
}

Index.defaultProps = {
	placeholder: "Search here",
	isFilter: false
}


export default Index;