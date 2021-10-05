import React, { useState , useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin(props) {

    let loggedIn = false
    const [users, setUsers] = useState({
        user: "",
        password: "",
        loggedIn
    });

    useEffect (()=>{
        const token = localStorage.getItem("user-token")
        if (token === null){
            props.history.push("/")
        }
        else{
            props.history.push("/admin")
        }
    },[])


    const myInput = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }


    const myForm = async (e) => {

        e.preventDefault();

        const { user, pass } = users;

        if (user === "arif" && pass === "123") {
            localStorage.setItem("user-token", "vgcjhsdfgdfgdgfjhdsgfjdgfjds")
            setUsers({ loggedIn: true })
            setTimeout(() => {
                props.history.push("/admin")
                //return <Redirect to='/admin' />
            }, 2000);
            toast.success("login successfully", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
                pauseOnHover: false,
            });

        }
        else {
            setTimeout(() => {
                props.history.push("/")
            }, 2000);
            toast.error("wrong username or password", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
                pauseOnHover: false,
            });
        }

    }

    return (
        <div className="container mt-5">
            <h1>Signin</h1>
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <form onSubmit={myForm}>
                        <div className="form-group">
                            <input type="text" placeholder="enter your name" name="user"
                                value={users.user}
                                onChange={myInput} className="form-control" /></div>
                        <div className="form-group">
                            <input type="password" placeholder="enter your password" name="pass"
                                value={users.pass}
                                onChange={myInput} className="form-control" /></div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-md btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
            />
        </div>
    );
}

export default Signin;