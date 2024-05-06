/* eslint-disable react/prop-types */
const Button = ({ category, handleFilterButtonClick }) => {
	return (
		<button
			onClick={() => handleFilterButtonClick(category)}
			className='py-3 px-4 text-gray-500 text-base font-semibold border-2 border-gray-300 mr-4 rounded-full cursor-pointer'
		>
			{category}
		</button>
	);
};

export default Button;
