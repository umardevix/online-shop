/* eslint-disable react/jsx-key */
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { db } from './config/firebase';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductInfo, { productLoader } from './pages/ProductInfo';
import SignUp from './pages/SignUp';
import Favorites from './pages/Favorites';

function App() {
	const [product, setProduct] = useState([]);
	const [query, setQuery] = useState('');
	// const [like, setLike] = useState(false);
	// const [savedFavorites, setSavedFavorites] = useState(false);

	const productColectionRef = collection(db, 'product');

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await getDocs(productColectionRef);
				const filtredData = res.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));
				setProduct(filtredData);
			} catch (error) {
				console.log(error);
			}
		};
		getProduct();
	}, []);

	// const savedProduct = async () => {
	// 	if (user?.email) {
	// 		setLike(!like);
	// 		setSavedFavorites(true);
	// 		await updateDoc(productID, {
	// 			favorites: arrayUnion({
	// 				id: product.id,
	// 				title: product.title,
	// 				image: product.image[0],
	// 			}),
	// 		});
	// 	} else {
	// 		alert('Please log in to save a movie');
	// 	}
	// };

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout setQuery={setQuery} setProduct={setProduct} />}>
				<Route index element={<Home query={query} product={product} />} />
				<Route path='/product' element={<Product query={query} product={product} />} />
				<Route path='/product-info/:id' element={<ProductInfo />} loader={productLoader} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
			</Route>,
		),
	);
	return <RouterProvider router={router} />;
}
export default App;
