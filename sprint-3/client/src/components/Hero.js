import React from 'react'
//import Video from "../assets/images/video-list-0.jpg"
// import Play from "../assets/icons/SVG/Icon-play.svg"
// import FullScreen from "../assets/icons/SVG/Icon-fullscreen.svg"
// import Volume from "../assets/icons/SVG/Icon-volume.svg"
const my_key = '?api_key=4f6764a2-4a25-45a8-90b7-d7e52c6890f8'; 

export default function Hero({ nowPlaying, poster}){
    return (
        <div className="hero-section">
            <video className="video" src={`${nowPlaying}` + my_key} poster={poster} controls ></video>
            {/* <video className="video" poster={Video}></video> */}
            
            {/* <div className="control">
                <div className="control__icons control__play">
                    <img src={Play} alt="play"/>
                </div>
                
                <div className="control__icons control__scrubber">
                    <hr/><span>0:00/0:42</span>
                </div>
                
                <div className="control__icons control__screen-vol">                 
                    <img className="screen-icon" src={FullScreen} alt="play" />               <img className="vol-icon" src={Volume} alt="play" />
                </div>                
            </div> */}
            
        </div>
    )
}
