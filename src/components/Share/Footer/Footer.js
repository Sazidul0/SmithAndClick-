import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-white bg-dark py-5 text-center mt-4'>
            <h2 className=' carousel-title'>Smith & Click</h2>
            <p><small>Copyright © {year}</small></p>
        </div>
    );
};

export default Footer;