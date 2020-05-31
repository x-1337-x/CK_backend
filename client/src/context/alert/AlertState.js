import React, { useReducer } from 'react';
import uuid from 'uuid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../Types';

const AlertState = (props) => {
	const initalState = [];

	const [state, dispatch] = useReducer(alertReducer, initalState);

	//set alert
	const setAlert = (msg, type, timeout = 3000) => {
		const id = uuid.v4();
		dispatch({
			type: SET_ALERT,
			payload: { msg, type, id },
		});

		setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
	};

	return (
		<AlertContext.Provider
			value={{
				alerts: state,
				setAlert,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
