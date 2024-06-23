import NavBar from './components/NavBar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Orders from './pages/Orders'
import CheckOut from './pages/CheckOut'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sampleCount, setSampleCount] = useState(0); // Use for totalAmount

  return (
    <div className='app'>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} ></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} ></Route>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} ></Route>
        <Route path="/cart" element={<Cart  setSampleCount={setSampleCount}/>} ></Route>
        <Route path='/orders' element={<Orders />} ></Route>
        <Route path="/checkout" element={<CheckOut sampleCount={sampleCount}/>}></Route>
      </Routes>

      <Footer />

    </div>
  )
}

export default App
