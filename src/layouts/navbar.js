import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import '../sass/Navbar.scss';
import Logo from '../images/logo.png';





const Navbar = () => {

    const [open, setOpen] = useState(true); 
    
    return(
        <header className = "header">
            <div className = "header-one container">
                
                <div className = "menu-list menu-list-one nav">
                    <Link to = '/interior.io' className = "mnu-btn" rel="noopener">Home</Link>
                    <Link to = '/interior.io' className = "mnu-btn" rel="noopener">What We Do?</Link>
                    <Link to = '/interior.io' className = "mnu-btn" rel="noopener">Projects</Link>
                </div>

                <div className = "logo-capt">
                    <Link to = "/interior.io" rel="noopener" className = "logo">
                        <img className = "image-fluid" src= {Logo} alt = "FRANCLIN"/>
                    </Link> 
                </div>

                <div className = "menu-list menu-list-two nav">
                    <Link to = '/interior.io' className = "mnu-btn" rel="noopener">Blog</Link>
                    <Link to = '/interior.io' className = "mnu-btn" rel="noopener">Contact Us</Link>
                    <Link to = '/interior.io' className = "mnu-btn free-quote" rel="noopener">Free Quote</Link>
                </div>

                <div className = "menu-list burger-menu" 
                    
                    style = {open ? {transition: "0.3s ease-in-out", height: "0", padding: "0",} 
                    : {transition: "0.3s ease-in-out", padding: "15px 0", height: "250px",}}>
                    
                    <Link to = '/interior.io' className = "mnu-btn" rel="noopener">Home</Link>
                    <Link to = '/interior.io' className = "mnu-btn" rel="noopener">What We Do?</Link>
                    <Link to = '/interior.io' className = "mnu-btn" rel="noopener">Projects</Link>
                    <Link to = '/interior.io' className = "mnu-btn" rel="noopener">Blog</Link>
                    <Link to = '/interior.io' className = "mnu-btn" rel="noopener">Contact Us</Link>
                    <Link to = '/interior.io' className = "mnu-btn" rel="noopener">Free Quote</Link>
                </div>

                <div className = "burger-menu-button">
                    
                    <button onClick = {() => setOpen(open => !open)} className = "burger-button">
                        <i className={open ? "burger-btn bi bi-list" : "burger-btn bi bi-list bi-x"}></i>
                    </button>
                </div>

            </div>

            <div className = "header-two">
                <div className = "hero-caption container">
                    <h1 className ="hero-text">
                        My home is <u className ="hero-undrline">almost put together,</u> but I could really use a new rug.
                    </h1>
                    <Link to = '/interior.io' className = "hero-btn" rel="noopener" data-aos="fade-up">Check Our Services</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar;  