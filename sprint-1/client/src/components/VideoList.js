import React from 'react'
import VideoThumb from "./VideoThumb"

class VideoList extends React.Component {

    state = {
        videoList: [
            {
                id: "1",
                title: "Become A Travel Pro In Easy Lesson",
                channelAuthor: "Todd Welch",
                image: {},
                active:false
            },
            {
                id: "2",
                title: "Les Houches The Hidden Gem Of The Chamonix",
                channelAuthor: "Cornelia Blair",
                image: {},
                active: false
            },
            {
                id: "3",
                title: "Travel Health Useful Medical Information For",
                channelAuthor: "Glen Harper",
                image: {},
                active: false
            },
            {
                id: "4",
                title: "Cheap Airline Tickets Great Ways To Save",
                channelAuthor: "Emily Harper",
                image: {}
            },
            {
                id: "5",
                title: "Take A Romantic Break In A Boutique Hotel",
                channelAuthor: "Ethan Owen",
                image: {},
                active: false
            },
            {
                id: "6",
                title: "Choose The Perfect Accommodations",
                channelAuthor: "Lydia Perez",
                image: {},
                active: false
            },
            {
                id: "7",
                title: "Cruising Destination Ideas",
                channelAuthor: "Timothy Austin",
                image: {},
                active: false
            },
            {
                id: "8",
                title: "Train Travel On Track For Safety",
                channelAuthor: "Scotty Cranmer",
                image: {},
                active: false
            },

        ]
    }

// Only display thumbs of videos with !active state
    nextVideos = this.state.videoList.map(video => {
         if(!video.active) {
            return (
                <VideoThumb
                    id={video.id}
                    title={video.title}
                    channelAuthor={video.channelAuthor}
                    image={video.image}
                />
           ) 
        }
    })

    render() {
        return (
            <ul className="video-side-list">{this.nextVideos}</ul>
        )
    }
}
export default VideoList