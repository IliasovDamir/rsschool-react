import Forms from 'components/Forms/Forms';
import React, { Component } from 'react';
import './FormsPage.css';

class FormsPage extends Component {
  render() {
    return (
      <section className="section_forms">
        <h1>Forms</h1>
        <Forms />
      </section>
    );
  }
}

export default FormsPage;
