import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  //6921d821fb914d008851cf613846eda9 News API key
  pageSize = 6;
  country = "us";

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country={this.country} category="general" badgeColor="primary" />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country={this.country} category="business" badgeColor="secondary" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment" badgeColor="success" />} />
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country={this.country} category="general" badgeColor="primary" />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country={this.country} category="health" badgeColor="danger" />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country={this.country} category="science" badgeColor="warning" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country={this.country} category="sports" badgeColor="info" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country={this.country} category="technology" badgeColor="dark" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

