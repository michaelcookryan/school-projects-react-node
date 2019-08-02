import React from 'react';
import {Link} from 'react-router-dom';

function VideoThumb(props) {

        return (
            <Link to={`/videos/${props.id}`}>
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
        </Link > 
        )
    }

export default VideoThumb
