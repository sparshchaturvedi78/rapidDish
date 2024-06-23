import React from 'react'
import LogInForm from '../components/LogInForm';
import SignUpForm from '../components/SignUpForm';
import { FcGoogle } from "react-icons/fc";


const Template = ({ title, desc1, image, formType, setIsLoggedIn }) => {

    return (
        <div className='temp-container'>
            <div className='temp-left-part'>
                <h1>{title}</h1>
                <p>
                    <span className='temp-desc'>{desc1}</span>
                </p>

                {
                    formType === "signup" ? <SignUpForm setIsLoggedIn = {setIsLoggedIn}/> : <LogInForm setIsLoggedIn = {setIsLoggedIn} 
                />}

                <div className='temp-bottom'>
                    <div className='color-div'></div>
                    <p>OR</p>
                    <div className='color-div'></div>
                </div>

                <button className='nav-btn1 google-btn'>
                    <FcGoogle />
                    <p>Sign up with Google</p>
                </button>

            </div>
                <div className='temp-right-part'>
                    <img src={image} alt="" />
                </div>
        </div>
    )
}

export default Template
