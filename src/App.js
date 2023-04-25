import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  pageSize = 6;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    });
  }
  

  render() {
    return (
      <Router>
      <div>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={this.state.progress}
        />
        <Navbar />
        <Routes>
          <Route exact path='/' element = {<News key={"general"} setProgress = {this.setProgress} pageSize = {this.pageSize} country = "in" category="general" />} ></Route>
          <Route exact path='/business' element = {<News key={"business"} setProgress = {this.setProgress} pageSize = {this.pageSize} country = "in" category="business" />} ></Route>
          <Route exact path='/technology' element = {<News key={"technology"} setProgress = {this.setProgress} pageSize = {this.pageSize} country = "in" category="technology" />} ></Route>
          <Route exact path='/entertainment' element = {<News key={"entertainment"} setProgress = {this.setProgress} pageSize = {this.pageSize} country = "in" category="entertainment" />} ></Route>
          <Route exact path='/health' element = {<News key={"health"} setProgress = {this.setProgress} pageSize = {this.pageSize} country = "in" category="health" />} ></Route>
          <Route exact path='/sports' element = {<News key={"sports"} setProgress = {this.setProgress} pageSize = {this.pageSize} country = "in" category="sports" />} ></Route>
          <Route exact path='/science' element = {<News key={"science"} setProgress = {this.setProgress} pageSize = {this.pageSize} country = "in" category="science" />} ></Route>
        </Routes>
      </div>
      </Router>
    )
  }
}
