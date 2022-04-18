import React from 'react';
import image from '../../images/About/rejaul-bg.png'
import './About.css'

const About = () => {
    return (
        <div className="background-image responsive-about-container">
            <div ></div>
            <div className='container about-container'>
                <div className='row'>

                    <div className='col-lg-6 d-flex align-items-center about-text-container'>
                        <div className=''>
                            <h2>Welcome to About, My name is</h2>

                            <h1 style={{ color: 'orange' }}>Rejaul Islam</h1>
                            <h4> Web devoloper</h4>
                            <p><ul>
                                <li>My goal is to be professional a Web devoloper.</li>
                                <li>To achieve my goal I will try my best.</li>
                                <li>In next six month I want to be a successful devoloper.</li>
                                <li>To be a successful devoloper, I will work hard day and night. </li>

                            </ul></p>
                        </div>
                    </div>
                    <div className='col-lg-6 my-5'>
                        <img className='img-fluid' src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;