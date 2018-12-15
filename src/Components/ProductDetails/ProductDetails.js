import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {

  render() {
    return (
      <div className='ProductDetails'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span>
                <Link to='/products'>
                  &lt;&#45; back
                </Link>
              </span>
              <h4>Product Details</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ProductDetails;