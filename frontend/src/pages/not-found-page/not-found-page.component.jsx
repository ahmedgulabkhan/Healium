import React from 'react';
import './not-found-page.styles.scss';

const NotFoundPage = () => {
    return (
        <div className="not-found-page-container container-fluid">
            <h1 className="error-404">404</h1>
            <h3>Oops! Page Not Found. The page you are looking for does not exist.</h3>
            <button type="button" className='custom-button'>Go Home</button>
        </div>
    );
}

export default NotFoundPage;