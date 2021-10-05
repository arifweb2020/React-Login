import React from 'react';


function Admin(props) {

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