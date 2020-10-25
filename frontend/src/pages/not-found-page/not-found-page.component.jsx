import React from 'react';
import './not-found-page.styles.scss';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="not-found-page-container container-fluid">
            <h1 className="error-404">404</h1>
            <h3>Oops! Page Not Found. The page you are looking for does not exist.</h3>
            <Link to="/"><button type="button" className='custom-button'>Go Home</button></Link>
        </div>
    );
}

export default NotFoundPage;