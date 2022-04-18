import React from 'react';
import './Mystory.css'

const Mystory = () => {
    return (
        <div className='container my-story-container'>
            <h4 className='text-secondary services-title mb-0 text-center'> My story</h4>
            <div className='d-flex justify-content-center mb-3'><div style={{ height: '1px' }} className='bg-secondary w-25 text-center'></div></div>
            <div className='row'>
                <div className='col-lg-6 mb-5'>
                    <h2>Smith & Click  is a Wedding & Portrait Studio</h2>
                    <br />
                    <div className='row'>
                        <div className='col-4'>
                            <img className='img-fluid' src="https://matchthemes.com/demohtml/tilia/images/home/awards-1.png" alt="" />
                        </div>
                        <div className="col-4">
                            <img className='img-fluid' src="https://matchthemes.com/demohtml/tilia/images/home/awards-2.png" alt="" />
                        </div>
                        <div className="col-4">
                            <img className='img-fluid' src="https://matchthemes.com/demohtml/tilia/images/home/awards-3.png" alt="" />
                        </div>

                    </div>
                </div>

                <div className='col-lg-6 mt-3'>
                    <div className='ms-5'>
                        <p>I  love photography and travel for meeting new beautiful people all over the world. I photographs people and events at destinations across the globe.</p>
                        <p>Tecnical knowledge, never-ending creativity, and an empathetic personality made me known as one of the best photographers and photo educators in the world.</p>
                        <div>
                            <ul>
                                <li>I love what I do</li>
                                <li>we are transparent</li>
                                <li>I listen to your needs</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Mystory;