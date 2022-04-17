import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '400px' }} className='w-100 d-flex justify-content-center align-items-center'>


            <>

                <Button variant="primary d-flex align-items-center" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="lg"
                        role="status"
                        aria-hidden="true"
                    />
                    <h3 className=''>Loading...</h3>
                </Button>
            </>


        </div>
    );
};

export default Loading;