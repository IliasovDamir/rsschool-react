import Navigation from 'components/Navigation/Navigation';
import AboutPage from 'pages/AboutPage/AboutPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import HomePage from 'pages/HomePage/HomePage';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Navigation>
      </BrowserRouter>
    );
  }
}

export default App;
