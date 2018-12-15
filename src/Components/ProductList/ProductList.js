import React, { Component } from 'react';

class ProductList extends Component {

  componentDidMount() {
    console.log('product list did mount');
  }

  render() {
    return (
      <div className='ProductList'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Product List</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ProductList;