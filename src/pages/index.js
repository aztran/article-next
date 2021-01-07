import React from 'react';
import Head from 'next/head';
import Header from 'src/components/Header';
import Heading from 'src/components/Article/Heading';
import Content from 'src/components/Article/Content';
import ListAges from 'src/components/ListAges';
import Footer from 'src/components/Footer';

const index = ({ data }) => {
	return (
		<>
			<Head>
				<title>Article</title>
			</Head>
			<main className=' min-h-screen'>
				<Header />
				<div className='container mx-auto mt-4 px-4'>
					<Heading />
					<div className='flex flex-wrap'>
						<div className='sm:w-4/6 w-full px-2'>
							<Content dataYoutube={data.items[0]} />
						</div>
						<div className='sm:w-2/6 w-full px-2 sm:flex hidden'>
							<ListAges />
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
};

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/videos';
const YOUTUBE_API_KEY = 'AIzaSyBQKxEZCGUkpv4ix1uAq39vFzKAxE_wJn4';

export async function getServerSideProps() {
	const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&id=7QltMeIbkaM&key=${YOUTUBE_API_KEY}`);
	const data = await res.json();
	return {
		props: {
			data
		}
	};
}

export default index;
