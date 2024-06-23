import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../redux/Slices/CartSlice"
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  const likedCourses = props.likedCourses;
  const setLikedCourses = props.setLikedCourses;
  const isLoggedIn = props.isLoggedIn;

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  // console.log('printing inside card');
  // console.log(cart);

  const addToCart = () => {
    if (isLoggedIn) {
      dispatch(add(props.dish));
      toast.success("Item added to Cart");
    }
    else {
      toast.error('LogIn Your Account')
    }

    // dispatch(add(props.dish));
    // toast.success("Item added to Cart");

  }

  function clickHandler() {
     if(isLoggedIn) {
      if (likedCourses?.includes(props.dish.id)) {
        // pahle se liked 
        setLikedCourses((prev) => prev.filter((cid) => cid !== props.dish.id));
        toast.error("Liked Removed");
      }
      else {
        // pahle se like nahi hai course 
        // insert karne h y course like course me 
        if (likedCourses?.length === 0) {
          setLikedCourses([props.dish.id]);
        }
        else {
          setLikedCourses((prev) => [...prev, props.dish.id]);
        }
        toast.success("Liked Successfully");
      }
     }
     else {
      toast.error('LogIn Your Account')
     }
  }

return (
  <div className='card-container'>
    <img className='dish-img' src={props.dish.img} alt="" />
    <p className='dish-name'>{props.dish.name}</p>
    <p className='dish-desc'>{props.dish.description.substring(0.10) + "..."}</p>
    <div className='price-btn-div'>
      <p className='dish-price'>{props.dish.price} rs</p>

      {
        cart.some((p) => p.id == props.dish.id) ? (
          <NavLink to="/cart">
            <button className='nav-btn1'>Go to Cart</button>
          </NavLink>
        ) : (
          <button onClick={addToCart} className='nav-btn1'>Add to Cart</button>
        )
      }

    </div>
    <div className='dish-icon'>
      <button onClick={clickHandler}>
        {
          likedCourses?.includes(props.dish.id) ? <FcLike fontSize="2rem" /> : <FcLikePlaceholder fontSize="2rem" />
        }
      </button>
    </div>
  </div>
)
}

export default Card;