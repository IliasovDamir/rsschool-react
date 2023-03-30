import Navigation from 'components/Navigation/Navigation';
import AboutPage from 'pages/AboutPage/AboutPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import FormsPage from 'pages/FormsPage/FormsPage';
import HomePage from 'pages/HomePage/HomePage';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
}

export default App;
