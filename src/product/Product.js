import React, { Component } from 'react';
import './Product.css';

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <ul>{items}</ul>;
}

class Product extends Component {
  render() {
    return (
      <div>
        <section className="product-list" id="#tab1">
            <Repeat numTimes={10}>
              {(index) => <li key={index}>This is item {index} in the list</li>}
            </Repeat>
        </section>
        <section className="product-list" id="#tab2">
            <Repeat numTimes={10}>
              {(index) => <li key={index}>This is item {index} in the list</li>}
            </Repeat>
        </section>
        <section className="product-list" id="#tab3">
            <Repeat numTimes={10}>
              {(index) => <li key={index}>This is item {index} in the list</li>}
            </Repeat>
        </section>
        <section className="product-list" id="#tab4">
            <Repeat numTimes={10}>
              {(index) => <li key={index}>This is item {index} in the list</li>}
            </Repeat>
        </section>
      </div>
    );
  }
}

export default Product;
