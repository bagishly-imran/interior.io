import React from 'react';
// import {substring} from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';
import '../sass/AboutUs.scss';


const AboutUs = props => {

    return(
        <section className = "about-us-section-area container">

            <div className = "section-one col-6" data-aos="fade-right">
                <h3 className = "about-us-caption">
                    We work side by side with you to create exceptional spaces.
                </h3>
                <div className = "counts">

                    {
                        props.counters.map(counts => (
                            <div key = {counts.id} className = "counts-single">
                                <span className = "count"><CountUp end = {counts.number} duration = {counts.duration}/> {counts.plus}</span>
                                <p className = "count-paragraph">{counts.label}</p>       
                            </div>
                        ))
                    }

                </div>
            </div>

            <div className = "section-two col-6" data-aos="fade-left">
                <p className = "about-us-paragraph">
                    With over 50 years of combined experience, our mission is to design with your values and vision in mind. 
                    We’re out to create purposeful spaces that balance art and creativity with science and strategy.
                </p>
                <Link to = '/' className = "about-us-btn" rel="noopener">
                    More About Us
                </Link>
            </div>

        </section>
    )
}

const mapStateToProps = state => {
    return {
        counters: state.counters
    }
}

// export default AboutUs;

export default connect(mapStateToProps)(AboutUs);