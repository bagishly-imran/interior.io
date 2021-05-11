import React from 'react';
import {connect} from 'react-redux';
import '../sass/ServicesArea.scss';
// import Service1Svg from '../images/services1.svg';
// import Service2Svg from '../images/services2.svg';
// import Service3Svg from '../images/services3.svg';
import {Link} from 'react-router-dom';

const ServicesArea = props => {

    const {services} = props;

    console.log(services);

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

const mapStateToProps = state => {
    return{ 
        services: state.services
    }
}

export default connect(mapStateToProps)(ServicesArea);