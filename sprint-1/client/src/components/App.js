import React from 'react';
import "../styles/app.css";
import Header from './Header';
import Hero from './Hero';
import About from './About';
// import Comments from './Comments';
import SideMenu from './SideMenu';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <main>
        <About/>
        {/* <Comments/> */}
        <SideMenu/>
     </main>
    </div>
  );
}

export default App;
