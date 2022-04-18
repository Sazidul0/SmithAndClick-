import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../images/carosol/carousel01.png'
import carousel2 from '../../../images/carosol/carousel02.png'
import carousel3 from '../../../images/carosol/carousel03.png'
import Mystory from '../Mystory/Mystory';
import Services from '../Services/Services';
import './Home.css'


const Home = () => {
    return (
        <div className='responsive-home-container'>

            <div className='mb-5 mt-3'>
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
                <h1 className='text-center mt-5 text-primary services-title'>My Services</h1>
            </div>
            <div className="d-flex justify-content-center">
                <Services></Services>

            </div>
            <br />

            <Mystory></Mystory>
        </div>
    );
};

export default Home;