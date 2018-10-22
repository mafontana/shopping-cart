import React, { Component } from 'react';
import CartItemComponent from "./CartItemComponent.js"


class CartItems extends Component {
    render () {
        return (
            <div className="container">
                <h1>Cart Items</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-8">Product</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Quantity</div>
                        </div>
                    </div>
                    {this.props.cartItemsList.map((cartItem)=> <CartItemComponent
                        product={cartItem.product.name}
                        price={cartItem.product.priceInCents}
                        quantity={cartItem.quantity}/>)}

                    <CartItemComponent cartItemName={this.props.cartItemName} cartItemPrice={this.props.cartItemPrice} cartItemQuantity={this.props.cartItemQuantity}/>
                </div>
                <h2>Total:{this.props.cartItemsList.reduce((total, cartItem) => {
                    total = total + cartItem.product.priceInCents * cartItem.quantity;
                    return total;
                }, 0)}
                </h2>
            </div>
        )
    }
}

export default CartItems;