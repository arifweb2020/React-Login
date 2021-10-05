import React from 'react';
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <>
            <div style={{ background: '#343a40' }}>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark container">
                    <Link className="navbar-brand" to="/">React</Link>
                    {/* <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Accounts</Link>
                        </li>
                        
                    </ul> */}
                   
                </nav>
            </div>
        </>
    );
}

export default Nav;