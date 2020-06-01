import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from '../Types';

const AuthState = (props) => {
	const initalState = {
		token: localStorage.getItem('token'),
		user: null,
		isAuthenticated: null,
		loading: true,
		error: null,
	};

	const [state, dispatch] = useReducer(authReducer, initalState);

	//Load User
	const loadUser = () => console.log('loadUser');

	// Register User
	const register = async (formData) => {
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		};

		try {
			const res = await axios.post('/api/users', formData, config);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: REGISTER_FAIL,
				payload: error.response.data.msg,
			});
		}
	};

	// Login User
	const login = () => console.log('login');

	// Logout
	const logout = () => console.log('logout');

	// Clear Errors
	const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				register,
				loadUser,
				login,
				logout,
				clearErrors,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
