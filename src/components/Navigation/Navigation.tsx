import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React, { Component } from 'react';
import './Navigation.css';

type Props = {
  children: React.ReactNode;
};

class Navigation extends Component<Props> {
  render() {
    return (
      <div className="nav">
        <Header />
        <main id="main">{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Navigation;
