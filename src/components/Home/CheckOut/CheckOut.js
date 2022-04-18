import React from 'react';
import './CheckOut.css'
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceId } = useParams();
    return (
        <div className='text-center checkout-container'>
            <h2>Welcome to Check Out</h2>
            <h2> Please Check Out: {serviceId}</h2>
        </div>
    );
};

export default CheckOut;