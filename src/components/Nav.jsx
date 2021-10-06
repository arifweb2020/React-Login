import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <div style={{ background: '#343a40' }}>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark container">
                    <Link className="navbar-brand" to="/">React-Main</Link>
                    <ul className="navbar-nav">
                        {
                            window.location.pathname === "/login" ? null :
                                (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">about</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/service">services</Link>
                                        </li>
                                    </>
                                )
                        }
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Nav;