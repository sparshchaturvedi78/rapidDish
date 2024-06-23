import React from 'react'


const OrderedItem = (props) => {

  const orderedItem = props.orderedItem;
  return (
    <div className='ordered-item-container'>
      <div className='ordered-img-div'>
        <img className='ordered-img' src={orderedItem.img} alt="" />
      </div>
      <div className='ordered-right'>
        <div className='ordered-right-up'>
          <p>{orderedItem.name}</p>
          <p>{orderedItem.price} rs.</p>
        </div>
        <p className='qty'>Qty: </p>
      </div>
    </div>

    

  )
}

export default OrderedItem