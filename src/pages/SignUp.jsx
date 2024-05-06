/* eslint-disable no-unused-vars */
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const { user, signUp, signInWithGoogle } = UserAuth();

	// console.log(user);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signUp(email, password);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const signInGoogle = async () => {
		try {
			await signInWithGoogle(email, password);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='flex justify-center items-center w-screen h-[70vh] p-4x'>
			<form
				onSubmit={handleSubmit}
				className='bg-white w-[400px] p-10 rounded-2xl flex flex-col gap-4 text-center shadow-lg'
			>
				<h1 className='font-extrabold text-xl'>Sign Up</h1>
				<input
					onChange={(e) => setEmail(e.target.value)}
					className='py-2 px-3 rounded-md bg-slate-500 text-white outline-none'
					type='email'
					placeholder='Email...'
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					className='py-2 px-3 rounded-md bg-slate-500 text-white outline-none'
					type='password'
					placeholder='Password...'
				/>

				<button type='submit' className='py-3 bg-slate-950 rounded-md text-white font-semibold'>
					Sign Up
				</button>
				<p className='text-sm font-semibold'>
					With Google
					<Link className='text-blue-500 underline' to='/login'>
						Login
					</Link>
				</p>
				<div onClick={signInGoogle} className='flex flex-col items-center justify-center gap-2'>
					Sign in with Google
					<FcGoogle className='text-3xl cursor-pointer' />
				</div>
			</form>
		</div>
	);
};

export default SignUp;
