/* eslint-disable react/prop-types */
import ShopCard from '../components/ShopCard';

const Product = ({ product, query, setProduct, savedProduct, like }) => {
	return (
		<div className='container'>
			<div className=' flex flex-wrap'>
				<ShopCard
					like={like}
					query={query}
					savedProduct={savedProduct}
					setProduct={setProduct}
					product={product}
				/>
			</div>
			<div className='pb-20'></div>
		</div>
	);
};

export default Product;
