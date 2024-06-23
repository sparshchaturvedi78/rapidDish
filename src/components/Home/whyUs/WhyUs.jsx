import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons/faTruck'
import { faHandFist } from '@fortawesome/free-solid-svg-icons/faHandFist'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

const WhyUs = () => {
  return (
    <div className='whyus-container'>

      <div className='whyus-left-part'>
        <h1>Simple Way of Eating Delicious</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum exercitationem accusantium, laboriosam eos commodi blanditiis facere pariatur. Nulla, iure?</p>
        <button className="nav-btn1 readmore">ReadMore</button>
      </div>

      <div className='whyus-right-part'>
        <img src="https://img.freepik.com/free-photo/shopping-cart-full-products-inside-supermarket_123827-28166.jpg" alt="" />
        <div className='whyus-facility'>
          <div className='facility'>
          <div className='whyus-icons'>
          <FontAwesomeIcon icon={faMobile} style={{color: "#ffffff",}} />
          </div>
            Online Order
          </div>  
          <div className='facility'>
          <div className='whyus-icons'>
          <FontAwesomeIcon icon={faTruck} style={{color: "#ffffff",}} />
          </div>
            Fast Delivery
          </div>
          <div className='facility'>
          <div className='whyus-icons'>
          <FontAwesomeIcon icon={faHandFist} style={{color: "#ffffff",}} />
          </div>
            Single Platform
          </div>
          <div className='facility'>
          <div className='whyus-icons'>
          <FontAwesomeIcon icon={faPhoneVolume} style={{color: "#ffffff",}} />
          </div>
            24/7 Services
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs