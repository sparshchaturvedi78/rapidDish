import React, { useEffect, useState } from 'react'
import OrderedItem from '../components/OrderedItem';
import {useSelector,useDispatch} from 'react-redux'
import {remove} from '../redux/Slices/CartSlice'
import toast from 'react-hot-toast'
import { NavLink } from 'react-router-dom';


const CheckOut = (props) => {
  const sampleCount = props.sampleCount;
  const { cart } = useSelector((state) => state);

  const [dispatchData,changeDispatchData] = useState([]); 
  // console.log('inside the checkout')
  // console.log(dispatchData);
  

  var today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const orderNo = Math.floor(Math.random() * 124326789535564);

  const dispatch = useDispatch();

  function checkOutHandler(){
    changeDispatchData([...cart])
    cart.map((cartItem) => {
      dispatch(remove(cartItem.id));
    })
    toast.success('Ordered Placed Successfully')
  }
  
  return (

    <div className='checkout-container'>
      <div className='checkout-left'>
        <h1>Thanks you for your purchase!</h1>
        <p className='order-desc'>Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped</p>

        <p className='billing'>Billing address</p>
        <div className='billing-address'>
          <div className='bill-add-left'>
            <p>Name</p>
            <p>Address</p>
            <p>Phone</p>
            <p>Email</p>
          </div>
          <div className='bill-add-right'>
            <p>Customer Name</p>
            <p>Customer Address</p>
            <p>Phone number</p>
            <p>Customer@gamil.com</p>
          </div>
        </div>
        <NavLink to="/orders">
          <button className='nav-btn1 order-btn'>Track Your Order</button>
        </NavLink>
      </div>

      <div className='checkout-right'>
        <p className='order-summ'>Order Summary</p>
        <div className='hori-line'></div>
        <div className='right-middle'>
          <div className='right-middle-items'>
            <p>Date</p>
            <p>{date}</p>
          </div>
          <div className='ver-line'></div>
          <div className='right-middle-items'>
            <p>Order Number</p>
            <p>{orderNo}</p>
          </div>
          <div className='ver-line'></div>
          <div className='right-middle-items'>
            <p>Payment Method</p>
            <p>Cash</p>
          </div>
        </div>
        <div className='ordered-items-container'>
          {
            dispatchData.map((orderedItem) => {
              return <OrderedItem key={orderedItem.id} orderedItem={orderedItem}/>
            })
          }
        </div>
        {
          cart.length > 0 && checkOutHandler()
        }
        <div className='right-bottom'>
          <p>Order Total</p>
          <p>{sampleCount} rs.</p>
        </div>
      </div>
    </div>
  )
}

export default CheckOut