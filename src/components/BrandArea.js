import React from 'react';
import '../sass/BrandArea.scss';

const BrandArea = () =>  {
    return(
        <div className = "brand-area container">
            <div className = "brand-title-content">
                <h2 className = "brand-title">
                    “Franclin managed everything from furniture selection, 
                    purchase, delivery and assembly, and have been a pleasure working with”
                </h2>

                <p className = "brand-paragraph mt-4">
                    - Shonda Leer, Chief of Staff at Franclin Technologies
                </p>

            </div>

            <div className = "brands-logo">
                <img className = "brand-logo" src = "https://preview.colorlib.com/theme/franclin/assets/img/gallery/brand1.png" alt = "Brand"/> 
                <img className = "brand-logo" src = "https://preview.colorlib.com/theme/franclin/assets/img/gallery/brand2.png" alt = "Brand"/> 
                <img className = "brand-logo" src = "https://preview.colorlib.com/theme/franclin/assets/img/gallery/brand3.png" alt = "Brand"/> 
                <img className = "brand-logo" src = "https://preview.colorlib.com/theme/franclin/assets/img/gallery/brand4.png" alt = "Brand"/> 
            </div> 

            <div className = "brands-logo-carousel">

                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <center>
                                <img src="https://preview.colorlib.com/theme/franclin/assets/img/gallery/brand1.png"  alt="Brand"/>
                            </center>
                        </div>
                        <div className="carousel-item">
                            <center>
                                <img src="https://preview.colorlib.com/theme/franclin/assets/img/gallery/brand2.png"  alt="Brand"/>
                            </center>
                        </div>
                        <div className="carousel-item">
                            <center>
                                <img src="https://preview.colorlib.com/theme/franclin/assets/img/gallery/brand3.png"  alt="Brand"/>
                            </center>
                        </div>
                        <div className="carousel-item">
                            <center>
                                <img src="https://preview.colorlib.com/theme/franclin/assets/img/gallery/brand4.png"  alt="Brand"/>
                            </center>
                        </div>
                    </div>

                </div> 

            </div>

        </div>
    )
}

export default BrandArea;