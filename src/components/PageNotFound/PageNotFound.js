import React from 'react';
import logo from '../../images/404error.png'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className='page-not-found'>
            <div className='text-center my-5'>
                <h2>Page Not Found</h2>

            </div>
            <div className='404-image d-flex justify-content-center'>
                <img className='w-50' src={logo} alt="" />
            </div>
        </div>
    );
};

export default PageNotFound;