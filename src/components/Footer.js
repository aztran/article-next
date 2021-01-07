import React from 'react';
import Award1 from 'public/images/award-1.svg';
import Award2 from 'public/images/award-2.svg';
import Award3 from 'public/images/award-3.svg';
import Award4 from 'public/images/award-4.svg';
import Award5 from 'public/images/award-5.svg';
import Award6 from 'public/images/award-6.svg';
import Award7 from 'public/images/award-7.svg';

const Footer = () => {
	return (
		<footer>
			{/* Top */}
			<div className='bg-dark-blue-5 footer-top'>
				<div className='container mx-auto h-full'>
					<div className='flex items-center justify-center h-full flex-wrap py-8 px-4'>
						{[...Array(7)].map((x, i) => (
							<img src={`/images/award-${i + 1}.svg`} className='sm:mx-2 px-2 my-4 sm:w-min w-1/4' key={i} />
						))}
					</div>
				</div>
			</div>

			{/* Bottom */}
			<div className='bg-dark-blue footer-bottom font-montserrat font-bold text-white py-7  px-4 text-center'>
				<div className='container mx-auto h-full'>
					<ul className='grid gap-4 sm:grid-cols-4 grid-cols-2'>
						<li className='sm:mx-8'>Privacy Policy</li>
						<li className='sm:mx-8'>Terms of Use</li>
						<li className='sm:mx-8'>Contact Us</li>
						<li className='sm:mx-8'>Facebook</li>
					</ul>
					<p className='text-center font-light text-sm mt-4'>
						© Copyright Count Every Penny 2013-2018. All rights reserved. Counteverypenny.com.au is an on-line health insurance comparison service. We provide you access to our expert
						staff to assist in selecting the most appropriate health insurance policy from our panel of health funds. Why not give us a call on 1300 384 472 to see if you have the most
						appropriate policy for your needs
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
