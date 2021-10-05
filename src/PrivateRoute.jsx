import { Route, Redirect } from 'react-router';
import {  useEffect, useState } from 'react';

const PrivateRoute = ({component: Component, ...rest}) => {
	const [authed, setAuthed] = useState(null)

	useEffect( () => {
		const token = localStorage.getItem("user-token")
		if(token && token !== "")
			setAuthed(true)
		else 
			setAuthed(false)
	}, [])

	return (
		<Route 
			{...rest}
			render={ (props) => authed === true? (
				<Component {...props}/>):
				(authed === false)? 
					<Redirect to={{pathname: '/', state: {from: props.location}}}/>
					: null
			}
		/>
	)
}

export default PrivateRoute;