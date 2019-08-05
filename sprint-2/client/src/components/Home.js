import React, { Component } from 'react'
import Hero from './Hero';
import VideoList from './VideoList';
import About from './About';
import axios from 'axios';
const api_url = 'https://project-2-api.herokuapp.com/videos';
const my_key = '?api_key=4f6764a2-4a25-45a8-90b7-d7e52c6890f8'; 

class Home extends Component{

    state = {
        videos: [],
        comments: [],
        currentVideoInfo: {},
        nowPlaying: '',
        defaultVideo:''
    }


    makeDateReadable = (epochTime) => {

        let date = new Date(epochTime)
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

    }

    addComment = comment => {

        let addedToList = this.state.comments
        addedToList.concat(comment)
            this.setState({
                comments: addedToList
            })
    }
    
    componentDidMount() {
        
            axios.get(api_url + my_key)
                .then(response => {

                    this.setState({
                        videos: response.data,
                        defaultVideo: response.data[0].id

                    }, () => {

                        axios.get(api_url + `/${this.state.defaultVideo}` + my_key)
                            .then(response => {
                                
                                this.setState({
                                    nowPlaying: `${response.data.video}` + my_key,
                                    currentVideoInfo: response.data,
                                    comments: response.data.comments
                                 
                                })
                                 
                                localStorage.defaultInfo = JSON.stringify(this.state.defaultVideo)

                            }).catch(err => console.log(err));
                            
                        }
                                              
                    )

                }).catch(err => console.log(err));

    }

    componentDidUpdate(prevProps) {
        
        if (this.props.match.params.id !== prevProps.match.params.id) {
                
            let searchCriteria = ''

                if (this.props.match.params.id === undefined) {
                    searchCriteria = JSON.parse(localStorage.defaultInfo)
                } else { 
                    searchCriteria = this.props.match.params.id
                }

                axios.get(api_url + `/${searchCriteria}` + my_key)
                    .then(response => {

                        this.setState({
                            nowPlaying: `${response.data.video}` + my_key,
                            currentVideoInfo: response.data,
                            comments: response.data.comments

                        }) 

                    }).catch(err => console.log(err));             
 
            }      
   
    }
    
    render() {
        
        return (
            <div>
                <Hero
                    nowPlaying={this.state.nowPlaying}
                    poster={this.state.currentVideoInfo.image}
                />
               
                <main>
                    <About                      
                        currentVideoInfo={this.state.currentVideoInfo}
                        comments={this.state.comments} 
                        makeDateReadable={this.makeDateReadable}
                        addComment={this.addComment}
                    />

                    <VideoList 
                        videos={this.state.videos} 
                        currentVideoId={this.state.currentVideoInfo.id} 
                    />
                </main>
               
            </div>
        )
    }
}
export default Home