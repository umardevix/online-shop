/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = ({ setProduct, setQuery }) => {
	return (
		<>
			<Header setQuery={setQuery} setProduct={setProduct} />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
