import React, { Component } from 'react'
import Hero from './Hero';
import VideoList from './VideoList';
import About from './About';
import axios from 'axios';
const api_url = 'https://project-2-api.herokuapp.com/videos';
const my_key = '?api_key=4f6764a2-4a25-45a8-90b7-d7e52c6890f8'; 

class Home extends React.Component{

    state = {
        videos: [],
        comments: [],
        currentVideo: '',
        currentVideoInfo: {},
        currentVideoImage:'',
        nowPlaying: ''
    }

    makeDateReadable = (epochTime) => {

        let date = new Date(epochTime)
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

    }
    componentDidMount() {
        axios.get(api_url + my_key)
            .then(response => {

                this.setState({
                    videos: response.data.slice(1), //removes default from array
                    currentVideo: response.data[0].id //default id first element

                }, () => {

                    axios.get(api_url + `/${this.state.currentVideo}` + my_key)
                    //console.log("second get: ",response.data)
                        .then(response => {

                            this.setState({
                                nowPlaying: `${response.data.video}` + my_key,
                                currentVideoInfo: response.data,
                                currentVideoImage: response.data.image,
                                comments: response.data.comments
                            })
                        })
                }

                )
            })

    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id){
            console.log('PrevProps: ', prevProps)
            console.log('CurrProps: ', this.props)
            axios.get(api_url + `/${this.props.match.params.id}` + my_key)
                .then(response => {
                    console.log("thisone?:",response.data)
                    this.setState({
                        nowPlaying: `${response.data.video}` + my_key,
                        currentVideoImage: response.data.image,
                        currentVideo: response.data.id,
                        currentVideoInfo: response.data,
                        comments: response.data.comments
                        
                    })
                })

        }
        
    }
    
    render() {
       
        return (
            <div>
                <Hero nowPlaying={this.state.nowPlaying} poster={this.state.currentVideoImage}/>
               
                <main>
                    <About                      
                        currentVideo={this.state.currentVideo} 
                        currentVideoInfo={this.state.currentVideoInfo}
                        comments={this.state.comments} 
                        makeDateReadable={this.makeDateReadable}
                    />

                    <VideoList 
                        videos={this.state.videos} 
                        changeVideo={this.state.changeVideo}
                    />
                </main>
               
            </div>
        )
    }
}
export default Home