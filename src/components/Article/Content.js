import React from 'react';

import Youtube from 'react-youtube';

import Parent1 from 'public/images/Parent.svg';
import Parent3 from 'public/images/parent-3.svg';
import Parent2 from 'public/images/parent-2.svg';
import Parent4 from 'public/images/parent-4.svg';
import StarFull from 'public/images/star-full.svg';
import StarBG from 'public/images/star-bg.svg';
import Feelo from 'public/images/feelo.svg';
import WordMouth from 'public/images/wordMouth.svg';
import FamilyCard from '../Card/FamilyCard';

import Table from '../Table';
import list from '../Table/mockData';
import { blue } from 'tailwindcss/colors';

const Content = ({ dataYoutube }) => {
	const listFamily = [
		{
			// icon: <img src={Parent1} alt='parent' />,
			icon: <Parent1 />,
			title: 'Just Me'
		},
		{
			icon: <Parent2 />,
			title: 'Me and My partner'
		},
		{
			icon: <Parent3 />,
			title: 'My Family'
		},
		{
			icon: <Parent4 />,
			title: 'Me and My kid(s)'
		}
	];

	const area = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'ACT', 'TAS', 'NT'];

	const tableConfig = {
		header: () => {
			return (
				<tr className='text-white'>
					<th className='bg-orange-1 p-4'></th>
					<th className='bg-orange-2 p-4'>October 2020</th>
					<th className='bg-orange-3 p-4'>April 2021</th>
					<th className='bg-orange-4 p-4'>Total Rate Rise</th>
				</tr>
			);
		},
		body: () => {
			return list.map((data, index) => {
				let bgClass = data.total > 6 ? 'bg-light-red text-red-900' : data.total > 5 && data.total < 6 ? 'bg-orange-5 text-orange-900' : 'bg-light-green text-green-900';
				return (
					<tr key={index} className='last:bg-orange-5 last:text-orange-900 text-center' key={index}>
						<td className='sm:p-5 p-2'>{data.name}</td>
						<td className='sm:p-5 p-2'>{data.oct} %</td>
						<td className='sm:p-5 p-2' className='last:bg-gray-4 last:bg-orange-5'>
							{data.apr} %
						</td>
						<td className='sm:p-5 p-2' className={`${bgClass} font-bold`}>
							{data.total} %
						</td>
					</tr>
				);
			});
		}
	};
	return (
		<>
			<div className='image relative'></div>
			<div className='font-montserrat text-lg text-dark-blue-4'>
				<p className='my-8'>
					Did you know that Aussies are being slugged with two health insurance rate rises in 6 months? The October 2020 rate rise added $103.48 to the average family’s health insurance bill
					and the April 2021 rate rise will add a further $126.88. That’s $230.36 more to pay every single year.
				</p>
				<p className='my-8'>
					But an innovative comparison service has been <span className='font-bold'>saving Aussies an average of $357.95 on their health insurance.</span> They compare over half a dozen of
					Australia’s biggest health funds - both regular and non-profit insurers - and it’s 100% Australian owned and operated.
				</p>
				<div className='my-8'>
					Hospital & Extras policies start at $2.93 per day with no lock in contracts. There are no fees or markups, and no waiting periods to worry about if you’re switching to a similar or
					lower level of cover. <span className='font-bold'>Plus, if you switch & save in January, you get a free 210 piece first aid kit.</span>
				</div>
			</div>

			{/* Parent */}
			<section className='Parent'>
				<div className='text-3xl font-montserrat font-bold text-black'>Here’s How You Do It</div>
				<div className='steps mt-5'>
					<div className='font-montserrat text-lg text-dark-blue-4'>
						<span className='font-bold'>Step 1:</span> Select your current <span className='font-bold'>Life Stage Below</span>
					</div>
					<div className='font-montserrat text-lg text-dark-blue-4'>
						<span className='font-bold'>Step 2:</span> Once you select your preferred coverage options, you will have the opportunity to compare quotes from multiple health funds.
					</div>
					<div className='flex flex-wrap my-10 sm:w-10/12 mx-auto'>
						{listFamily.map((list) => (
							<div className='sm:w-1/4 w-1/2 px-4 sm:my-0 my-4' key={list.title}>
								<FamilyCard {...list} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Table */}
			<section className='Table font-montserrat text-lg text-dark-blue-4'>
				<div className='text-3xl font-bold text-black'>Not all funds are created equal</div>
				<p className='my-6'>
					Although the average rate rise in April is ‘only’ 2.92%, some funds will be increasing their rates by as much as 5.47%, just as in October other funds increased their rates by up
					to 5.6%. <span className='font-bold'>One fund which we can’t name here will have raised their rates by an outrageous 9.36% across the October 2020 and April 2021 rate rises.</span>
				</p>
				<p className='my-8'>
					This means that thousands of Aussies will be paying literally hundreds of dollars per year more than they were a mere 6 months ago, depending on which fund they’re with.
				</p>

				<div className='shadow-lg border rounded-lg'>
					<div className='text-xl text-center font-bold sm:mb-6 p-8 '>Premium increases 2020 and 2021</div>
					<div className='sm:p-8'>
						<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg '>
							<Table {...tableConfig} />
						</div>
					</div>
					<div className='text-base text-gray-5 text-center  my-4'>Source: Health.gov.au</div>
					<div className='bg-gray-6'>
						<p className='sm:text-base text-xs sm:p-8 p-5'>
							As you can see from the table, some funds are increasing their premiums by 4 times as much as other funds! We can’t mention them by name here but you can talk to an advisor
							for the full details.
						</p>
					</div>
				</div>
			</section>

			{/* CHart */}
			<section className='chart font-montserrat text-lg my-9'>
				<div className='sm:text-3xl text-28 font-bold text-black'>Don’t get mad, get even</div>
				<p className='my-6 '>
					Let’s not mince words - health insurance costs are out of control and have been for quite some time. Statistics from the Department of Health show that the average premium is 3.4
					times more expensive today than it was in 2001. <span className='font-bold'>The good news is that now there’s something you can do about it.</span>
				</p>

				<div className='shadow-lg border rounded-lg'>
					<div className='sm:text-2xl text-xl text-center font-bold sm:mb-6 p-8 '>Health insurance vs. inflation increases: 2001-2020.</div>
					<p className='text-base text-gray-7 text-center sm:w-8/12 mx-auto'>How much has the average health insurance premium increased compared to inflation?</p>
					<div className='sm:p-8'>
						<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg '>
							<img src='/images/chart.png' />
						</div>
					</div>
					<div className='text-base text-gray-5 text-center  my-4'>Source: Health.gov.au</div>
					<div className='bg-gray-6'>
						<p className='sm:text-base text-xs sm:p-8 p-5'>
							As you can see from the table, some funds are increasing their premiums by 4 times as much as other funds! We can’t mention them by name here but you can talk to an advisor
							for the full details.
						</p>
					</div>
				</div>

				<p className='my-8'>
					The Seniors Discount Club is working with HealthInsuranceComparison.com.au to help Australians ‘ditch and switch’ their health insurer, and turn back the clock on premium
					increases. For a limited time, you even get a 210 piece first aid kit as a <span className='font-bold'>free gift</span> when you switch.
				</p>
				<div className='my-8'>
					The service is free to use and 100% transparent. There are no hidden fees or charges, and{' '}
					<span className='font-bold'>all prices come directly from the health funds themselves</span> - we guarantee you’ll pay the same price for the same policy as if you picked up the
					phone and called the insurers yourself.
				</div>
			</section>

			<section className='font-montserrat text-lg text-dark-blue-4'>
				<div className='sm:text-3xl text-28 font-bold text-black'>Australian owned & Independent </div>
				<p className='my-6'>
					The web and phone based service is <span className='font-bold'>100% Australian owned and operated</span>, with over 100 health insurance experts in Sydney, Melbourne, and Brisbane
					offices - no outsourced call centers here, and no pushy salespeople - just trained experts trying to find you a better deal.
				</p>
				<p className='my-8'>
					Unlike some other comparison services, they are <span className='font-bold'>independently owned and not beholden to any specific insurer</span>, comparing hundreds of policies from
					both standard and not for profit health insurers.
				</p>
			</section>

			<section className='font-montserrat text-lg text-dark-blue-4'>
				<div className='sm:text-3xl text-28 font-bold text-black'>Are you paying the ‘lazy tax’? </div>
				<p className='my-6'>
					Hundreds of thousands of Aussies are paying more than they have to for substandard or wasteful health cover. Simply put,{' '}
					<span className='font-bold'>if you haven’t reviewed your health insurance policy in the last 12 months, you’re almost certainly paying the ‘lazy tax’</span>, and your insurer is
					only too happy to let you keep paying it.
				</p>
				<p className='my-8'>
					Health Insurance Comparison handles all the paperwork for you, and handles the switching process from your old fund to your new one. They’ll ensure that your new policy starts at
					the exact same time your old one ends, meaning you won’t ever be without cover or paying for two policies at once.
				</p>
			</section>

			{/* Video */}
			<section className='font-montserrat text-lg text-dark-blue-4'>
				<div className='sm:text-3xl text-28 font-bold text-black'>Stop paying for cover you don’t need </div>
				<p className='my-6'>
					For years, health insurers have been taking advantage of Aussie’s loyalty, creeping up rates every year and charging customers for cover they don’t need - in some cases for
					decades.
				</p>
				<p className='my-8'>
					“Over the years, I’ve spoken to hundreds of hardworking Australians who were unknowingly paying for cover they didn’t need”, says Andrew Davis, CEO of
					HealthInsuranceComparison.com.au. “
					<span className='font-bold'>
						It’s not at all uncommon to speak to people in their 50’s, 60’s, and beyond, who are still paying for things like pregnancy cover, orthodontics, and IVF
					</span>
					”.
				</p>

				<div className='my-8'>
					<div className='flex shadow-lg border sm:flex-row flex-col'>
						<div className='sm:w-4/6 w-full'>
							<Youtube
								className='w-full'
								videoId='7QltMeIbkaM'
								opts={{
									playerVars: {
										loop: 1,
										autoplay: 0,
										controls: 0,
										showinfo: 0
									}
								}}
							/>
						</div>
						<div className='sm:w-2/6 w-full'>
							<div className='p-8 flex flex-col h-full justify-center'>
								<div className='text-xl font-bold'>{dataYoutube?.snippet?.title}</div>
								<div className='text-sm mt-4'>If you haven’t reviewed your policy lately, you could be leaving thousands of dollars on the table.</div>
							</div>
						</div>
					</div>
				</div>

				<p className='my-8'>
					Health funds often use fear and ignorance of the system to keep people paying for things they don’t need. What most Australians don’t realise is that you{' '}
					<span className='font-bold'>don’t need to re-serve hospital waiting periods when switching funds</span>, as long as you’re switching to an equal or lower level of cover.
				</p>
			</section>

			{/* end Video */}

			<section className='font-montserrat'>
				<div className='sm:text-3xl text-28 font-bold text-black'>Get more money back on important things </div>
				<p className='my-6'>
					If you feel like your policy is letting you down on the important things, like rebates on dental, optical, or physiotherapy, that’s something that Health Insurance Comparison can
					help with too. A good Extras policy should have you covered and <span className='font-bold'>keep any gap fees or out of pocket expenses to an absolute minimum.</span>
				</p>
				<p className='my-8'>
					“There’s now a huge variety of Extras policies on the market, some of which cover things as broad as Acupuncture and Psychology”, continues Andrew Davis, CEO of
					HealthInsuranceComparison.com.au.
				</p>
				<p className='my-8'>
					“But many Aussies would be better off sticking to policies that have comprehensive cover for the fundamentals, like general and major dental, optical, and physiotherapy.”
				</p>
			</section>

			<section className='font-montserrat'>
				<div className='sm:text-3xl text-28 font-bold text-black'>53,893 Aussies can’t be wrong! </div>
				<p className='my-6'>
					Health Insurance Comparison was founded in 2009 and has been helping Aussies save on their cover for over 11 years. In 2020 alone, they helped 53,893 singles, couples, and families
					save on their health insurance, <span className='font-bold'>saving the average customer $357.95 per year.</span>
				</p>
				<p className='my-8'>
					The award winning service has hundreds of real testimonials conducted by three independent review agencies - Word of Mouth, Feefo, and ProductReview.com.au. These are REAL Aussies
					leaving REAL feedback who were not incentivised or compensated to leave positive reviews in any way.
				</p>

				<div className='my-8'>
					<div className='shadow-lg sm:px-14 px-9 py-6 text-dark-blue-1'>
						<div className='flex mb-6'>
							{[...Array(5)].map((x, i) => (
								<StarFull className='mx-2 fill-current text-yellow-1' key={i} />
							))}
						</div>
						<div className='text-28 font-bold mb-4'>Great customer service</div>
						<div className='sm:text-lg mb-5'>
							Tom Carroll was very professional, friendly and helpful. He took the time to explain everything to me and found me a better coverage for less $$ monthly! Thanks Tom =
							legend!
						</div>
						<div className='flex justify-between'>
							<div className='text-xl font-bold'>Tracey</div>
							<Feelo />
						</div>
					</div>
				</div>

				<div className='my-8'>
					<div className='shadow-lg'>
						<div className='flex sm:flex-row flex-col'>
							<div className='sm:w-2/6 w-full bg-gray-8'>
								<div className='px-6 py-9'>
									<div className='font-bold text-dark-blue-3 flex'>
										<div className='text-2xl mr-2'>4.8</div>
										<div className='flex mb-6'>
											{[...Array(5)].map((x, i) => (
												<StarFull className='mx-1 fill-current text-yellow-2' key={i} />
											))}
										</div>
									</div>
									<div className='flex text-dark-blue-3'>
										<WordMouth className='mr-1' />
										<div className='text-2xl mr-2 font-bold'>Word of Mouth</div>
									</div>
								</div>
							</div>
							<div className='sm:w-4/6 w-full relative'>
								<div className='px-6 py-9'>
									<div className='text-dark-blue-1'>Brittany gave exceptional service - thank you so much. I am saving over $700 a year. Wish I had done it before.</div>
									<div className='text-base mt-4 font-bold'>Karyl W.</div>
									<div className='absolute bottom-0 right-0'>
										<StarBG />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='my-8'>
					<div className='shadow-lg sm:px-14 px-9 py-6 text-dark-blue-4'>
						<div className='text-28 font-bold mb-4'>Friendly & Helpful Service</div>
						<div className='sm:text-lg mb-5'>
							The whole experience was very friendly and helpful. We love being able to tailor the insurance cover to what our needs are, and we are saving $70 a fortnight with no
							decrease in cover. Thank you very much.
						</div>
						<div className='flex sm:flex-row flex-col sm:items-center mr-4  sm:mb-8'>
							<div className='text-xl font-bold'>
								Sandy <span className='sm:inline hidden'>|</span>{' '}
							</div>
							<span className='font-normal'>Darling Downs, QLD</span>
						</div>
						<div className='flex sm:border-t-2 pt-4 sm:flex-row flex-col'>
							<div className='sm:w-1/3 w-full sm:my-0 my-5'>
								<div className='flex flex-col'>
									<div className='text-xl font-bold'>Customer Rating</div>
									<div className='flex'>
										{[...Array(5)].map((x, i) => (
											<StarFull className=' fill-current text-yellow-1' key={i} />
										))}
									</div>
								</div>
							</div>
							<div className='sm:w-1/3 w-full sm:my-0 my-5'>
								<div className='flex flex-col'>
									<div className='text-xl font-bold'>Transparency</div>
									<div className='flex'>
										{[...Array(5)].map((x, i) => (
											<StarFull className=' fill-current text-yellow-1' key={i} />
										))}
									</div>
								</div>
							</div>
							<div className='sm:w-1/3 w-full sm:my-0 my-5'>
								<img src='/images/product-review.png' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='font-montserrat'>
				<div className='sm:text-3xl text-28 font-bold text-black'>Cover for less than a cup of coffee per day </div>
				<p className='my-6'>
					<span className='font-bold'>All policies come with a 30 day cooling off period if you change your mind, and there are no lock-in contracts</span>. Let Health Insurance Comparison
					do a free health insurance audit for you. It’s free to compare and there’s no obligation to sign up. In the unlikely event that they can’t save you money, at least you’ll have
					peace of mind that your policy is still competitive.
				</p>
				<p className='my-8'>
					They compare hundreds of policies from some of Australia’s biggest for-profit and not-for-profit insurers, with cover starting for as little as $2.93 per day - and that’s for a
					hospital and extras combined policy!
				</p>

				<div className='flex items-center justify-center '>
					<div className='rounded-full w-4 h-4 bg-gray-2 mx-2'></div>
					<div className='rounded-full w-4 h-4 bg-gray-2 mx-2'></div>
					<div className='rounded-full w-4 h-4 bg-gray-2 mx-2'></div>
				</div>
				<div className='my-8'>
					<div className='flex sm:flex-row flex-col'>
						<div className='sm:w-2/6 w-full'>
							<div className='first-aid-icon relative shadow-lg flex items-center justify-center p-4'>
								<img src='/images/first-aid.png' />
								<img src='/images/top-wrapper.png' className='absolute -top-2 inset-x-3 inset-y-2' />
							</div>
						</div>
						<div className='sm:w-4/6 w-full'>
							<div className='flex sm:flex-row flex-col items-center text-dark-blue-1 sm:mt-0 mt-4'>
								<div className='text-5xl  font-bold mr-4 my-2'>FREE</div>
								<div className='text-xl font-bold sm:text-left text-center'>210 PCS Emergency First Aid Kit Medical Travel Set</div>
							</div>
							<div className='my-4'>
								<div className='text-lg text-dark-blue-4'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla laoreet justo sit amet consequat. Aliquam non ex erat.
								</div>
							</div>
							<div className='my-4 flex justify-center'>
								<button className='button emergency' style={{ fontSize: '20px', padding: '1rem' }}>
									Compare Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='font-montserrat'>
				<div className='sm:text-3xl text-28 font-bold <section '>Compare, switch, and save</div>
				<p className='my-6'>
					How many times have you told yourself “I really ought to compare my health insurance” and then gone on paying the ‘lazy tax’? Health Insurance Comparison saved their average
					customer $357.95 in 2020. If you haven’t reviewed your cover in the last 12 months, there’s a very good chance they can do the same for you.
				</p>
				<p className='my-8'>
					And remember, as a special deal for Seniors Discount Club readers only, you’re entitled to a free 210 piece first aid kit when you switch and save in January. Enter your details
					below and see how much you could be saving today.
				</p>
			</section>

			<section className='Parent'>
				<div className='text-3xl font-montserrat font-bold text-black'>Get Started Now</div>
				<div className='steps mt-5'>
					<div className='font-montserrat text-lg text-dark-blue-4'>
						<span className='font-bold'>Step 1:</span> Select your <span className='font-bold'>State Below</span>
					</div>
					<div className='font-montserrat text-lg text-dark-blue-4'>
						<span className='font-bold'>Step 2:</span> After answering a few questions, you will have the opportunity to compare quotes in your area and could be eligible for significant
						savings.
					</div>

					<div className='my-8'>
						<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg relative'>
							<div className='font-montserrat sm:text-2xl text-xl text-center font-bold sm:mb-6 px-8 pt-8 '>Choose your area.</div>
							<p className='text-base text-gray-7 text-center sm:w-8/12 mx-auto'>Which area are you in?</p>

							{/* in desktop */}
							<div className='sm:block hidden'>
								<div className='my-8 flex justify-center'>
									<img src='/images/Map.png' />
								</div>
								<div className='absolute flex items-start w-4/12' style={{ bottom: '100px', left: '186px' }}>
									<img src='/images/exclamation.png' alt='exclamation' className='mt-1 mr-2' />
									<span className='text-gray-10'> Australia: We saved our average customer $375.74 on their average annual premium!</span>
								</div>
								<div className='my-4 flex justify-center'>
									<button className='button primary'>Compare Now</button>
								</div>
							</div>

							{/* in mobile */}
							<div className='sm:hidden block my-8 mx-4'>
								<div className='grid grid-cols-4 gap-4'>
									{area.map((list) => (
										<div key={list} className='bg-dark-blue text-white p-2 text-center'>
											{' '}
											{list}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Content;
