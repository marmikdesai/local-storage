import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Product.css';

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <ul>{items}</ul>;
}

window.onscroll = function() {
  const fixed = document.getElementsByClassName('navigation')[0];

  (document.body.scrollTop+document.documentElement.scrollTop > fixed.offsetTop)
    ? fixed.classList.add("fixed")
    : fixed.classList.remove("fixed");
};

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    let difference = to - element.scrollTop,
        click = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + click;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
    this.smoothScroll = this.smoothScroll.bind(this);
  }

  smoothScroll(e) {
    let href = e.target.getAttribute("href").substr(1);
    scrollTo(document.body, this.refs[href].offsetTop-80, 600);
    this.setState({data: ''});
    ReactDOM.findDOMNode(this.refs[href]).focus();
  }

  render() {
    return (
      <div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#tab1" onClick = {this.smoothScroll}>Tab 1</a>
            </li>
            <li>
              <a href="#tab2" onClick = {this.smoothScroll}>Tab 2</a>
            </li>
            <li>
              <a href="#tab3" onClick = {this.smoothScroll}>Tab 3</a>
            </li>
            <li>
              <a href="#tab4" onClick = {this.smoothScroll}>Tab 4</a>
            </li>
          </ul>
        </nav>
        <section className="product-list" ref="tab1">
            <Repeat numTimes={10}>
              {(index) => <li key={index}>This is item {index} in the list</li>}
            </Repeat>
        </section>
        <section className="product-list" ref="tab2">
            <Repeat numTimes={10}>
              {(index) => <li key={index}>This is item {index} in the list</li>}
            </Repeat>
        </section>
        <section className="product-list" ref="tab3">
            <Repeat numTimes={10}>
              {(index) => <li key={index}>This is item {index} in the list</li>}
            </Repeat>
        </section>
        <section className="product-list" ref="tab4">
            <Repeat numTimes={10}>
              {(index) => <li key={index}>This is item {index} in the list</li>}
            </Repeat>
        </section>
      </div>
    );
  }
}

export default Product;
