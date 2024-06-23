import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'
// import {remove} from '../redux/Slices/CartSlice'
import toast from 'react-hot-toast'


const Cart = (props) => {
  const setSampleCount = props.setSampleCount;
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log('printing inside cart')
  // console.log(cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  setSampleCount(totalAmount);

  function checkOutHandler(){
  //   cart.map((cartItem) => {
  //     dispatch(remove(cartItem.id));
  //   })
    toast.success('Ordered Placed Successfully')
  }

  return (
    <div className='cart-container'>
      {
        cart.length > 0 ? (
          <div className='cart-present'>
            <div className='cart-item-side'>
              {
                cart.map((cartItem) => {
                  return <CartItem  setTotalAmount={setTotalAmount} totalAmount={totalAmount} key={cartItem.id} item={cartItem} />
                })
              }
            </div>
            <div className='total-price-side'>
              <div className='total-price-upper'>
                <p>Your Cart</p>
                <h1>Summary</h1>
                <p>Total Items : <span>{cart.length}</span></p>
              </div>
              <div className='total-price-lower'>
                <p>Total Amount: <span>{totalAmount} rs.</span></p>
                <NavLink to="/checkout">
                  <button onClick={checkOutHandler} className='nav-btn1 checkout-btn'>CheckOut Now</button>
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <div className='cart-notpresent'>
            <p>Your cart is empty</p>
            <Link to='/'>
              <button className='nav-btn1 shop-now'>Shop Now</button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart