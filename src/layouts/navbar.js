import React, {useState} from 'react';
import '../sass/Navbar.scss';
import Logo from '../images/logo.png';

const Navbar = () => {

    const [open, setOpen] = useState(true); 

    return(
        <header className = "header">
            <div className = "header-one container">
                
                <div className = "menu-list menu-list-one nav">
                    <a href = "#" className = "mnu-btn" rel="noopener">Home</a>
                    <a href = "#" className = "mnu-btn" rel="noopener">What We Do?</a>
                    <a href = "#" className = "mnu-btn" rel="noopener">Projects</a>
                </div>

                <div className = "logo-capt">
                    <a href = "/" rel="noopener" className = "logo">
                        <img className = "image-fluid" src= {Logo} alt = "FRANCLIN"/>
                    </a> 
                </div>

                <div className = "menu-list menu-list-two nav">
                    <a href = "#" className = "mnu-btn" rel="noopener">Blog</a>
                    <a href = "#" className = "mnu-btn" rel="noopener">Contact Us</a>
                    <a href = "#" className = "mnu-btn free-quote" rel="noopener">Free Quote</a>
                </div>

                <div className = "menu-list burger-menu" 
                    
                    style = {open ? {transition: "0.3s ease-in-out", height: "0", padding: "0",} 
                    : {transition: "0.3s ease-in-out", padding: "15px 0", height: "250px",}}>
                    
                    <a href = "#" className = "mnu-btn" rel="noopener">Home</a>
                    <a href = "#" className = "mnu-btn" rel="noopener">What We Do?</a>
                    <a href = "#" className = "mnu-btn" rel="noopener">Projects</a>
                    <a href = "#" className = "mnu-btn" rel="noopener">Blog</a>
                    <a href = "#" className = "mnu-btn" rel="noopener">Contact Us</a>
                    <a href = "#" className = "mnu-btn" rel="noopener">Free Quote</a>
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
                    <a href = "#" className = "hero-btn" rel="noopener">Check Our Services</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar;  