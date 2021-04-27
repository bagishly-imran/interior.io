import React from 'react';
import '../sass/AboutUs.scss';

function AboutUs() {
    return(
        <section className = "about-us-section-area container">

            <div className = "section-one col-6">
                <h3 className = "about-us-caption">
                    We work side by side with you to create exceptional spaces.
                </h3>
                <div className = "counts">
                    <div className = "count-one">
                        <span className = "count">450 +</span>
                        <p className = "count-paragraph">Successfully completed projects</p>       
                    </div>
                    <div className = "count-two">
                        <span className = "count">860</span>
                        <p className = "count-paragraph">Highly specialised employees</p>       
                    </div>
                </div>
            </div>

            <div className = "section-two col-6">
                <p className = "about-us-paragraph">
                    With over 50 years of combined experience, our mission is to design with your values and vision in mind. 
                    We’re out to create purposeful spaces that balance art and creativity with science and strategy.
                </p>
                <a href = "#" className = "about-us-btn" rel="noopener">
                    More About Us
                </a>
            </div>

        </section>
    )
}

export default AboutUs;