import React, { useState } from 'react';
import axios from 'axios'

function Admin(props) {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    const { username, email, password } = user;
    const myInput = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("https://www.skyfillconsulting.com/register.php", user);
        props.history.push("/profile");
    };

    const logout = () => {
        window.localStorage.removeItem("user-token")
        window.location.href = '/';
    }

    return (
        <div className="container mt-4">
            <h1>Admin Page</h1>
            <button className="btn btn-md btn-warning" onClick={logout}>Logout</button>
            <div className="row mt-4">
                <div className="col-lg-6 offset-lg-3">
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input type="text" placeholder="enter your name" name="username"
                                value={username}
                                onChange={myInput} className="form-control" required/></div>
                        <div className="form-group">
                            <input type="email" placeholder="enter your email" name="email"
                                value={email}
                                onChange={myInput} className="form-control" required/></div>
                        <div className="form-group">
                            <input type="password" placeholder="enter your password" name="password"
                                value={password}
                                onChange={myInput} className="form-control" required/></div>
                        <button type="submit" className="btn btn-primary btn-block">Add User</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Admin;