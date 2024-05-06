/* eslint-disable no-unused-vars */
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { TbSmartHome, TbShoppingCart } from 'react-icons/tb';
import { GrFavorite } from 'react-icons/gr';
import { HiOutlineUser } from 'react-icons/hi2';
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {
	const { user, logOut } = UserAuth();

	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logOut();
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<nav className='w-full flex  justify-between gap-4	 items-center py-6 px-7 sm:fixed  left-0 bottom-0 z-10  bg-white   md:relative '>
			<NavLink to='/'>
				<TbSmartHome />
				Home
			</NavLink>
			<NavLink to='cart'>
				<TbShoppingCart />
				Cart
			</NavLink>
			<NavLink to='favorites'>
				<GrFavorite />
				Favorites
			</NavLink>
			{user?.email ? (
				<Link onClick={handleLogout} className='w-5 sm:mr-7 md:ml-7'>
					<img className='rounded-full' src={`${user?.photoURL}`} alt='' />
					Logout
				</Link>
			) : (
				<NavLink to='signup'>
					<HiOutlineUser />
					SignUp
				</NavLink>
			)}
		</nav>
	);
};

export default NavBar;
