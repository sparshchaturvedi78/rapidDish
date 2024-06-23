import React from 'react';
import blog1 from "../../../assets/blog1.avif"
import blog2 from "../../../assets/blog2.webp"
import blog3 from "../../../assets/blog3.avif"
import { Link } from 'react-router-dom';

const LatestBlogs = () => {
  return (
    <div className='blogs'>
      <h1>Latest Blog</h1>
      <div className='blog-container'>
        <div className='blog-card'>
          <img className='blog-img' src={blog1} alt="" />
          <Link className='blog-desc' to="/"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et aut voluptate odit a voluptatum totam!</p></Link>
          <p className='blog-date'>16 Jan, 2023 | 10 Min Read</p>
        </div>

        <div className='blog-card'>
          <img className='blog-img' src={blog2} alt="" />
          <p className='blog-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et aut voluptate odit a voluptatum totam!</p>
          <p className='blog-date'>16 Jan, 2023 | 10 Min Read</p>
        </div>

        <div className='blog-card'>
          <img className='blog-img' src={blog3} alt="" />
          <p className='blog-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et aut voluptate odit a voluptatum totam!</p>
          <p className='blog-date'>16 Jan, 2023 | 10 Min Read</p>
        </div>
      </div>
    </div>
  )
}

export default LatestBlogs