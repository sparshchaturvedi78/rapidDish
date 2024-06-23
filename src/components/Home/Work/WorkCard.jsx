import React from 'react'

const WorkCard = (props) => {
  return (
    <div className='workCard-container'>
        <img src={props.data.img} alt="" />
        <p className='dish-name'>{props.data.title}</p>
        <p className='dish-desc'>{props.data.desc}</p>
        <button>Learn More</button>
    </div>
  )
}

export default WorkCard