import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../Types';

const ContactState = (props) => {
	const initalState = {
		contacts: [
			{
				type: 'personal',
				id: 1,
				name: 'Jack Danson',
				email: 'jd@gmail.com',
				phone: '5551389',
				user: '5db97d6099d6a23b50016fdf',
				date: '2019-11-04T13:13:24.314Z',
				__v: 0,
			},
			{
				type: 'personal',
				id: 2,
				name: 'Bob Daniels',
				email: 'bd@gmail.com',
				phone: '5551355',
				user: '5db97d6099d6a23b50016fdf',
				date: '2019-11-04T13:13:00.928Z',
				__v: 0,
			},
			{
				type: 'professional',
				id: 3,
				name: 'Sarah Smith',
				email: 'ss@gmail.com',
				phone: '5551347',
				user: '5db97d6099d6a23b50016fdf',
				date: '2019-11-04T13:12:23.013Z',
				__v: 0,
			},
		],

		current: null,
		filtered: null,
	};

	const [state, dispatch] = useReducer(contactReducer, initalState);

	// Add contact
	const addContact = (contact) => {
		contact.id = uuid.v4();
		dispatch({
			type: ADD_CONTACT,
			payload: contact,
		});
	};

	// Delete contact
	const deleteContact = (id) => {
		dispatch({
			type: DELETE_CONTACT,
			payload: id,
		});
	};

	// Set current contact
	const setCurrent = (contact) => {
		dispatch({
			type: SET_CURRENT,
			payload: contact,
		});
	};

	//Clear curr cont
	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT,
		});
	};

	//Upd contact
	const updateContact = (contact) => {
		dispatch({
			type: UPDATE_CONTACT,
			payload: contact,
		});
	};

	//Filter Contacts
	const filterContacts = (text) => {
		dispatch({
			type: FILTER_CONTACTS,
			payload: text,
		});
	};

	//Clear filter
	const clearFilter = () => {
		dispatch({
			type: CLEAR_FILTER,
		});
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;