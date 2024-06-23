import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { remove } from '../redux/Slices/CartSlice'
import {useDispatch} from 'react-redux'
import toast from 'react-hot-toast'

const CartItem = (props) => {
    const[count , setCount] = useState(1);
    console.log('printing inside the cartitem')
    console.log(count);
    
    const setTotalAmout = props.setTotalAmount;
    const totalAmount = props.totalAmount;
    const dispatch = useDispatch();
    
    function removeFromCart (){
        dispatch(remove(props.item.id))
        toast.success('Item Removed')
    }
    
    function decreaseCount(){
        if(count == 1) {
            dispatch(remove(props.item.id))
            toast.error('Item Removed')
        }
        else {
            setCount(count-1);
            
        }
        setTotalAmout(totalAmount - props.item.price);
    }

    function incrementCount(){
        setCount(count+1);
        setTotalAmout(totalAmount + props.item.price);
    }

  return (
    <div className='cardItem-container'>
        <div className='img-div'>
            <img src={props.item.img}  alt="" />
        </div>
        <div className='cartItem-right'>
            <div>
            <h1>{props.item.name}</h1>
            <p>{props.item.description}</p>
            </div>
            <div className='inc-dec-btn'>
                <button onClick={decreaseCount}>-</button>
                <p>{count}</p>
                <button onClick={incrementCount}>+</button>
            </div>
            <div className='price-icon'>
                <p>{props.item.price} rs.</p>
                <FontAwesomeIcon className='delete-icon' onClick={removeFromCart} icon={faTrash} style={{color: "#f95554",}} />
            </div>
        </div>
    </div>
  )
}

export default CartItem