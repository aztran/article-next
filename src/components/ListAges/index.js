import React from 'react';

const index = () => {
	return (
		<div>
			<div className='my-8 font-montserrat list-ages'>
				<div className='bg-dark-blue  p-4 rounded-tl-md rounded-tr-md'>
					<div className='text-center text-white text-xl'>Select your age and we’ll show best quotes for you</div>
				</div>
				<div className='bg-orange-1 p-6 text-white rounded-bl-md rounded-br-md'>
					<div className='note p-3  mb-5'>
						<span className='font-bold'>Australia</span>: We saved our average customer $357.95* on their average annual premium!
					</div>
					<div className='grid gap-9 grid-cols-3'>
						{[...Array(18)].map((x, i) => {
							let num = 60 + i;
							return (
								<div key={i} className='bg-orange-6 p-2 text-lg text-gray-9 rounded-md font-bold text-center'>
									{num === 60 ? `≤ ${num}` : num === 77 ? `≥ ${num}` : num}
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className='mt-8'>
				<img src='/images/ads.svg' alt='ads' className='w-full' />
			</div>
		</div>
	);
};

export default index;
