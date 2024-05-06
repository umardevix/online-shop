/* eslint-disable react/jsx-key */
import { doc, getDoc } from 'firebase/firestore';
import { useLoaderData } from 'react-router-dom';
import { db } from '../config/firebase';
import ImageSlider from '../components/ImageSlider';
import { GoHeart } from 'react-icons/go';
import { useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
const ProductInfo = () => {
	const [sizeActive, setSizeActive] = useState(0);
	const [colorActive, setColorActive] = useState(0);
	const product = useLoaderData();

	return (
		<div className='container'>
			<div className='w-full h-[80vh] md:flex justify-between items-center gap-8 mt-7'>
				<div className=''>
					<ImageSlider imageUrl={product.image} />
				</div>
				<div className='bg-[#EFEFEF] w-full p-7 rounded-[45px]'>
					<div className='flex justify-between items-center'>
						<h1 className='text-xl md:text-2xl'>{product.title}</h1>
						<p className='font-bold text-base md:text-xl'>${product.price}</p>
					</div>
					<h2 className='font-semibold text-base mt-5 md:text-xl'>Size</h2>
					<ul className='flex gap-6 mt-5 w-[300px]'>
						{product.size.map((el, idx) => (
							<li
								onClick={() => setSizeActive(idx)}
								key={idx}
								className={`flex items-center justify-center w-11 h-11 border border-gray-500 rounded-full text-sm cursor-pointer  shadow-md transition-all ease-out duration-300  font-semibold md:w-14 md:h-14 ${
									sizeActive === idx ? ' bg-slate-600 text-white' : 'text-gray-500 hover:text-black'
								}`}
							>
								{el}
							</li>
						))}
					</ul>
					<h2 className='font-semibold text-base mt-5 md:text-xl'>Color</h2>
					<ul className='flex gap-6 mt-5 w-[300px]'>
						{product.color.map((el, idx) => (
							<li
								onClick={() => setColorActive(idx)}
								key={idx}
								className={`flex items-center justify-center w-11	 h-11 border border-gray-500 rounded-full text-sm cursor-pointer text-gray-500 shadow-md transition-all ease-out duration-300 hover:text-black font-semibold md:w-14 md:h-14 ${
									colorActive === idx ? 'bg-slate-600' : ''
								}`}
							>
								<span style={{ background: el }} className={`p-2  rounded-full`}></span>
							</li>
						))}
					</ul>
					<h2 className='font-semibold text-base mt-5 md:text-xl'>Description</h2>
					<p className=' mt-3 text-sm '>{product.description}</p>
					<div className='flex items-center justify-between mt-5 gap-14'>
						<button className='py-4 px-20 w-full bg-black opacity-90 text-white font-semibold rounded-full hover:opacity-100 transition-all ease-in-out duration-500'>
							Add to cart
						</button>
						<GoHeart className='text-3xl md:text-3xl cursor-pointer' />
					</div>
				</div>
				<div className='pt-20'></div>
			</div>
		</div>
	);
};

const productLoader = async ({ params }) => {
	const ref = doc(db, 'product', params.id);
	const res = await getDoc(ref);
	const data = res.data();
	return data;
};

export { ProductInfo as default, productLoader };
