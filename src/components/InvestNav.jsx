import React from 'react';
import { Link } from 'react-router-dom'

function InvestNav(props) {
    return (
        <>
            <div style={{ background: '#343a40' }}>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark container">
                    <Link className="navbar-brand" to="/invest">React-Invest</Link>
                    <ul className="navbar-nav">
                        {/* {window.location.pathname === "/invest" ? null :
                            (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/amount">Amount</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/redeem">Redeem</Link>
                                    </li>
                                </>
                            )

                        } */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/amount">Amount</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/redeem">Redeem</Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </>
    );
}

export default InvestNav;