import React from 'react'
import Views from "../assets/icons/SVG/Icon-views.svg"
import Likes from "../assets/icons/SVG/Icon-likes.svg"
import AllComments from './AllComments';

function About(props){
    
   // addComment = comment => {
        
        // let addedToList = this.state.mainVideo.comments
        // addedToList.unshift(comment)
        //     this.setState({
        //         comments: addedToList
        //     })
    //}

   // render(){
    
    return (
        <div className="about">
            
            <div className="about__header">
                <h1 className="about__title">{props.currentVideo.title}</h1>
                <div className="about__subtitle">
                    <div className="about__subtitle--left">
                        <h4 className="channel">{props.currentVideo.channel}</h4>
                        <h4 className="date">{props.makeDateReadable(props.currentVideo.timestamp)}</h4>
                    </div>
                    <div className="about__subtitle--right">
                        <div className="views">
                            <img src={Views} alt="views-icon" /><span>{props.currentVideo.views}</span>
                        </div>
                        <div className="likes">
                            <img src={Likes} alt="likes-icon" /><span>{props.currentVideo.likes}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about__body">
                <h4 className="about__body--copy">
                    {props.currentVideo.description}
                </h4>
            </div>

            {/* <AllComments comments={props.mainVideo.comments} addComment={addComment()} /> */}
            <AllComments 
                comments={props.comments} 
                makeDateReadable={props.makeDateReadable}
            />
        </div>
    )
  // }
   
}

export default About