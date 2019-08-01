import React, { Component } from 'react'
import Hero from './Hero';
import VideoList from './VideoList';
import About from './About';
import axios from 'axios';
const api_url = 'https://project-2-api.herokuapp.com/videos';
const my_key = '?api_key=4f6764a2-4a25-45a8-90b7-d7e52c6890f8'; 


//Might need to import axios again fro the comments!!!


class Home extends Component{
    state = {
        videos: [],
        comments: [],
        currentVideo: '',
        currentVideoInfo:{}
    }
    changeVideo = () => {
    //takes event.target.id and passes to Home to setState for currentVideo, then passed to Hero for display, setState for videos revmove current and push prev video into videos
}
  makeDateReadable = (epochTime) => {

    let date = new Date(epochTime)
    let readable = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    return readable
}
    componentDidMount() {
        axios.get(api_url + my_key)
            .then(response => {
                this.setState({
                    videos: response.data.slice(1),
                    currentVideo: response.data[0].id
                    
                }, () => {
                    axios.get(api_url + `/${this.state.currentVideo}` + my_key)
                        .then(response => {
                            console.log("Current Video Info: ",response.data)
                            console.log("Comments: ", response.data.comments)
                            this.setState({
                                currentVideoInfo: response.data,
                                comments:response.data.comments
                            })
                        })
                }
                        
                )
            })
                        
    }


    render() {
        
        return (
            <div>
                <Hero/>
                <main>
                    <About mainVideo={this.state.currentVideoInfo} comments={this.state.comments} makeDateReadable={this.makeDateReadable}/>
                    <VideoList videos={this.state.videos} changeVideo={this.changeVideo}/>
                </main>
               
            </div>
        )
    }
}
export default Home