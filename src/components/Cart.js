import React, { Component } from 'react'
import {DataContext} from './context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import './Cart.css'
import Payment from './Payment'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>No Product added to the cart.</h2>
        }else{
            return (
                <>  
                    
                    <div className="shopping">
                        <li>Shopping Cart</li>
                        <hr></hr>
                    </div> 
                    
                    <div className="xz">
                        <li className="na">Product Detail</li>
                        <li className="qy">Product QTY</li>
                        <li className="pr">Total</li>
                        
                        
                    </div>
                    <div className="xzs">
                        <li>Product Details</li>

                    </div>
                    {
                        cart.map(item =>(
                            <div className="details1" key={item._id}>
                                
                                <img src={item.src} alt=""/>
                                
    
                                <div className="box">
                                    <div className="row1">
                                        <h2>{item.title}</h2>
                                        <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                        
                                        </div>
                                        <div className="price1">
                                            <span1>${item.price}</span1>
                                        </div>
                                        <div className="price">
                                            <span>${item.price * item.count}</span>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    
                                   
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="row">  
                      <div className="col-6">
                        <form className="form-container">
                           <div className="form-row">
                                <div className="form-group col-5">
                                <div>
                            <h2> SUMMARY</h2>
                            <hr></hr>
                        </div>
                                <label for="inputEmail4" id="shi" className="col-sm-2 col-form-label col-form-label"><b>SHIPPING</b></label>
                                     <input type="text" className="form-control" placeholder="Enter Address"/>
                                </div>
                           </div>
                          <div className="form-row">
                              <div className="form-group col-5">
                                 <label for="inputEmail4" className="col-sm-2 col-form-label col-form-label"><b>PROMO</b></label>
                                   <input type="text" className="form-control" placeholder="Enter Promo "/>
                              </div>
                          </div>
                          <br/>
                          <button type="button" id="tutn" className="btn btn-secondary">Apply</button>
                      </form>
                      </div>

                      <div className="col-6 bill-box">
                          <br></br>
                          <br></br>
                          <br></br>
                          <p ><b>Total :${total}</b></p>
                          <p ><b>Sub Total: ${total}</b></p>
                          <br/>
                          <hr/>
                          <p><h6><b>Total Cost: ${total}</b></h6></p>
                          <br/>
                          <button type="button" id="tutn" className="btn btn-secondary bill-button">Payment</button>
                          <br></br>
                          <br/>
                          <br/>
                     </div>
                     

                      </div>
                    
                </>
                )
            }
        }
}

export default Cart