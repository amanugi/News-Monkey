import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
// React Router
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 6;

  const [progress, setProgress] = useState(0);   // function based
  // state = {
  //   progress: 0
  // }


  // const setProgress = (progress) => {     // class based
  //   // setState({
  //   //   progress: progress
  //   // });
  // }
  
  return (
    <Router>
    <div>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
      <Navbar />
      <Routes>
        <Route exact path='/' element = {<News key={"general"} setProgress = {setProgress} apiKey = {apiKey} pageSize = {pageSize} country = "in" category="general" />} ></Route>
        <Route exact path='/business' element = {<News key={"business"} setProgress = {setProgress} apiKey = {apiKey} pageSize = {pageSize} country = "in" category="business" />} ></Route>
        <Route exact path='/technology' element = {<News key={"technology"} setProgress = {setProgress} apiKey = {apiKey} pageSize = {pageSize} country = "in" category="technology" />} ></Route>
        <Route exact path='/entertainment' element = {<News key={"entertainment"} setProgress = {setProgress} apiKey = {apiKey} pageSize = {pageSize} country = "in" category="entertainment" />} ></Route>
        <Route exact path='/health' element = {<News key={"health"} setProgress = {setProgress} apiKey = {apiKey} pageSize = {pageSize} country = "in" category="health" />} ></Route>
        <Route exact path='/sports' element = {<News key={"sports"} setProgress = {setProgress} apiKey = {apiKey} pageSize = {pageSize} country = "in" category="sports" />} ></Route>
        <Route exact path='/science' element = {<News key={"science"} setProgress = {setProgress} apiKey = {apiKey} pageSize = {pageSize} country = "in" category="science" />} ></Route>
      </Routes>
    </div>
    </Router>
  )
}

export default App;
