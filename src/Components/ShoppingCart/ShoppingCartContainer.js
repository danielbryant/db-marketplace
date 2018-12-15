import React, { Component } from 'react';

import ShoppingCart from './ShoppingCart'

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
