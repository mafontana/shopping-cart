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
      ]
    }
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

// firstFunction () {
//   var newArr = []
//   for (let i=0; i<9; i++) {
//     newArr.push(this.state.product[i].name)
//     console.log("newArr", newArr)

//   }

// }

// populateOptions(options) {
//   return options.map((option, index) => (
//     <option key={index} value={option}>{option}</option>
//   ));
// }


  render() {
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
                   cartItemPrice={this.state.CartItemsList.map((val) => <CartItemComponent cartItemPrice={`$${val.product.priceInCents/Math.pow(10, 2)}`} />)}
                   cartItemQuantity={this.state.CartItemsList.map((val) => <CartItemComponent cartItemQuantity={val.quantity} />)}
        />  
        <AddItem products={this.state.products} addItem={this.addItem}/>
        <CartFooter copyrightYear={this.state.copyrightYear}/>
      </div>
    );
  }
}

export default App;
