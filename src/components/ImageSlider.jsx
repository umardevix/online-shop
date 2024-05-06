/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const ImageSlider = ({ imageUrl }) => {
	const [imageIndex, setImageIndex] = useState(0);

	const shopNextImage = () => {
		setImageIndex((index) => {
			if (index === imageUrl.length - 1) return 0;
			return +1;
		});
	};
	const shopPrevImage = () => {
		setImageIndex((index) => {
			if (index === 0) return imageUrl.length - 1;
			return index - 1;
		});
	};

	return (
		<div className=''>
			<div className=' relative w-full h-[250px] bg-[#EFEFEF] shadow-lg rounded-[45px] p-8 flex items-center justify-center md:h-[300px] md:w-[600px]'>
				<FaAngleRight
					onClick={shopNextImage}
					className='absolute right-3 text-4xl opacity-40 cursor-pointer transition-all ease-in duration-300 hover:opacity-75'
				/>
				<img
					style={{ translate: `${imageIndex}%` }}
					className='image-slider'
					src={imageUrl[imageIndex]}
					alt=''
				/>
				<FaAngleLeft
					onClick={shopPrevImage}
					className='absolute left-3 text-4xl opacity-40 cursor-pointer transition-all ease-in duration-300 hover:opacity-75'
				/>
			</div>

			<div className='py-5'>
				<ul className='flex items-center gap-4'>
					{imageUrl.map((url, idx) => (
						<li
							key={idx}
							className='bg-[#EFEFEF] p-5 rounded-[20px] w-[75px] shadow-lg md:w-[100px] '
							onClick={() => setImageIndex(idx)}
						>
							<img
								className='rotate-[30deg] w-full cursor-pointer filter drop-shadow-md'
								src={url}
								alt=''
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ImageSlider;
