import React, { Component } from 'react';


class AddItem extends Component {
    onChange = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const match = this.props.products.filter(product => this.state.product === product.name)
        console.log(this.props)
        let newItem = {
            id: this.props.cartItemsList.length + 1,
            product: match[0],
            quantity: this.state.quantity
    
        }
        console.log(newItem)
        this.props.cartItemsList.push(newItem)
        console.log("new array" , this.props.cartItemsList)
    }
    
    
    render () {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="quantity"> Quantity</label>
                        <input type="number" className="form-control" id="quantity" placeholder="Enter Quantity" name="quantity" onChange={this.onChange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <select className="custom-select" name="product" onChange={this.onChange}>
                            <option selected> Open this select menu</option>
                            {this.props.products.map(product => <option> {product.name}</option>)}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>  
            </div>
            
         
            
        )
    }

}

export default AddItem