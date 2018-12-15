import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import bike from '../../bike.png';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {}
    }
  }

  componentWillMount() {
    let storedProduct = localStorage.getItem('current-product');
    if(storedProduct) {
      this.setState({currentProduct: JSON.parse(storedProduct)});
    }
  }

  addToCart = (e, product) => {
    e.preventDefault();

    let cartValue = localStorage.getItem('cart-data');
    let currentCart = [];
    if(cartValue) {
      //get current cart items
      currentCart = JSON.parse(cartValue);
    }

    //prevent the same item being added to cart quietly :p
    let duplicate = false;
    currentCart.forEach((item) => {
      if(item.uuid === product.uuid) {
        duplicate = true;
        return;
      }
    })

    if(!duplicate) {
      currentCart.push(product);
      localStorage.setItem('cart-data', JSON.stringify(currentCart));
    }
  }

  render() {

    const {currentProduct } = this.state;

    return (
      <div className='ProductDetails'>
        <div className="container">
          <div className="row">
            <div className="col-12 p-2">
              <span>
                <Link to='/products'>
                  &lt;&#45; back
                </Link>
              </span>
              <h4 className="heading">Product Details</h4>

              <div className="product-details">
                <div className="row">
                  <div className="col-12 p-2">
                    <h2>{currentProduct.name}</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 p-2">
                    <img src={bike} alt="product" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 p-2">
                    <div>{currentProduct.details}</div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 p-2">
                    <div>${currentProduct.price}</div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 p-2">
                    <Link to='/products'><button>Back</button></Link>
                    <button onClick={(e) => this.addToCart(e, currentProduct)}>Add to Cart</button>
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ProductDetails;