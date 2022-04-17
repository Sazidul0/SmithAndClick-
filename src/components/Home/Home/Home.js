import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../images/carosol/carousel01.png'
import carousel2 from '../../../images/carosol/carousel02.png'
import carousel3 from '../../../images/carosol/carousel03.png'
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>

            <div className='mb-4'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='carousel-title'>Smith & Click</h3>
                            <p>EMOTIONAL MOMENTS. EXCEPTIONALLY DOCUMENTED.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className='carousel-title'>Smith & Click</h3>
                            <p>EXCEPTIONAL WEDDING PHOTOGRAPHY,
                                PHOTOS THAT ILLUSTRATE THE BEST DAY OF YOUR LIFE.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className='carousel-title'>Smith & Click</h3>
                            <p>AN EXCEPTIONAL EXPERIENCE FOR ICONIC IMAGES.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <h2 className='text-center my-4 text-primary'>Services</h2>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;