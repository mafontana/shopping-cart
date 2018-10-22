import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader.js'
import CartFooter from './components/CartFooter.js';
import CartItems from "./components/CartItems.js"
import CartItemComponent from "./components/CartItemComponent"
import AddItem from "./components/AddItem"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyrightYear: 2016,
      CartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ],
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ], 
      product: "",
      quantity: ""
    }
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = e => {
    e.preventDefault();
    const match = this.state.products.filter(product => this.state.product === product.name)
    console.log(this.state)
    let newItem = {
        id: this.state.CartItemsList.length + 1,
        product: match[0],
        quantity: Number(this.state.quantity)
    }
    this.setState({
        CartItemsList: [...this.state.CartItemsList, newItem]

    })
}

  addItem = (id, quantity) => {
      this.setState((prevState) => {
        const state = prevState;
        const products = state.products;
        for (let i=0; i <products.length; i++) {
          const product = products[i];
          if(product.id === id) {
            const newItem = {product, quantity};
            state.cartItemsList.push(newItem);
            return state
          }
        }
      }
    )
  }

  render() {
    return (
      <div>
        <CartHeader />
        <CartItems cartItemsList={this.state.CartItemsList}/>  
        <AddItem products={this.state.products} addItem={this.addItem} cartItemsList={this.state.CartItemsList} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <CartFooter copyrightYear={this.state.copyrightYear}/>
      </div>
    );
  }
}

export default App;
