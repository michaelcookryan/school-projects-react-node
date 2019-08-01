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
        comments: []
    }


    componentDidMount() {
        axios.get(api_url + my_key)
            .then(response => {
                this.setState({
                    videos: response.data
                }, () => {
                        console.log(response.data)
                })
            })

    }
    render() {
        
        return (
            <div>
                <Hero/>
                <main>
                    <About />
                    <VideoList videos={this.state.videos}/>
                </main>
               
            </div>
        )
    }
}
export default Home