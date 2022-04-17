import React from 'react';
import Service from '../../Service/Service';
import image1 from '../../../images/services/Engagement.png';
import image2 from '../../../images/services/wedding.png';
import image3 from '../../../images/services/family.png'
import './Services.css'

const Services = () => {
    const services = [
        { id: 1, name: "Engagement", price: 1260, description: "The question was popped, you have said yes - it's a big deal. Get photographic evidence of the two of you in this giddy moment to remember forever.", img: image1 },
        { id: 2, name: "Wedding", price: 3628, description: "On your wedding night your only job is to have a good time, no matter how blurry things get. I've got you covered.", img: image2 },
        { id: 3, name: "Family", price: 1190, description: "Got a new addition to the family? Whether its a fur-baby, or a real baby, let's take a snapshot in the history of your family.", img: image3 }
    ]


    return (
        <div className='services-container ms-5 me-5'>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;