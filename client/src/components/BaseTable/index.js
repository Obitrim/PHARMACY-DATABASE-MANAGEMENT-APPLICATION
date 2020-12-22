import React from 'react';
import PropTypes from 'prop-types';

const Index = ({ headings, caption, children }) => {
  return (
   <table className="BaseTable">
		{caption && <caption className="BaseTable__Caption">{ caption }</caption>}
		<thead className="BaseTable__Thead">
			<tr>
				{headings.map((heading, index) => (
					<th key={index}>{heading}</th>
					))}
			</tr>
		</thead>
		<tbody className="BaseTable__Tbody">{children}</tbody>
	</table>
  )
}

Index.propTypes = {
	headings: PropTypes.array,
	caption: PropTypes.string,
	children: PropTypes.node
}

Index.defaultProps = {
	headings: ['Heading 1', 'Heading 2', 'Heading 3'],
	caption: "",
	children: <tr><td>Data 1</td><td>Data 2</td><td>Data 3</td></tr>
}

export default Index;