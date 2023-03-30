import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer_ul">
        <li>
          <a
            className="footer_link"
            href="https://github.com/IliasovDamir"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a className="footer_link" href="https://rs.school/" target="_blank" rel="noreferrer">
            RSSchool
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
