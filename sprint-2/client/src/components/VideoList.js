import React from 'react'
import VideoThumb from "./VideoThumb"

function VideoList(props) {

// Only display thumbs of videos with !active state
 const  nextVideos = props.videos.filter(video => !video.active)
    .map(video =>{
          console.log(video.id)
        return (   
                        
                 <VideoThumb
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    channelAuthor={video.channel}
                    image={video.image}
                />
             ) 

    })
    
        
        return (
            <div className="next-videos">
                <h5 className="next-videos__title">Next Video</h5>
                <ul className="video-list">{nextVideos}</ul>
            </div>
        )
}
export default VideoList