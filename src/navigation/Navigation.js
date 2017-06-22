import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <a href="#tab1" refs="tab1">Tab 1</a>
          </li>
          <li>
            <a href="#tab2" ref="tab2">Tab 2</a>
          </li>
          <li>
            <a href="#tab3" ref="tab3">Tab 3</a>
          </li>
          <li>
            <a href="#tab4" ref="tab4">Tab 4</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
