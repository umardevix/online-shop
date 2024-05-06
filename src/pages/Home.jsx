/* eslint-disable react/prop-types */

import ShopCard from '../components/ShopCard';

import { Link } from 'react-router-dom';

const Home = ({ product, query }) => {
	return (
		<>
			{/* <Category setProduct={setProduct} product={product} items={['man', 'woman', 'kids']} /> */}
			<ShopCard query={query} product={product} />

			<div className='w-full flex justify-center mt-10'>
				<Link to={'/product'}>
					<button className='bg-gray-700 py-3 px-20 rounded-lg text-white text-base font-semibold shadow-xl'>
						View all product
					</button>
				</Link>
			</div>

			<div className='pt-20'></div>
		</>
	);
};

export default Home;
