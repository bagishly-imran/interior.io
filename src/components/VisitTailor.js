import React from 'react';
import '../sass/VisitTailor.scss';
import {Link} from 'react-router-dom';

const VisitTailor = () => {
    return(
        <div className =" visit-tailor-area">
            <div className = "visit-content-image">
               <img src = "https://preview.colorlib.com/theme/franclin/assets/img/gallery/visit_bg.jpg" alt = "visit"/> 
            </div>
            <div className = "tailor-details container">
                <h1 className = "tailor-title">Personalized design solutions</h1>
                <p className = "tailor-description">Designed by Franclin</p>
                <div className = "tailor-stars nav">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                </div>
                <p className = "tailor-text">
                    With over 50 years of combined experience, our mission is to design <br/>
                    with your values and vision in mind. We’re out to create purposeful <br/>
                    spaces that balance art and creativity with science and strategy.
                </p>
                <div className = "price-wrapper">
                    <div className = "single-price mr-50">
                        <span className = "single-one">Budget</span>
                        <span className = "single-two">$5,000</span>
                    </div> 
                    <div className = "single-price">
                        <span className = "single-one">Style</span>
                        <span className = "single-two">Glam, Bohemian</span>
                    </div>
                </div>

                <Link className = "tailor-link" to = '/interior.io' >View Gallery</Link>

            </div>
        </div>
    )
}

export default VisitTailor;