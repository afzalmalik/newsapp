import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const pageSize = 6;
  const country = "us";
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' height={4} progress={progress} />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={pageSize} country={country} category="general" badgeColor="primary" setProgress={setProgress} apiKey={apiKey} />} />
          <Route exact path="/business" element={<News key="business" pageSize={pageSize} country={country} category="business" badgeColor="secondary" setProgress={setProgress} apiKey={apiKey} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country={country} category="entertainment" badgeColor="success" setProgress={setProgress} apiKey={apiKey} />} />
          <Route exact path="/general" element={<News key="general" pageSize={pageSize} country={country} category="general" badgeColor="primary" setProgress={setProgress} apiKey={apiKey} />} />
          <Route exact path="/health" element={<News key="health" pageSize={pageSize} country={country} category="health" badgeColor="danger" setProgress={setProgress} apiKey={apiKey} />} />
          <Route exact path="/science" element={<News key="science" pageSize={pageSize} country={country} category="science" badgeColor="warning" setProgress={setProgress} apiKey={apiKey} />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} country={country} category="sports" badgeColor="info" setProgress={setProgress} apiKey={apiKey} />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} country={country} category="technology" badgeColor="dark" setProgress={setProgress} apiKey={apiKey} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;