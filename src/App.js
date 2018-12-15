import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import ProductListContainer from './Components/ProductList/ProductListContainer';
import ShoppingCartCotainer from './Components/ShoppingCart/ShoppingCartContainer';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="header-nav">

            <ul>
              <li><Link to='/products'>Products</Link></li>
              <li><Link to='/cart'>Cart</Link></li>
            </ul>

            <hr />

            <Switch>
              <Route exact path='/' component={ProductListContainer} />
              <Route path='/products' component={ProductListContainer} />
              <Route path='/cart' component={ShoppingCartCotainer} />
            </Switch>

          </div>
        </div>
    );
  }
}

export default App;
