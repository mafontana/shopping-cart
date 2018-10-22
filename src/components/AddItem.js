import React, { Component } from 'react';


class AddItem extends Component {
    state = {};

    onchange = e => {
        const {name, value} = e.target;
        this.setState(prevState=> {
            prevState[name] = value
            return prevState
        })
    }

    onSubmit = e => {
        e.preventDefault();
        let {quantity, product} = this.state;
        console.log(this.state);
        if(quantity === undefined || product === undefined || quantity === "" || product === ""){
            return
        }
        this.props.addItem(Number.parseInt(product), quantity);
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
                            {this.props.products.map(product => <option value={product.id}> {product.name}</option>)}
                        
                        </select>
                    
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                
                
                </form>
            
            
            
            
            </div>
            
         
            
        )
    }

}

export default AddItem