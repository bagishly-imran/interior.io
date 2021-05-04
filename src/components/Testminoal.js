import React from 'react';
import '../sass/Testminoial.scss';
import Slider from 'react-slick';

function Testminoial () {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        backgroundColor: "red"
    }

    return(
        <div className = "testminoial">
            <div className = "testminoial-section conatiner">

            <Slider {...settings}>
                    
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
        
                </Slider>

            </div>
        </div>
    )
}

export default  Testminoial; 