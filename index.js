import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductsPage from './Components/ProductsPage';
import Cart from './Components/Cart';
import {GlobalProvider} from './Context/GlobalState';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <GlobalProvider>
      <Navbar />
      <Switch>
       <Route path="/" component={ProductsPage} />
       <Route path="/product" component={ProductsPage} />
       <Route path="/cart" component={Cart} />
      </Switch>
       </GlobalProvider>
    );
  }
}

render(<Router><App /></Router>, document.getElementById('root'));
