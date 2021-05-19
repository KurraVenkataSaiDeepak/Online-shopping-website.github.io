import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
         Subscribe now
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
           
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        
        <div class='footer-link-items'>
            <h2>LOGO</h2>
            <Link to='/'>dOWNLOAD THE APP FOR EASY DOWNLOAD</Link>
            <Link to='/'>Clothing and food all types of products available.</Link>
            <Link to='/'>Food</Link>
            <Link to='/'>Restaurants</Link>
            <Link to='/'>Delivery</Link>
          </div>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Blog</Link>
            <Link to='/'>working process</Link>
            <Link to='/'>Food</Link>
            <Link to='/'>Restaurants</Link>
            <Link to='/'>Delivery</Link>
          </div>

          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Blog</Link>
            <Link to='/'>working process</Link>
            <Link to='/'>Food</Link>
            <Link to='/'>Restaurants</Link>
            <Link to='/'>Delivery</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Blog</Link>
            <Link to='/'>working process</Link>
            <Link to='/'>Food</Link>
            <Link to='/'>Restaurants</Link>
            <Link to='/'>Delivery</Link>
          </div>
          
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          
          <small class='website-rights'>MRINGO © 2021</small>
          
          </div>
        
      </section>
    </div>
  );
}

export default Footer;