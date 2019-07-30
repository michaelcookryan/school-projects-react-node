import React from 'react';

function VideoThumb(props) {

        return (
            
            <li key={props.id} className="video-thumb">

                    <img className="video-thumb__image" src={props.image} alt="" />
                    
                    <div className="video-thumb__copy">
                        <h4 className="video-thumb__copy--title">
                            {props.title}
                        </h4>
                        <h4 className="video-thumb__copy--channel-author">
                            {props.channelAuthor}
                        </h4>
                    </div>
                
            </li> 
            
        )
    }

export default VideoThumb
