import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =(props)=> {

  const apiKey=process.env.REACT_APP_NEWS_API
  
  const [progress, setProgress] = useState(0)

    // document.body.style.backgroundColor= "black"
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}

      />
          <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general"  pageSize={15} country='in' category='general' />} />
            <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={15} country='in' category='business' />} />
            <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={15} country='in' category='entertainment' />} />
            <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={15} country='in' category='general' />} />
            <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={15} country='in' category='health' />} />
            <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={15} country='in' category='science' />} />
            <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={15} country='in' category='sports' />} />
            <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={15} country='in' category='technology' />} />
          </Routes>
        </Router>
      </div>
    )
  
}

export default App;