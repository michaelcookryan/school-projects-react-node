import React, { Component } from 'react'
import Hero from './Hero';
import VideoList from './VideoList';
import About from './About';

class Home extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <main>
                    <About />
                    <VideoList />
                </main>
               
            </div>
        )
    }
}
export default Home