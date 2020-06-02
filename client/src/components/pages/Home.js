import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated } = authContext;

	useEffect(() => {
		console.log('loadUser');

		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			{isAuthenticated && (
				<div className='grid-2'>
					<div>
						<ContactForm />
					</div>
					<div>
						<ContactFilter />
						<Contacts />
					</div>
				</div>
			)}
			{!isAuthenticated && (
				<h1 style={{ 'text-align': 'center' }}>You are not logged in</h1>
			)}
		</div>
	);
};

export default Home;
