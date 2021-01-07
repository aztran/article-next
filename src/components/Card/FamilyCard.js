import React from 'react';

const FamilyCard = ({ icon, title }) => {
	return (
		<div className='family-card flex flex-col items-center justify-between py-4'>
			{icon}
			<div className='text-lg font-montserrat text-center'>{title}</div>
		</div>
	);
};

export default FamilyCard;
