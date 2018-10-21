import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader.js'
import CartFooter from './components/CartFooter.js';
import CartItems from "./components/CartItems.js"
import CartItemComponent from "./components/CartItemComponent"

class App extends Component {
  constructor() {
    super();
    this.state = {
      copyrightYear: 2016,

    }

  }

  render() {
    
    const CartItemsList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
    return (
      <div>
        <CartHeader />
        <CartItems cartItems={CartItemsList}/> 
        <CartFooter copyrightYear={this.state.copyrightYear}/>
      </div>
    );
  }
}

export default App;
