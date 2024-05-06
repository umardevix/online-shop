/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = ({ setQuery }) => {
	return (
		<header className='w-full bg-white shadow-slate-200 shadow-sm py-2 px-3'>
			<div className='container'>
				<div className=' flex items-center gap-3 justify-between sm:block text-center md:flex'>
					<Link to='/'>
						<h1 className='text-2xl font-bold tracking-wide sm:mb-3 md:m-0'>Ilodera</h1>
					</Link>
					<input
						onChange={(e) => setQuery(e.target.value)}
						className=' text-sm rounded-full border-2 outline-none sm:w-full p-2 md:w-[300px]  '
						type='text'
						placeholder='search something...'
					/>
					<div>
						<NavBar />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
