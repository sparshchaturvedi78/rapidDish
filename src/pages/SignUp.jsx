import React from 'react'
import loginImg from "../assets/loginImg.png"
import Template from '../components/Template'
import signinImg from "../assets/signinImg.png"

const SignUp = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
      title="Order the variety of food with rapidDish"
      desc1="You don't need a silver folk to eat good food"
      image={signinImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default SignUp