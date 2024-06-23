import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import Dishes from "../components/Home/Dishes/Dishes"
import HowWorks from "../components/Home/Work/HowWorks"
import WhyUs from "../components/Home/whyUs/WhyUs"
import LatestBlogs from "../components/Home/Blogs/LatestBlogs"
import CustomerReviews from "../components/Home/Reviews/CustomerReviews"


const Home = ({isLoggedIn}) => {
  return (
    <div>
      <Hero/>
      <Dishes isLoggedIn={isLoggedIn}/>
      <HowWorks/>
      <WhyUs/>
      <LatestBlogs/>
      <CustomerReviews/>
    </div>
  )
}

export default Home