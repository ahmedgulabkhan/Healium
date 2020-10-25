import React from "react";
import './header.styles.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark">
            <Link to="/" className="navbar-brand">
                <strong>Healium</strong>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/appointments' className="nav-link custom-nav-link">Appointments</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/store' className="nav-link custom-nav-link">Store</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className="nav-link custom-nav-link">Login/Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;