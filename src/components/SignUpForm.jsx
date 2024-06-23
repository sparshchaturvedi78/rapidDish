import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignUpForm = ({ setIsLoggedIn }) => {

  const [formData, setFormdData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  )
  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("Customer");

  function submitHandler(e) {
    e.preventDefault();
    if (formData.confirmPassword !== formData.password) {
      toast.error("Password do not match")
      return;
    }
    setIsLoggedIn(true);
    toast.success("Sign in Success");
    navigate("/");
    console.log(formData);
  }

  function changeHandler(event) {
    setFormdData(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div className='signup-form-container'>
        {
          accountType === "Customer" ?
          <div className='signup-upper-btns'>
            <button className='account-btn common-btn-style' onClick={() => { setAccountType("Customer")}}>Customer</button>
            <button  className="common-btn-style" onClick={() => { setAccountType("Seller") }}>Seller</button>
          </div>
          :
          <div className='signup-upper-btns'>
            <button className='common-btn-style' onClick={() => { setAccountType("Customer")}}>Customer</button>
            <button className='account-btn common-btn-style' onClick={() => { setAccountType("Seller") }}>Seller</button>
          </div>
        }
      <form className='form' onSubmit={submitHandler}>
        <div>
          <label>
            <p className='heading'>First Name <sup>*</sup></p>
            <input
              required
              type="text"
              placeholder='Enter First Name'
              name='firstName'
              value={formData.firstName}
              onChange={changeHandler}
              className = "form-input"
            />
          </label>
          <label>
            <p className='heading'>Last Name <sup>*</sup></p>
            <input
              required
              type="text"
              placeholder='Enter Last Name'
              name='lastName'
              value={formData.lastName}
              onChange={changeHandler}
              className = "form-input"
            />
          </label>
        </div>

        <label>
          <p className='heading'>Email Address <sup>*</sup></p>
          <input
            required
            type="email"
            placeholder='Enter your email address'
            name='email'
            value={formData.email}
            onChange={changeHandler}
            className = "form-input"
          />
        </label>

        <div>
          <label>
            <p className='heading'>Create Password <sup>*</sup></p>
            <input
              required
              type={showCreatePass ? "text" : "password"}
              placeholder='Enter Password'
              name='password'
              value={formData.password}
              onChange={changeHandler}
              className = "form-input"
            />
            <span className='eye' onClick={() => { setShowCreatePass(!showCreatePass) }}>
              {showCreatePass ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>
          <label>
            <p className='heading'>Confirm Password <sup>*</sup></p>
            <input
              required
              type={showConfirmPass ? "text" : "password"}
              placeholder='Confirm Password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={changeHandler}
              className = "form-input"
            />

            <span className='eye' onClick={() => { setShowConfirmPass(!showConfirmPass) }}>
              {showConfirmPass ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>
        </div>

        <button className='nav-btn1 sign-in-btn'>Create Account</button>
      </form>
    </div>
  )
}

export default SignUpForm;