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
                        Appointments
                    </li>
                    <li className="nav-item">
                        Store
                    </li>
                    <li className="nav-item">
                        Login
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;