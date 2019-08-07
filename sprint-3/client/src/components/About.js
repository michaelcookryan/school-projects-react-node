import React from 'react'
import Views from "../assets/icons/SVG/Icon-views.svg"
import Likes from "../assets/icons/SVG/Icon-likes.svg"
import AllComments from './AllComments';

function About({currentVideoInfo, makeDateReadable, ...rest}){
    
    return (
        <div className="about">
            
            <div className="about__header">
                <h1 className="about__title">{currentVideoInfo.title}</h1>
                
                <div className="about__subtitle">
                    <div className="about__subtitle--left">
                        <h4 className="channel">{currentVideoInfo.channel}</h4>
                        <h4 className="date">{makeDateReadable(currentVideoInfo.timestamp)}</h4>
                    </div>
                    <div className="about__subtitle--right">
                        <div className="views">
                            <img src={Views} alt="views-icon" /><span>{currentVideoInfo.views}</span>
                        </div>
                        <div className="likes">
                            <img src={Likes} alt="likes-icon" /><span>{currentVideoInfo.likes}</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="about__body">
                <h4 className="about__body--copy">
                    {currentVideoInfo.description}
                </h4>
            </div>

            <AllComments
                currentVideoId={rest.currentVideoId}
                comments={rest.comments} 
                makeDateReadable={makeDateReadable}
                addComment={rest.addComment}
            />
        </div>
    )

   
}

export default About