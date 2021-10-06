import React from 'react';

function Login(props) {
    const login = () =>{
        props.history.push('/invest')
    }
    return (
        <div className="container mt-4">
            <div className="col-md-4 offset-md-4 mt-5">
            <h2>Login</h2>
            <input type="text" placeholder="enter your number" className="form-control"/>
            <button className="btn btn-md btn-primary mt-2" onClick={login}>Login</button>
            </div>
            
        </div>
    );
}

export default Login;