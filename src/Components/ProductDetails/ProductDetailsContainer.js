import React, { Component } from 'react';

import ProductDetails from './ProductDetails'

import './ProductDetails.css';

class ProductDetailsCotainer extends Component {

  render() {
    return (
      <div className='ProductDetailsContainer'>
        <ProductDetails></ProductDetails>
      </div>
    )
  }

}

export default ProductDetailsCotainer;
