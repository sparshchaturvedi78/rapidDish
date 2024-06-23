import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faPercent } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import food from "../../../assets/food.png"

const Hero = () => {
  const [searchItem, setSearchItem] = useState("")
  console.log(searchItem);
  return (
    <div className='hero-container'>
      <div className='left-part'>
        <h1>It's not just <span className='our'> Food, </span> It's an Experience</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis laudantium veniam minima quos dolores.</p>
        <div className='bottom-left'>
          <button className='nav-btn1 exBtn'>Explore Food</button>
          <div className='input-field'>
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "000000", }} /> */}
            <input
              type="text"
              placeholder='Search'
              onChange={(event) => setSearchItem(event.target.value)}
              className='input'
            />
          </div>
        </div>
      </div>


      <div className='right-part'>
        <img src={food} width={300} alt="" />
        <div className='discount-container'>
          <div>
          <p className='red-p'>15%</p>
          <p>Discount for 2 orders</p>
          </div>
          <div className='icon-div'>
            <FontAwesomeIcon icon={faPercent} style={{ color: "#ffffff", }} />
          </div>
        </div>
          <div className='delivery-container'>
            <div className='icon-div1'>
              <FontAwesomeIcon icon={faClock} style={{ color: "#ffffff", }} />
            </div>
            <div>
            <p>Delivery</p>
            <p>30 Min</p>
            </div>
          </div>
      </div>
  </div>
  )
}

export default Hero