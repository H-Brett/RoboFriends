import React from 'react'; 


const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', height: '25%'}}>
			{props.children}
		</div>
	);
}

export default Scroll; 