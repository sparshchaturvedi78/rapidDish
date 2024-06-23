import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CustomerReviews = () => {
  return (
    <div className='reviews-top-container'>
      <h1>Customers Reaction</h1>
      <div className='reviews'>
        <div className='review-card'>
          <div className='review-card-top-part'>
            <div className='review-card-topLeft'>
              <div className='icons'>
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              </div>
              <p>4.5</p>
            </div>
              <p className='review-card-topRight'>20 Jan 2024</p>
          </div>
           <p className='review-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, corrupti quia necessitatibus maiores consequuntur porro sed. Id, cumque praesentium dolorem rerum molestiae mollitia rem earum.</p>
        <div className='review-bottom'>
            <img className='customer-img' src="https://sm.mashable.com/mashable_in/seo/default/untitled-design-2023-08-10t153057494_h9bu.jpg" alt="" />
            <div className='customer-name-div'>
              <p className='customer-name'>Customer Name</p>
              <p className='customer-designer'>Designer</p>
            </div>
        </div>
        </div>

        <div className='review-card'>
          <div className='review-card-top-part'>
            <div className='review-card-topLeft'>
            <div className='icons'>
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              </div>
              <p>4.5</p>
            </div>
              <p className='review-card-topRight'>20 Jan 2024</p>
          </div>
           <p className='review-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, corrupti quia necessitatibus maiores consequuntur porro sed. Id, cumque praesentium dolorem rerum molestiae mollitia rem earum.</p>
        <div className='review-bottom'>
            <img className='customer-img' src="https://assets.gqindia.com/photos/5fdc6eb81c519f6c10ba2d2f/16:9/w_2560%2Cc_limit/Hrithik-Roshan%2520(2).jpg" alt="" />
            <div className='customer-name-div'>
              <p className='customer-name'>Customer Name</p>
              <p className='customer-designer'>Designer</p>
            </div>
        </div>
        </div>

        <div className='review-card'>
          <div className='review-card-top-part'>
            <div className='review-card-topLeft'>
            <div className='icons'>
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              </div>
              <p>4.5</p>
            </div>
              <p className='review-card-topRight'>20 Jan 2024</p>
          </div>
           <p className='review-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, corrupti quia necessitatibus maiores consequuntur porro sed. Id, cumque praesentium dolorem rerum molestiae mollitia rem earum.</p>
        <div className='review-bottom'>
            <img className='customer-img' src="https://www.koimoi.com/wp-content/new-galleries/2023/09/allu-arjun-net-worth-revealed-from-rs-40-crore-worth-lavish-duplex-house-to-a-private-jet-worth-rs-80-crore-the-pushpa-stars-wealth-will-leave-you-in-shock-01.jpg" alt="" />
            <div className='customer-name-div'>
              <p className='customer-name'>Customer Name</p>
              <p className='customer-designer'>Designer</p>
            </div>
        </div>
        </div>

        <div className='review-card'>
          <div className='review-card-top-part'>
            <div className='review-card-topLeft'>
              <div className='icons'>
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
              </div>
              <p>4.5</p>
            </div>
              <p className='review-card-topRight'>20 Jan 2024</p>
          </div>
           <p className='review-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, corrupti quia necessitatibus maiores consequuntur porro sed. Id, cumque praesentium dolorem rerum molestiae mollitia rem earum.</p>
        <div className='review-bottom'>
            <img className='customer-img' src="https://cdn.siasat.com/wp-content/uploads/2024/03/shraddha-kapoor-1.jpg" alt="" />
            <div className='customer-name-div'>
              <p className='customer-name'>Customer Name</p>
              <p className='customer-designer'>Designer</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews