import React from 'react';
import { Link } from 'react-router-dom'


function Nav({ loginCondition }) {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link className="navbar-brand" to="/">React</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Accounts</Link>
                    </li>
                    <li className="nav-item">
                        {loginCondition}
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;