import React from 'react'
import { Link } from 'react-router-dom'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../assets/logo.png"
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

const NavBar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    const { cart } = useSelector((state) => state)
    return (
        <div className='nav-container'>
            <Link to='/' >
                <img src={logo} width={210} alt="" />
            </Link>
            <div className='links'>
                <Link className='link' to="/">Home</Link>

                <Link className='link' to="/">Category</Link>

                <Link className='link' to="/">Menu</Link>

                <Link className='link' to="/">Service</Link>

                <Link className='link' to="/">Shopping</Link>

            </div>

            <Link to='/cart' >
                <button className='cart-icon'>
                    <FontAwesomeIcon icon={faCartShopping} style={{}} />
                    {
                        cart.length > 0 &&
                        <div className='cart-ball'>
                            <span>{cart.length}</span>
                        </div>

                    }
                </button>
            </Link>

            <div className='btns'>
                {!isLoggedIn &&
                    (<Link to="/signup">
                        <button className='nav-btn' ><FontAwesomeIcon icon={faUserPlus} style={{}} /> Sign Up </button>
                    </Link>)
                }

                {!isLoggedIn &&
                    (<Link to="/login">
                        <button className='nav-btn1'><FontAwesomeIcon icon={faArrowRightToBracket} style={{}} />     Login</button>
                    </Link>)
                }

                {isLoggedIn &&
                    (<Link to="/orders">
                        <button className='nav-btn' >Orders</button>
                    </Link>)
                }

                {isLoggedIn &&
                    (<Link to="/">
                        <button className='nav-btn1' onClick={
                            () => {
                                setIsLoggedIn(false)
                                toast.success("Logout successfully");
                            }
                        }>LogOut</button>
                    </Link>)
                }

            </div>
        </div>
    )
}

export default NavBar