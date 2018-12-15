import React, { Component } from 'react';

import ShoppingCart from './ShoppingCart'

class ShoppingCartCotainer extends Component {

  componentDidMount() {
    console.log('shopping cart conatiner did mount');
  }

  render() {
    return (
      <div className='ShoppingCartContainer'>
        <ShoppingCart></ShoppingCart>
      </div>
    )
  }

}

export default ShoppingCartCotainer;
