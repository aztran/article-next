import React from 'react';
import AuthorSVG from 'public/images/author.svg';
import Download from 'public/images/download.svg';

const Author = () => {
	return (
		<div className='border-t-2 border-b-2 border-gray-1 py-5 mt-4'>
			<div className='flex justify-between'>
				<div className='flex items-center'>
					<AuthorSVG className='mr-4' />
					<div className='flex flex-col'>
						<span className='font-montserrat'>
							By <span className='font-bold'>Audrea</span>{' '}
						</span>
						<div className='font-montserrat text-gray-2 sm:text-sm text-xs'>Last Updated 31st July 2020</div>
					</div>
				</div>

				<div className='flex items-center'>
					<div className='sm:flex hidden  cursor-pointer '>
						<div className='border-gray-3 border-t-2 border-b-2 border-l-2 px-10 py-2'>
							<span className='font-volkron dark-blue '>A</span>
						</div>
						<div className='border-gray-3 border-2 px-10 py-2'>
							<span className='font-volkron dark-blue text-2xl relative'>
								A <span className='absolute -top-1 text-base'>+</span>{' '}
							</span>
						</div>
					</div>
					<div className='sm:ml-4'>
						<button className='inverted button'>
							<Download className='mr-2' />
							Share
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Author;
