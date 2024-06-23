import React, { useState } from 'react'
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LogInForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const[formData, setFormdData] = useState(
    {
      email : "",
      password : ""
    }
  )

  function changeHandler(event){
    event.preventDefault();
    setFormdData([prev => {
      return {...prev, [event.target.name] : event.target.value}
    }])
  }

  function submitHandler(e){
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Login Success");
    navigate("/");
    console.log(formData);
  }
  return (
    <div className='login-form-container'>
        <form className='form' onSubmit={submitHandler}>
          <label>
            <p className='heading'>Email address <sup>*</sup> </p>
            <input 
            required
            type="email"
            placeholder='Enter your email address' 
            name='email'
            value = {formData.email}
            onClick={changeHandler}
            className='form-input'
            />
          </label>

          <label>
            <p className='heading second-p'>Password <sup>*</sup></p>
            <input 
            required
            type= {showPassword ? "text" : "password"} 
            placeholder='Enter password'
            name='password'
            value={formData.password}
            onClick={changeHandler}
            className='form-input'
            />

            <span className='eye' onClick={ () => {setShowPassword(!showPassword)}}>
              { showPassword ?<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>

            <Link className='forgot-link' to="#">
              <p className='forgot-pass'>Forgot Password</p>
            </Link>
          </label>

          <button className='nav-btn1 sign-in-btn'>Sign in</button>
        </form>
    </div>
  )
}

export default LogInForm;