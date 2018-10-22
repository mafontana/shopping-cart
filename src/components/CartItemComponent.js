import React, { Component } from 'react';


class CartItemComponent extends Component {
    render () {
        console.log(this.props)
        return (
            
            <div className="list-group">
                    <div className="list-group-item">
                            <div className="row">
                                <div className="col-md-7">{this.props.product}</div>
                                <div className="col-md-3">{this.props.price}</div>
                                <div className="col-md-2">{this.props.quantity}</div>
                            </div>
                    
            
            </div>
            </div>
            
        )
    }

}

export default CartItemComponent