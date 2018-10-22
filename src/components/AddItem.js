import React, { Component } from 'react';


class AddItem extends Component {
   
    render () {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label for="quantity"> Quantity</label>
                        <input type="number" className="form-control" id="quantity" placeholder="Enter Quantity" name="quantity" onChange={this.props.handleChange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <select className="custom-select" name="product" onChange={this.props.handleChange}>
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