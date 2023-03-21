import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

class ErrorPage extends Component {
  render() {
    return (
      <section className="section_about">
        <h1>Not Found, Error 404</h1>
        <p>
          The page you are looking for no longer exists. Perhaps you can{' '}
          <Link to="/">return back</Link> to the site’s homepage and see if you can find what you
          are looking for.
        </p>
      </section>
    );
  }
}

export default ErrorPage;
