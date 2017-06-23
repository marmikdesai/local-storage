import React, { Component } from 'react';
import './Home.css';
import Header from './../header/Header';
import Product from './../product/Product';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Product />
      </div>
    );
  }
}

export default Home;
