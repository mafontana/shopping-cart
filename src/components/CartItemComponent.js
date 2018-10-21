import React, { Component } from 'react';


class CartItemComponent extends Component {
    render () {
        console.log(this.props)
        return (
            <div className="collection-item">
            
            <div className="row">
              <div className="col-md-8">{this.props.cartItemName}</div>
              <div className="col-md-2">{this.props.cartItemPrice}</div>
              <div className="col-md-2">{this.props.cartItemQuantity}</div>
            </div>
          </div>
        )
    }

}

export default CartItemComponent