import React, { Component } from 'react'
import {DataContext} from './context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import './Details.css'


export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }



    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <>
                {
                    product.map(item =>(
                        <div className="details" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row1">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <Colors colors={item.colors}/>
                                <div className="size">
                                    <h3>size</h3>
                                    <select id="size" name="shirt">
                                      <option value="volvo">L</option>
                                      <option value="saab">S</option>
                                      <option value="fiat">XL</option>
                                      <option value="audi">XXL:</option>
                                     </select>
                                </div>
                                
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Add to cart
                                </Link>
                            </div>
                            <hr/>
                            <div className="secnav">
                                
                              <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Information</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Reviews</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">a lot of mass such as a statue made of lead (Pb). You might have a large object with very little mass such as a balloon filled with helium (He). You should also know there is a difference between mass and weight. Mass is a measure of the matter in an object while weight is a measure of gravity’s pull on an object.

What is volume? Volume is the amount of space something occupies. Words such as big, little, long, or short are used to describe volumes. A marble takes up a small volume while a star occupies a large volume. Different states of matter will fill volumes in different ways.</div>
  <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">.</div>
  <div class="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">.</div>
  <br/>
</div>
                            </div>
                            
                            
                    
                        </div>
                        
                            
                       
                        
                        

                    ))
                    
                }
            </>
        )
    }
}

export default Details