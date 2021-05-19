import React, { Component } from 'react'
import Products from './Products'
import Details from './Details'
import {Route} from "react-router-dom"
import './Section.css'
import Cart from './Cart'
import Addproduct from './Addproduct'

export class Section extends Component {
    render() {
        return (
            <section className="sec">
                <Route path="/product" component={Products} exact />
                <Route path="/product/:id" component={Details}  />
                <Route path="/addproduct" component={Addproduct} />
                <Route path="/cart" component={Cart}  />
            </section>
        )
    }
}

export default Section
