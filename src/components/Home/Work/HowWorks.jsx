import React from 'react'
import HowWorkData from "./HowWorkData"
import WorkCard from './WorkCard'

const HowWorks = () => {
  return (
    <div className='work-container'>
      <h2>How does it Works</h2>
      <div className='works'>
        {
          HowWorkData.map((data, index)=>{
            return <WorkCard key={index} data={data} />
          })
        }
      </div>
    </div>
  )
}

export default HowWorks