import React from 'react'
const my_key = '?api_key=4f6764a2-4a25-45a8-90b7-d7e52c6890f8'; 

export default function Hero({ nowPlaying, poster}){
    return (
        <div className="hero-section">
            <video className="video" src={`${nowPlaying}` + my_key} poster={poster} controls ></video>           
        </div>
    )
}
