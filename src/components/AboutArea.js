import React from 'react';
import '../sass/AboutArea.scss';
import AreaImg from '../images/about1.jpg';
import {Link} from 'react-router-dom';

const  AboutArea = () => {
    return(
        <div className = "about-area">
            <div className = "container area-content">
                <div className = "about-area-title">
                    <h1 className = "area-title">
                        Design the <br/>
                        home you love
                    </h1>
                    <p className = "area-paragraph">
                        With over 50 years of combined experience, our mission is to design with your values and vision in mind. 
                        We’re out to create purposeful spaces that balance art and creativity with science and strategy.
                    </p>
                    <Link className = "area-btn" to = '/interior.io'>Learn More</Link>
                </div>

                <div className = "about-area-image">
                    <img className ="image-fluid about-area-image" src = {AreaImg} alt = {AreaImg} />
                </div>
            </div>
        </div>
    )
}

export default AboutArea;