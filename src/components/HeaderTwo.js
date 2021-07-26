import React from 'react';
import '../sass/HeaderTwo.scss';
import { Link } from 'react-router-dom';


const HeaderTwo = () => {
    return(
        <div className = "header-two">
            <div className = "hero-caption container">
                <h1 className ="hero-text">
                    My home is <u className ="hero-undrline">almost put together,</u> but I could really use a new rug.
                </h1>
                <Link to = '/interior.io' className = "hero-btn" rel="noopener" data-aos="fade-up">Check Our Services</Link>
            </div>
        </div>
    )
}

export default HeaderTwo;