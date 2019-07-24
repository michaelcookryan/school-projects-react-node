import React from 'react'
import Logo from "../assets/logo/Logo-brainflix.svg"
import Avitar from "../assets/images/Mohan-muruge.jpg"
import Upload from "../assets/icons/SVG/Icon-upload.svg"
import Search from "../assets/icons/SVG/Icon-search.svg"

export default function Header() {
    return (
        <div>
            <header>
               <section className="header-section">
                    <div className="header-section__logo">
                       <img src={Logo} alt="logo"/>
                   </div>
                   <aside className="header-section__right">
                    <form className="header-section__search">
    <input type="text" name="search" placeholder="Search"/>
                       <button>
                        <img className="btn__icon" src={Upload} alt="upload-icon"/>Upload</button>
                   </form>
                    <div className="header-section__avitar">
                       <img src={Avitar} alt="user-avitar"/>
                   </div>
                    </aside>

               </section>
            </header> 
        </div>
    )
}
