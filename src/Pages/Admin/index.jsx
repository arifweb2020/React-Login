import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'

function Admin(props) {
    const [loggedIn, setLoggedIn] = useState(true)
    const token = localStorage.getItem("user-token")
    if (token === null) {
        setLoggedIn(false)
    }


    if (loggedIn === false) {
        props.history.push("/")
    }



    // if (loggedIn === false){
    //     return <Redirect to="/" />
    // }
    const logout = () => {
        window.localStorage.removeItem("user-token")
        window.location.href = '/';
    }

    return (
        <div>
            <h1>Admin Page</h1>
            <button className="btn btn-md btn-warning" onClick={logout}>Logout</button>
        </div>
    );
}

export default Admin;