/* eslint-disable no-undef */
import ContentLoader from 'react-content-loader';
const MyScleton = () => {
	return (
		<div className='flex'>
			<ContentLoader
				speed={2}
				width={270}
				height={300}
				viewBox='0 0 270 300'
				backgroundColor='#f3f3f3'
			>
				<rect x='10' y='14' rx='0' ry='0' width='254' height='264' />
			</ContentLoader>
		</div>
	);
};

export default MyScleton;
