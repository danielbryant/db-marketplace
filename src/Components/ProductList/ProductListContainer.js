import React, { Component } from 'react';

import ProductList from './ProductList'

import './ProductList.css';

const products = require('./products.json');

class ProductListCotainer extends Component {

  render() {
    return (
      <div className='ProductListContainer'>
        <ProductList products={products}></ProductList>
      </div>
    )
  }

}

export default ProductListCotainer;
