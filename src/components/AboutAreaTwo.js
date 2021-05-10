import React from 'react';
import {Link} from 'react-router-dom';
import '../sass/AboutAreaTwo.scss';

export default function AboutAreaTwo() {
    return(
        <div className = "about-area-two">
            <div className = "caption-about-two container" data-aos="zoom-in">
                <h1 className = "caption-h1">
                    We work with more than 200 <br/>
                    vendors, big and small.
                </h1>
                <p className = "caption-paragraph">
                    With over 50 years of combined experience, our mission is to design with your <br/> 
                    values and vision in mind. We’re out to create purposeful spaces that balance art <br/>
                    and creativity with science and strategy.
                </p>
                <Link to = '/' className = "dissmis-btn">Let's Discuss</Link>
            </div>
            <div className = "about-content-video">

                <a className = "video-btn btn-shape-animation" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                    <i className="bi bi-play-fill"></i>
                </a>

                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content bg-transparent border-0">

                            <div className="modal-body p-0">
                                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/tn_V3DuB9hA"></iframe>
                            </div>


                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}