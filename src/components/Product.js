import React, {Component } from 'react';
import json from '../Product.json';

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { proData: [], len: 0, quant: 1, cartItems: [] };
        this.state.cartItems = (localStorage.getItem('mycart'))
    }
    componentDidMount() {
        this.setState({ proData: json.Product})
    }
    addCart = (obj) => {
        window.onbeforeunload = function (e) { localStorage.clear(); };

        if (localStorage.getItem('mycart') != undefined) {
            const arr = JSON.parse(localStorage.getItem('mycart'));

            let idArrays = [];
            arr.forEach(data => {
                idArrays.push(data.id);
            });

            if (idArrays.includes(obj.id)) {
                arr.forEach(data => {
                    if (data.id === obj.id) {
                        data.quantity += 1;
                        alert("Product Quantity Increased")
                    }
                });
            }
            else {
                arr.push(obj);
                alert("Product Added to Cart");
            }

            console.log(arr);
            localStorage.setItem('mycart', JSON.stringify(arr));
            this.setState({ len: this.state.len + 1 })
            this.state.cartItems = arr;
        }
        else {
            const arr = [];
            arr.push(obj);
            localStorage.setItem('mycart', JSON.stringify(arr));
            alert("Product Added to Cart");
            this.setState({ len: this.state.len + 1 })
            this.state.cartItems = arr;
        }
    }


    render() {
        return (
            <div className="container">
                <br/>
                <hr/>
                <h2 className="text-center">Website</h2>
                <hr/>
                <div>
                    <nav className="nav">
                        <a className="nav-link" href="abc">Home</a>
                        <a className="nav-link" href="abc">Products</a>
                        <a className="nav-link" href="abc">Cart {this.state.len}</a>
                    </nav>

                    <div className="row">
                        {this.state.proData.map((value, id) =>
                            <div className="col-3 d-block m-auto text-centre" key={id}>
                                <div className="card">
                                    <img src={value.images} alt="not found" height="300px" />
                                    <h5 className="card-title">{value.pname}</h5><br />
                                    <div className="card-text">
                                        Price: {value.price} <br/>
                                        Quantity: {value.quantity}<br />
                                    </div><br />
                                    <button className="btn btn-info" onClick={() => this.addCart(value)}>Add to Cart</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div><hr />
                <h2 className="text-center">Product added to Cart</h2>
                <div className="row">
                    {this.state.cartItems != null ? this.state.cartItems.map((value, index) => {

                        console.log(value);
                        return (
                            <div className="col-3 d-block m-auto" key={index}>
                                <div className="card">
                                    <table >
                                        <tr>
                                            <td>Name</td>
                                            <td>{value.pname} </td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>{value.price} </td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>{value.quantity} </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        )
                    }

                    ) : ""}
                </div>
            </div>
        )
    }
}

export default Product
