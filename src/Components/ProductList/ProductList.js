import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import bike from '../../bike.png';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addToCart = (event) => {
    event.preventDefault();
    console.log("add item to cart");
  }

  render() {

    const { products } = this.props;

    return (
      <div className='ProductList'>
        <div className="container">
          <div className="row">
            <div className="col-12 p-2">
              <h4>Product List</h4>
            </div>
          </div>

            <div className="row">
              {products.map((product) => {
                return (
                  <div className="col-12 col-md-6 col-xl-3 p-2" key={product.uuid}>
                    <Link to="/productDetails">
                      <div className="product" id={product.uuid} >
                        <div className="product-row">
                          <div className='product-name'>{product.name}</div>
                        </div>

                        <div className="product-row">
                          <img src={bike} alt="product" />
                        </div>

                        <div className="product-row">
                          <div className='product-price'>${product.price}</div>
                          <button onClick={this.addToCart}>+ cart</button>
                        </div>
                      </div>
                    </Link>

                  </div>
                )
              })}
            </div>

        </div>
      </div>
    )
  }

}

export default ProductList;