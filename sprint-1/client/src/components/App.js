import React from 'react';
import "../styles/app.css";
import Header from './Header';
import Hero from './Hero';
import About from './About';
import VideoList from './VideoList';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <main>
        <About/>
        <VideoList/>
     </main>
    </div>
  );
}

export default App;
