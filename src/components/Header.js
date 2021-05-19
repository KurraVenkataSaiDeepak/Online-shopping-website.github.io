import './Header.css'
import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import Close  from './svg/times-solid.svg'
import {Link} from 'react-router-dom'
import {DataContext} from './context'


export class Header extends Component {
    static contextType = DataContext;
    state = {
        toogle : false
    }
    menutoogle = () =>{
        this.setState({toogle: !this.state.toogle})
    }
    render() {
        const {toogle} = this.state;
        const {cart} = this.context;
        return (
            
            <header >
                <header>
                <div className="top">Black Friday Banner</div>
                </header>
                <div className="second">
                
                <div className='menu' onClick={this.menutoogle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="secondheader">
                    <nav>
                        <h3 className="egg">Welcome to Shopping mart!</h3>
                        <ul className = {toogle ? "toogle" : ""}>
                            <li className="home"><Link to="/">Home</Link></li>
                            <li><Link to="/Shop">Shop</Link></li>
                            <li><Link to="/Product">Product</Link></li>
                            <li><Link to="/Categories">Categories</Link></li>
                            <li><Link to="/Brands">Brands</Link></li>
                            <li><Link to="/Addproduct">Add Product</Link></li>
                            <li className="close" onClick={this.menutoogle}>
                                <img src={Close} alt="" width="20px"/>
                            </li>
                        </ul>
                        
                    </nav>
                    
                    
                </div>
                </div>
                
                
                <div className="third">
                    <div className="mringo">MRINGO</div>
                    <div className="phone">
                    
                    <ul>
                        <li className="call"><i class="fa fa-phone">
                        +8754784534</i></li>
                        <li className="search"> <input type="text" placeholder="Search" ></input>
                        <div className="sea">
                        <i class="fa fa-search" ></i>
                        
                        
                        </div>
                        <div className="usre">
                        <i class="fa fa-user"></i>
                        </div>
                        <div className="heart">
                            <i class="fa fa-heart"></i>
                        </div>
                        </li>
                        
                    </ul>
                    </div>
                    
                  
                   
                        <div className="nav-cart">
                            <span>{cart.length}</span>
                            <Link to='Cart'>
                                <img src={CartIcon} alt="" width="20px"/>

                            </Link>
                            
                        </div>
                    </div>
                    <header>
                    <div className="tops">
                        <h2>SHOP</h2>
                        <ul>
                            <li>Home/Shop</li>
                        </ul>
                    </div>

                    </header>
                

            </header>
        )
    }
}

export default Header
