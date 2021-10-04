import React from 'react';
import { Link } from 'react-router-dom'


function Nav({ loginCondition, personalPage }) {
    return (
        <>
            <div style={{ background: '#343a40' }}>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark container">
                    <Link className="navbar-brand" to="/">React</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Accounts</Link>
                        </li>
                        <li className="nav-item">
                            {personalPage}
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {loginCondition}
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Nav;