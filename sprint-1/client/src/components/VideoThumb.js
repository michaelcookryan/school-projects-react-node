import React from 'react';

function VideoThumb(props) {

        return (
            
                <li className="video-thumb">
                    <div className="video-thumb__image">
                        <img src={props.image} alt="" />
                    </div>
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
