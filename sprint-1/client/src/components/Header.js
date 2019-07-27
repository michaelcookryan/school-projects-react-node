import React from 'react'
import Logo from "../assets/logo/Logo-brainflix.svg"
import Avitar from "../assets/images/Mohan-muruge.jpg"
import Upload from "../assets/icons/SVG/Icon-upload.svg"


export default function Header() {
    return (
        
            <header>
               <section className="header-section">
                    <div className="header-section__logo">
                       <img src={Logo} alt="logo"/>
                   </div>
                   <div className="header-section__right">
                    <form className="header-section__search">
    <input type="text" name="search" placeholder="Search"/>
                       {/* <button>
                        <img className="btn__icon" src={Upload} alt="upload-icon"/>Upload</button> */}
                    </form>
                    <button>
                        <img className="btn__icon" src={Upload} alt="upload-icon" />Upload</button>
                    <div className="header-section__avitar">
                       <img src={Avitar} alt="user-avitar"/>
                   </div>
                    </div>

               </section>
            </header> 
        
    )
}
