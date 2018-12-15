import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import bike from '../../bike.png';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      //item added - set toast
      const successToast = document.getElementById('success-toast');
      successToast.className = "show";
      setTimeout(() => {
        successToast.removeAttribute('class', "show");
      }, 3000);
    }
    else {
      //show not added toast
      const duplicateToast = document.getElementById('duplicate-toast');
      duplicateToast.className = "show";
      setTimeout(() => {
        duplicateToast.removeAttribute('class', "show");
      }, 3000);
    }
  }

  gotoDetails(product) {
    console.log("go to details");
    console.log(product);
    localStorage.setItem('current-product', JSON.stringify(product));
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
                    <Link onClick={() => this.gotoDetails(product)} to="/productDetails">
                      <div className="product" id={product.uuid} >
                        <div className="product-row">
                          <div className='product-name'>{product.name}</div>
                        </div>

                        <div className="product-row">
                          <img src={bike} alt="product" />
                        </div>

                        <div className="product-row">
                          <div className='product-price'>${product.price}</div>
                          <button onClick={(e) => this.addToCart(e, product)}>+ Cart</button>
                        </div>
                      </div>
                    </Link>

                  </div>
                )
              })}
            </div>

        </div>

        <div id="success-toast" className="success-toast">Item added to cart.</div>
        <div id="duplicate-toast" className="duplicate-toast">Item already added to cart - one is enough.</div>

      </div>
    )
  }

}

export default ProductList;