import React, { Component } from 'react';

class ShoppingCart extends Component {

  componentDidMount() {
    console.log('Shopping Cart did mount');
  }

  render() {
    return (
      <div className='ShoppingCart'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Shopping Cart</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ShoppingCart;