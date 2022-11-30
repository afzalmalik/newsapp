import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  pageSize = 6;
  country = "us";
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' height={4} progress={this.state.progress} />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country={this.country} category="general" badgeColor="primary" setProgress={this.setProgress} apiKey={this.apiKey} />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country={this.country} category="business" badgeColor="secondary" setProgress={this.setProgress} apiKey={this.apiKey} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment" badgeColor="success" setProgress={this.setProgress} apiKey={this.apiKey} />} />
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country={this.country} category="general" badgeColor="primary" setProgress={this.setProgress} apiKey={this.apiKey} />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country={this.country} category="health" badgeColor="danger" setProgress={this.setProgress} apiKey={this.apiKey} />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country={this.country} category="science" badgeColor="warning" setProgress={this.setProgress} apiKey={this.apiKey} />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country={this.country} category="sports" badgeColor="info" setProgress={this.setProgress} apiKey={this.apiKey} />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country={this.country} category="technology" badgeColor="dark" setProgress={this.setProgress} apiKey={this.apiKey} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

