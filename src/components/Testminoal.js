import React from 'react';
import {useSelector} from 'react-redux';
import '../sass/Testminoial.scss';
import Slider from 'react-slick';

const Testminoial =  props => {


    const testminoials = useSelector(state => state.testminoials)

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


    return(
        <div className = "testminoial">
            <div className = "testminoial-section container">

            <div className = "d-flex justify-content-center pb-4">
                <h2>Customer testimonial</h2>
            </div>                    

            <Slider {...settings}>
                    
                    {
                        testminoials.map(testminoial => (
                            <div key = {testminoial.id} className = "testminoial-card">
                                <div className = "testminoial-stars nav">
                                    <i className ="bi bi-star-fill"></i>
                                    <i className ="bi bi-star-fill"></i>
                                    <i className ="bi bi-star-fill"></i>
                                    <i className ="bi bi-star-fill"></i>
                                    <i className ="bi bi-star-fill"></i>
                                </div>
                                <div>
                                    <h1 className = "testinoial-comment-caption">
                                        {testminoial.title}
                                    </h1>
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

export default  Testminoial; 