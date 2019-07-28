import React from 'react'
import VideoThumb from "./VideoThumb"
import VideoOne from "../assets/images/video-list-1.jpg"
import VideoTwo from "../assets/images/video-list-2.jpg"
import VideoThree from "../assets/images/video-list-3.jpg"
import VideoFour from "../assets/images/video-list-4.jpg"
import VideoFive from "../assets/images/video-list-5.jpg"
import VideoSix from "../assets/images/video-list-6.jpg"
import VideoSeven from "../assets/images/video-list-7.jpg"
import VideoEight from "../assets/images/video-list-8.jpg"

class VideoList extends React.Component {

    state = {
        videoList: [
            {
                id: "1",
                title: "Become A Travel Pro In Easy Lesson",
                channelAuthor: "Todd Welch",
                image: VideoOne,
                active:false
            },
            {
                id: "2",
                title: "Les Houches The Hidden Gem Of The Chamonix",
                channelAuthor: "Cornelia Blair",
                image: VideoTwo,
                active: false
            },
            {
                id: "3",
                title: "Travel Health Useful Medical Information For",
                channelAuthor: "Glen Harper",
                image: VideoThree,
                active: false
            },
            {
                id: "4",
                title: "Cheap Airline Tickets Great Ways To Save",
                channelAuthor: "Emily Harper",
                image: VideoFour,
                active:false
            },
            {
                id: "5",
                title: "Take A Romantic Break In A Boutique Hotel",
                channelAuthor: "Ethan Owen",
                image: VideoFive,
                active: false
            },
            {
                id: "6",
                title: "Choose The Perfect Accommodations",
                channelAuthor: "Lydia Perez",
                image: VideoSix,
                active: false
            },
            {
                id: "7",
                title: "Cruising Destination Ideas",
                channelAuthor: "Timothy Austin",
                image: VideoSeven,
                active: false
            },
            {
                id: "8",
                title: "Train Travel On Track For Safety",
                channelAuthor: "Scotty Cranmer",
                image: VideoEight,
                active: false
            },

        ]
    }

// Only display thumbs of videos with !active state
    nextVideos = this.state.videoList.filter(video => !video.active)
    .map(video =>{

        return (               
                 <VideoThumb
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    channelAuthor={video.channelAuthor}
                    image={video.image}
                />
             ) 

    })
   
    render() {
        
        return (
            <div className="next-videos">
                <h5 className="next-videos__title">Next Video</h5>
                <ul className="video-list">{this.nextVideos}</ul>
            </div>
        )
    }
}
export default VideoList