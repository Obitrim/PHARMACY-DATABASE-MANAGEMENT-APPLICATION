import React from 'react';
import PropTypes from 'prop-types';
import "./Dash.css";

const Index = ({ title, value }) => {
  return (
    <div className="Dash">
    	<strong className="Dash__Title">{title}</strong>
    	<p className="Dash__Value">{value}</p>
    </div>
  )
}

Index.propTypes = {
	title: PropTypes.string,
	value: PropTypes.string
}

Index.defaultProps = {
	title: "Dash Title",
	value: "$450"
}

export default Index;