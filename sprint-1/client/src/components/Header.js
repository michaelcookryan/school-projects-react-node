import React from 'react'
import Logo from "../assets/logo/Logo-brainflix.png"
import Avitar from "../assets/images/Mohan-muruge.jpg"

export default function Header() {
    return (
        <div>
            <header>
               <section className="header-section">
                    <div className="header-section__logo">
                       <img src={Logo}/>
                   </div>
                    <form className="header-section__search">
                       <input type="text" name="search"/>
                       <button>+ Upload</button>
                   </form>
                    <div className="header-section__avitar">
                       <img src={Avitar}/>
                   </div>

               </section>
            </header> 
        </div>
    )
}
