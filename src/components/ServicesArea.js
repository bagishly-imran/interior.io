import React from 'react';
import {useSelector} from 'react-redux';
import '../sass/ServicesArea.scss';
import {Link} from 'react-router-dom';

const ServicesArea = props => {


    const services =  useSelector(state => state.services)


    return(
        <div className = "services-area container" data-aos="fade-up">
            
            <h2 className = "service-title">Interior design is for everyone.</h2>

            <div className = "services row">

                {
                    services.map(service => (
                        <div key = {service.id} className = "my-card">

                        <img src = {service.image} alt = {service.image}/>
                            <Link className = "service-btn" to = '/interior.io'>{service.linkName}</Link>
                            <p className = "service-paragraph">
                                {service.paragraph}
                            </p>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}


export default ServicesArea;