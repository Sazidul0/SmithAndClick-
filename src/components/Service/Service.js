import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    // console.log(props.service)
    return (

        < div className=''>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                    <Button variant="primary">{name}</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Service;