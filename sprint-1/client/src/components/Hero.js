import React from 'react'
import Video from "../assets/images/video-list-0.jpg"

export default function Hero(){
    return (
        <section className="hero-section">
            <video controls poster={Video}></video>
        </section>
    )
}
