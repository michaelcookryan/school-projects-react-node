import React from 'react'
import Video from "../assets/images/video-list-0.jpg"
import Play from "../assets/icons/SVG/Icon-play.svg"
import Scrubber from "../assets/icons/SVG/Icon-scrubber-control.svg"
import FullScreen from "../assets/icons/SVG/Icon-fullscreen.svg"
import Volume from "../assets/icons/SVG/Icon-volume.svg"

export default function Hero(){
    return (
        <div className="hero-section">
            <video className="video" poster={Video}></video>
            <div className="control">
                <div className="control__icons control__play">
                    <img src={Play} alt="play"/>
                </div>
                <div className="control__icons control__scrubber">
                    <img src={Scrubber} alt="play" />
                </div>
                <div className="control__icons control__screen-vol">
                  
                        <img className="screen-icon" src={FullScreen} alt="play" />
                                  
                        <img className="vol-icon" src={Volume} alt="play" />

                </div>
            </div>
        </div>
    )
}
