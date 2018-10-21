import React, { Component } from 'react';


class CartItemComponent extends Component {
    render () {
        console.log(this.props)
        return (
            <div className="collection-item">
            <div className="row">
                <div className="col-md-8">name</div>
                <div className="col-md-8">price</div>
                <div className="col-md-8">quantity</div>
            </div>
            </div>
        )
    }

}

export default CartItemComponent