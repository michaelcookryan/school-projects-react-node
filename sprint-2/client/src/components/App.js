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
    videos:[],
    comments:[]
  }


  componentDidMount(){
    axios.get(api_url + my_key)
    .then(response =>{
      console.log(response.data)
    })
  }


  render(){
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload-video" component={Upload} />
        </Switch>

      </div>
    );
  }
 
}

export default App;
