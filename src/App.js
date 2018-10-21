import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader.js'
import CartFooter from './components/CartFooter.js';
import CartItems from "./components/CartItems.js"
import CartItemComponent from "./components/CartItemComponent"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyrightYear: 2016,
      CartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]
    }

  }

  render() {
    console.log("cart", this.state.CartItemsList[0].product.name)
    const CartItemsList = [
      { id: 1, 
        product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, 
        quantity: 1 
      },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]

  

    return (
      <div>
        <CartHeader />
        <CartItems cartItemName={this.state.CartItemsList.map((val) => <CartItemComponent cartItemName={val.product.name} />)}
                   cartItemPrice={this.state.CartItemsList.map((val) => <CartItemComponent cartItemPrice={val.product.priceInCents} />)}
                   cartItemQuantity={this.state.CartItemsList.map((val) => <CartItemComponent cartItemQuantity={val.product.quantity} />)}
        
        
        />
        
        
        <CartFooter copyrightYear={this.state.copyrightYear}/>
      </div>
    );
  }
}

export default App;
