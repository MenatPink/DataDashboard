import React from 'react';

const Scroll = (props) => {
	return (
	<div style = { {overflowY: 'scroll', overflowX: 'hidden', marginTop: '100px'} }>
		{ props.children }
	</div>
		)
};

export default Scroll;