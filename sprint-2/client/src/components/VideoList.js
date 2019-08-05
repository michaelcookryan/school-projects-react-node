import React from 'react'
import VideoThumb from "./VideoThumb"

function VideoList({videos, currentVideoId}) {

// Only display thumbs of videos that are not currently selected/playing

    const nextVideos = videos.filter(video => currentVideoId !== video.id)
    .map(video =>{

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