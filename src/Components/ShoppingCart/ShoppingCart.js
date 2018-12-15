import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {

  render() {
    return (
      <div className='ShoppingCart'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span>
                <Link to='/products'>
                  &lt;&#45; back to products
                </Link>
              </span>
              <h4>Shopping Cart</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ShoppingCart;