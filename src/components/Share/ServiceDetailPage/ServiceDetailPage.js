import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetailPage = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to service: {serviceId}</h2>
        </div>
    );
};

export default ServiceDetailPage;