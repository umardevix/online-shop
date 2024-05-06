/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { GoArrowRight, GoHeartFill } from 'react-icons/go';
import { Link } from 'react-router-dom';

const SavedProduct = () => {
	const [product, setProduct] = useState([]);

	return (
		<div className='container'>
			<div className='relative flex items-center '>
				<div className='w-full h-full mt-3 sm:overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide md:flex justify-between gap-2 '>
					{product.map((item) => (
						<div
							key={item.id}
							className='w-[160px] my-4 mr-4 sm:w-[250px] sl:w-[250px]	 md:w-[270px] lg:w-[300px] py-8 px-5 bg-[#EFEFEF] rounded-[45px] shadow-lg inline-block  '
						>
							<div className='flex justify-between items-center'>
								<div>
									<h3 className='text-base  font-semibold sl:text-sm md:text-base'>{item.title}</h3>
									<p className='font-extrabold tracking-wide text-lg sl:text-sm md:text-base'>
										${item.price}
									</p>
								</div>
								<div onClick={() => deleteFavorite(item.id)}>
									<GoHeartFill className='text-2xl text-red-600 cursor-pointer' />
								</div>
							</div>
							<div className='w-full mt-5 p-4 flex flex-col items-center justify-center'>
								<img
									className='w-[250px] rotate-[25deg] filter drop-shadow-3xl'
									src={`${item.image[0]}`}
									alt=''
								/>
							</div>
							<div className='flex justify-end mt-6'>
								<Link to={`/product-info/${item.id}`}>
									<button className='w-11 h-11 rounded-full bg-slate-950 flex flex-col justify-center items-center'>
										<GoArrowRight className='text-3xl text-white' />
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SavedProduct;
