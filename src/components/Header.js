import React from 'react';
import Logo from 'public/images/logo.svg';

const Header = () => {
	return (
		<header className='flex  items-center header'>
			<div className='container mx-auto flex justify-between items-center sm:px-0 px-2'>
				<div className='flex items-center'>
					<Logo />
				</div>
				<button className='button primary'>Get My Quote</button>
			</div>
			{/* <div className=''> */}
			{/* </div> */}
		</header>
	);
};

export default Header;
