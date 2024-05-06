/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useState } from 'react';

const Category = ({ items, product }) => {
	const [item, setItem] = useState(product);

	const filterItems = (categ) => {
		const result = product.filter((cat) => cat.category === categ);

		setItem(result);
	};
	return (
		<div className='container'>
			<div className='mt-6'>
				<button
					onClick={() => filterItems('man')}
					className='py-3 px-4 text-gray-500 text-base font-semibold border-2 border-gray-300 mr-4 rounded-full cursor-pointer transition-all ease-in-out duration-700'
				>
					Men
				</button>
			</div>
		</div>
	);
};

export default Category;
