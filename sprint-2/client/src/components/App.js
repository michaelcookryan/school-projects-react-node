import React from 'react';
import "../styles/app.css";
import Header from './Header';
import Home from './Home';
import Upload from './Upload';
import {Route, Switch} from 'react-router-dom';


class App extends React.Component {

  render(){

    return (
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/videos/:id" exact component={Home}/>
          <Route path="/upload-video" exact component={Upload} />
        </Switch>

      </div>
    );
  }
 
}

export default App;
