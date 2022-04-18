import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = name => {
        navigate(`/service/${name}`);
    }
    // console.log(props.service)
    return (

        < div className='container-fluid responsive-service-container'>
            <Card className='pb-2'>
                <Card.Img className=' img-fluid' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <b> Price:</b> ${price}
                    </Card.Text>
                    <Button onClick={() => navigateToServiceDetail(name)} variant="primary">{name}</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Service;