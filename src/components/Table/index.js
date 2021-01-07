import React from 'react';

const index = ({ header, body }) => {
	return (
		<table className='table-auto min-w-full font-montserrat sm:text-lg text-base '>
			<thead>{header()}</thead>
			<tbody>{body()}</tbody>
		</table>
	);
};

export default index;
