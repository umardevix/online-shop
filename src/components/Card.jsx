/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { GoArrowRight, GoHeart, GoHeartFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Card = ({ id, title, price, image }) => {
	const [like, setLike] = useState(false);

	return (
		<div className='w-[160px] my-4 mr-4 sm:w-[250px] sl:w-[250px]	 md:w-[270px] lg:w-[300px] py-8 px-5 bg-[#EFEFEF] rounded-[45px] shadow-lg inline-block  '>
			<div className='flex justify-between items-center'>
				<div>
					<h3 className='text-base  font-semibold sl:text-sm md:text-base'>{title}</h3>
					<p className='font-extrabold tracking-wide text-lg sl:text-sm md:text-base'>${price}</p>
				</div>
				<div>
					{like ? (
						<GoHeartFill className='text-2xl text-red-600 cursor-pointer' />
					) : (
						<GoHeart className='text-2xl text-gray-500 cursor-pointer' />
					)}
				</div>
			</div>
			<div className='w-full mt-5 p-4 flex flex-col items-center justify-center'>
				<img
					className='w-[250px] rotate-[25deg] filter drop-shadow-3xl'
					src={`${image[0]}`}
					alt=''
				/>
			</div>
			<div className='flex justify-end mt-6'>
				<Link to={`/product-info/${id}`}>
					<button className='w-11 h-11 rounded-full bg-slate-950 flex flex-col justify-center items-center'>
						<GoArrowRight className='text-3xl text-white' />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Card;
