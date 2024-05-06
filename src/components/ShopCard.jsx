/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import Card from './Card';

const ShopCard = ({ product, query }) => {
	const filtredItems = useMemo(() => {
		return product.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
	}, [product, query]);

	return (
		<div className='container'>
			<div className='relative flex items-center '>
				<div className='w-full h-full mt-3 sm:overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide md:flex justify-between gap-2 '>
					{filtredItems.map((item) => (
						<Card key={item.id} {...item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ShopCard;
