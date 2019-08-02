import React, { Component } from 'react'
import Hero from './Hero';
import VideoList from './VideoList';
import About from './About';
 

class Home extends React.Component{

    componentDidUpdate(prevProps) {
        console.log('updated: ', prevProps, this.props)
        
    }

    render() {
       
        return (
            <div>
                <Hero nowPlaying={this.props.nowPlaying}/>
                <main>
                    <About                      
                        currentVideo={this.props.currentVideo} 
                        currentVideoInfo={this.props.currentVideoInfo}
                        comments={this.props.comments} 
                        makeDateReadable={this.props.makeDateReadable}
                    />

                    <VideoList 
                        videos={this.props.videos} 
                        changeVideo={this.props.changeVideo}
                    />
                </main>
               
            </div>
        )
    }
}
export default Home