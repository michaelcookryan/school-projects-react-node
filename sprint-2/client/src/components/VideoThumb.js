import React from 'react';
import {Link} from 'react-router-dom';

function VideoThumb({id,image,title,channelAuthor}) {

        return (
            <Link to={`/videos/${id}`}>
           <li key={id} className="video-thumb">
                
                    <img className="video-thumb__image" src={image} alt="" />
                    
                    <div className="video-thumb__copy">
                        <h4 className="video-thumb__copy--title">
                            {title}
                        </h4>
                        <h4 className="video-thumb__copy--channel-author">
                            {channelAuthor}
                        </h4>
                    </div>
                  
            </li> 
        </Link > 
        )
    }

export default VideoThumb
