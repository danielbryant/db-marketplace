import React, { Component } from 'react';

import ProductList from './ProductList'

class ProductListCotainer extends Component {

  componentDidMount() {
    console.log('product list conatiner did mount');
  }

  render() {
    return (
      <div className='ProductListContainer'>
        <ProductList></ProductList>
      </div>
    )
  }

}

export default ProductListCotainer;
