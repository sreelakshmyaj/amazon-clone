import React from 'react'
import logo from '../Assets/logo-black.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login__container'>
        <div className='login__logo'>
            <Link to="/">
                <img src={logo} alt='logo' width={100}/>
            </Link>
        </div>
        <div className='login__form'>
            <p>Sign in</p>
            <p style={{fontSize: '13px'}}><strong>Email or mobile phone number</strong></p>
            <input className='login__formInput' type='text' />
            <button className='btn login__formBtn'>Continue</button>
            <p><small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice</small></p>
        </div>
    </div>
  )
}

export default Login