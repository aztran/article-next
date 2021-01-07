import React from 'react';
import Author from './Author';

const Heading = () => {
	return (
		<>
			<div className='sm:w-8/12 w-full mx-auto'>
				{/* <div className='bg-dark-blue text-white p-4 sm:text-2xl text-lg text-center grid grid-cols-6 sm:items-center items-start justify-center'> */}
				<div className='bg-dark-blue text-white p-4 sm:text-2xl text-lg text-center flex sm:items-center justify-center'>
					{/* <div className='w-2/12'> */}
					<span className='w-5 h-5 rounded-full bg-orange-100 relative mr-4 sm:mt-0 mt-2'>
						<span className='w-3 h-3 rounded-full bg-orange-1 inset-x-1 absolute inset-y-1 '></span>
					</span>
					{/* </div> */}
					<div className='w-10/12 '>
						<span>Two rate rises in 6 months leaves Aussies with $230.36 bigger bills</span>
					</div>
				</div>
			</div>

			{/* title */}
			<div className='text-4xl sm:text-7xl text-dark-blue-1 text-center font-bold mt-5  sm:mx-0'>
				Death by a thousand cuts - how to stop your health insurer bleeding you dry as Aussies get stung with a second rate rise in 6 months
			</div>

			<div className='font-montserrat font-bold sm:text-2xl text-lg text-dark-blue-2 mt-5  text-center sm:w-10/12 sm:mx-auto'>
				We saved the average Aussie $357.95* on their health insurance in 2020 - let us do the same for you!
			</div>

			{/* Author */}
			<Author />
		</>
	);
};

export default Heading;
