import React from 'react'
import Logo from "../assets/logo/Logo-brainflix.svg"
import Avitar from "../assets/images/Mohan-muruge.jpg"
import UploadIcon from "../assets/icons/SVG/Icon-upload.svg"
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        
            <header>
               <section className="header-section">
                    
                <div className="header-section__logo">
                       <Link to="/"><img src={Logo} alt="logo"/></Link>
                </div>
                
                <div className="header-section__right">
                    <form className="header-section__search">
                        <input type="text" name="search" placeholder="Search"/>
                    </form>
                    <Link to="/upload-video"><button>
                        <img className="btn__icon" src={UploadIcon} alt="upload-icon" />Upload</button></Link>
                    <div className="header-section__avitar">
                       <img src={Avitar} alt="user-avitar"/>
                   </div>
                </div>

               </section>
            </header> 
        
    )
}
