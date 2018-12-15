import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      totalCost: 0,
      discountPercentage: '',
      discount: 0,
      finalCost: 0
    }
  }

  componentWillMount() {
    //load cart items
    let cartVal = localStorage.getItem('cart-data');
    if(cartVal) {
      let cartData = JSON.parse(cartVal);
      this.setState({cartData: cartData});
      this.calculateCosts(cartData);
    }
  }

  removeItem(e, product ) {
    e.preventDefault();
    let cartData = this.state.cartData;
    cartData.splice(cartData.indexOf(product), 1);
    this.setState({cartData: cartData});
    this.calculateCosts(cartData);
    localStorage.setItem('cart-data', JSON.stringify(cartData));
  }

  calculateCosts(cartData) {

    let runningTotal = 0;
    cartData.forEach((product) => {
      runningTotal += parseFloat(product.price);
    })

    this.setState({totalCost: runningTotal.toFixed(2)});

    let finalCost = runningTotal;
    let discount = 0;
    let discountPercentage = "";
    //apply discount
    if(runningTotal > 100 ) {
      discount = (runningTotal * .2).toFixed(2);
      finalCost = (runningTotal - discount).toFixed(2);
      discountPercentage = "20%";
    }
    else if(runningTotal > 50) {
      discount = (runningTotal * .15).toFixed(2);
      finalCost = (runningTotal - discount).toFixed(2);
      discountPercentage = "15%";
    }
    else if(runningTotal > 20) {
      discount = (runningTotal * .1).toFixed(2);
      finalCost = (runningTotal - discount).toFixed(2);
      discountPercentage = "10%";
    }
    this.setState({discountPercentage: discountPercentage, discount: discount, finalCost: finalCost })
  }

  render() {

    let { cartData, totalCost, discount, discountPercentage, finalCost } = this.state;

    return (
      <div className='ShoppingCart'>
        <div className="container">
          <div className="row">
            <div className="col-12  p-2">
              <span>
                <Link to='/products'>
                  &lt;&#45; back to products
                </Link>
              </span>

              <h4 className="heading">Shopping Cart</h4>

              <div className="row table-heading">
                <div className="col-12 p-2">
                  <div className="product-row">
                    <div>Item</div>
                    <div>Price</div>
                  </div>
                </div>
              </div>

              <div className="row item-list">
                {cartData.map((product) => {
                  return (
                    <div className="col-12 p-2" key={product.uuid}>
                      <div className="product-row">
                        <div>{product.name} <span className="remove" onClick={(e) => this.removeItem(e, product)} >[remove]</span></div>
                        <div>${product.price}</div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="row sub-total">
                <div className="col-8 offset-4 p-2">
                  <div className="product-row">
                    <div>Sub Total:</div>
                    <div>${totalCost}</div>
                  </div>
                </div>
              </div>

              {discountPercentage &&
                <div className="row discount">
                  <div className="col-8 offset-4 p-2">
                    <div className="product-row">
                      <div>Discount ({discountPercentage}):</div>
                      <div>${discount}</div>
                    </div>
                  </div>
                </div>
              }

              <div className="row total">
                <div className="col-8 offset-4 p-2">
                  <div className="product-row">
                    <div>Total:</div>
                    <div>${finalCost}</div>
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

export default ShoppingCart;