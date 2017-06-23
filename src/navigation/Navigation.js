import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super();
    this.state = {
      tab1: '',
      tab2: '',
      tab3: '',
      tab4: '',
    }
  }

  render() {
    debugger
    return (
      <nav className="navigation">
        <ul>
          <li>
            <a href="#tab1" onClick = {this.clearInput}>Tab 1</a>
          </li>
          <li>
            <a href="#tab2" onClick = {this.clearInput}>Tab 2</a>
          </li>
          <li>
            <a href="#tab3" onClick = {this.clearInput}>Tab 3</a>
          </li>
          <li>
            <a href="#tab4" onClick = {this.clearInput}>Tab 4</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
