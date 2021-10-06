import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtecedRouting = ({ isAuth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth) return <Component {...props} />
                if (!isAuth) return <Redirect to={{ pathname: "/", state: { from: props.location } }} />

            }}
        />
    )
}

export default ProtecedRouting