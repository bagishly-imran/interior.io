import React from 'react'
import '../sass/WanToWorkArea.scss';
import {Link} from 'react-router-dom';

function WanToWorkArea() {
    return(
        <div className = "wan-to-work-area">
            <div className = "wantowork container">
                <div className = "wantowork-section-one" data-aos="flip-down">
                    <h2 className = "wantowork-h2">
                        Any help needed?
                    </h2>
                    <p className = "wantowork-p">
                        Vestibulum ante ipsum primis in faucibus orci luctus et <br/>
                        ultrices posuere cubilia.
                    </p>
                </div>
                <div className = "wantowork-section-two">
                    <Link to = '/interior.io' className = "contact-us-btn">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default WanToWorkArea;