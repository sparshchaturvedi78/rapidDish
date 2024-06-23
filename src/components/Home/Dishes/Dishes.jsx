import React, { useState } from 'react'
import DishesData from './DishesData'
import Card from './Card'

const Dishes = ({isLoggedIn}) => {
  const[likedCourses, setLikedCourses] = useState([])
  return (
    <div className='dishes-container'>
      <h2>Our Popular Dishes</h2>
      <div className='dishes'>
      {
        DishesData.map(dish => {
          return <Card isLoggedIn={isLoggedIn} key={dish.id} dish={dish} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
        })
      }
      </div>
    </div>
  )
}

export default Dishes