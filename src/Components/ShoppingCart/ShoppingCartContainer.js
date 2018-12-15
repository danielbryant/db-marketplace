import React, { Component } from 'react';

import ShoppingCart from './ShoppingCart'

import './ShoppingCart.css';

class ShoppingCartCotainer extends Component {

  render() {
    return (
      <div className='ShoppingCartContainer'>
        <ShoppingCart></ShoppingCart>
      </div>
    )
  }

}

export default ShoppingCartCotainer;
