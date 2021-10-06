import React from 'react';
import { Link, useLocation } from 'react-router-dom'


function Nav() {
    const location = useLocation();
    return (
        <>
            <div style={{ background: '#343a40' }}>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark container">
                    <Link className="navbar-brand" to="/">React</Link>
                    <ul className="navbar-nav">
                        {location.pathname === "/admin" || location.pathname === "/profile" ?
                            (<>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin">Admin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li></>) : (<Link className="navbar-brand" to="/policy">Privacy-Ploicy</Link>)
                        }
                    </ul>

                    {/* 
                    {localStorage.getItem("user-token") === null ? null :
                        (<ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>

                        </ul>)
                    } */}


                </nav>
            </div>
        </>
    );
}

export default Nav;