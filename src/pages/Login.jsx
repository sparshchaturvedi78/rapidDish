import React from 'react'
import Template from '../components/Template'

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Access your personal account by logging in"
        image={"https://plus.unsplash.com/premium_photo-1661317288946-157b70e2edab?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}

export default Login