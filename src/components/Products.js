import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from './context'
import './Products.css'
import {Button , ButtonToolbar} from 'react-bootstrap'
import {Addproduct} from './Addproduct'
export class products extends Component {

    static contextType = DataContext;
    render() {
        
        const {products} = this.context;
        return (
            <div>
            <div id="product">
                {
                    products.map(product => (
                        <div className="card" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product._id}`}>{product.title}</Link>
                               </h3>
                                <h4>${product.price}</h4>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <p>${product.description}</p>

                            </div>


                        </div>
                    ))
                }
            </div>
            <div>
        </div>
            </div>
        )
    }
}

export default products
