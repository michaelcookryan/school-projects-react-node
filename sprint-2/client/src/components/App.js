import React from 'react';
import "../styles/app.css";
import Header from './Header';
import Home from './Home';
import Upload from './Upload';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
const api_url = 'https://project-2-api.herokuapp.com/videos';
const my_key = '?api_key=4f6764a2-4a25-45a8-90b7-d7e52c6890f8'; 

class App extends React.Component {
  state = {
    videos: [],
    comments: [],
    currentVideo: '',
    currentVideoInfo: {},
    nowPlaying: ''
  }
  changeVideo = () => {
    //takes event.target.id and passes to Home to setState for currentVideo, then passed to Hero for display, setState for videos revmove current and push prev video into videos
  }
  makeDateReadable = (epochTime) => {

    let date = new Date(epochTime)
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

  }
  componentDidMount() {
    axios.get(api_url + my_key)
      .then(response => {
       
        this.setState({
          videos: response.data.slice(1),
          currentVideo: response.data[6].id

        }, () => {
            
          axios.get(api_url + `/${this.state.currentVideo}` + my_key)
            .then(response => {
             
              this.setState({
                nowPlaying: `${response.data.video}` + my_key,
                currentVideoInfo: response.data,
                comments: response.data.comments
              })
            })
        }

        )
      })
    
  }
  
 

  render(){

    return (
      <div className="App">
        <Header />

        <Switch>
        
          <Route path="/" exact render={()=>{
            return <Home 
                    nowPlaying={this.state.nowPlaying}
                    currentVideo={this.state.currentVideo}
                    currentVideoInfo={this.state.currentVideoInfo}
                    comments={this.state.comments}
                    makeDateReadable={this.makeDateReadable}
                    videos={this.state.videos}
                    />
          }} />
          <Route path="/videos/:id" exact render={(props) => {
            console.log("this is from the route; ",props.match.params.id)
            return <Home
              nowPlaying={this.state.nowPlaying}
              currentVideo={this.state.currentVideo}
              currentVideoInfo={this.state.currentVideoInfo}
              comments={this.state.comments}
              makeDateReadable={this.makeDateReadable}
              videos={this.state.videos}
            />
          }} />
          <Route path="/upload-video" component={Upload} />
        </Switch>

      </div>
    );
  }
 
}

export default App;
