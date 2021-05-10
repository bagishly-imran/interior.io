import React from 'react';
import {connect} from 'react-redux';
import '../sass/Testminoial.scss';
import Slider from 'react-slick';

const Testminoial =  props => {

    const settings = {
        infinite: true,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        backgroundColor: "red",
        responsive : [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow : 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow : 1
                }
            }
        ]
    }


    console.log(props.testminoials);

    return(
        <div className = "testminoial">
            <div className = "testminoial-section container" data-aos="fade-up">

            <div className = "d-flex justify-content-center pb-4">
                <h2>Customer testimonial</h2>
            </div>                    

            <Slider {...settings}>
                    
                    {
                        props.testminoials.map(testminoial => (
                            <div key = {testminoial.id} className = "testminoial-card">
                                <div className = "testminoial-stars nav">
                                    <i className ="bi bi-star-fill"></i>
                                    <i className ="bi bi-star-fill"></i>
                                    <i className ="bi bi-star-fill"></i>
                                    <i className ="bi bi-star-fill"></i>
                                    <i className ="bi bi-star-fill"></i>
                                </div>
                                <div>
                                    <h5 className = "testinoial-comment-caption">
                                        {testminoial.title}
                                    </h5>
                                    <p className = "testminoial-comment">
                                        {testminoial.comment}
                                    </p>
                                </div>
                                <span>
                                    {testminoial.fullname}
                                </span>
                            </div>
                        ))
                    }
        
                </Slider>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        testminoials : state.testminoials
    }
}

export default  connect(mapStateToProps)(Testminoial); 