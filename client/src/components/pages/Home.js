import React from 'react';
import Contacts from '../contacts/Contacts';

const Home = () => {
	return (
		<div classNmae='grid-2'>
			<div>{/* ContactForm */}</div>
			<div>
				<Contacts />
			</div>
		</div>
	);
};

export default Home;
