import React from 'react'
// import footerBack from "../assets/footerBack.jpg";
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='top-level-footer'>
      <img className='footer-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVeCiDEpYTYKXB88w6rYkcX0wlUTBGNtJwFhC-IKzAw&s" alt="" />
      <div className='footer-container'>
        <div className='footer-upper-section'>
          <div className='footer-left-part'>
            <div className='footer-left-upper'>
              <img className='footer-logo' src={logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>


          <div className='footer-right-part'>

            <div className='footer-right-1'>
              <p>Product</p>
              <div className='footer-links'>
                <Link className='footer-link' to="/">Home</Link>
                <Link className='footer-link' to="/">Pricing</Link>
                <Link className='footer-link' to="/">About</Link>
                <Link className='footer-link' to="/">Careers</Link>
                <Link className='footer-link' to="/">FaQ</Link>
                <Link className='footer-link' to="/">Contact Us</Link>
              </div>
            </div>

            <div className='footer-right-1'>
              <p>Legal</p>
              <div className='footer-links'>
                <Link className='footer-link' to="/">Term</Link>
                <Link className='footer-link' to="/">Privacy</Link>
                <Link className='footer-link' to="/">Cookies</Link>
                <Link className='footer-link' to="/">Careers</Link>
                <Link className='footer-link' to="/">Liecense</Link>
                <Link className='footer-link' to="/">Settings</Link>
              </div>
            </div>

            <div className='footer-right-1'>
              <p>About</p>
              <div className='footer-links'>
                <Link className='footer-link' to="/">Company</Link>
                <Link className='footer-link' to="/">Community</Link>
                <Link className='footer-link' to="/">Blog</Link>
                <Link className='footer-link' to="/">Tutorials</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-middle-line'></div>

        <p className='footer-para'>rapidDish All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer