import React from 'react'
import logo from '../Assets/logo-black.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <div className='login__logo'>
            <Link to="/">
                <img src={logo} alt='logo' width={100}/>
            </Link>
        </div>
        <div className='login__form'>
            <p className='login__formHeader'>Sign in</p>
            <form>
              <p style={{fontSize: '13px'}}><strong>Email or mobile phone number</strong></p>
              <input className='login__formInput' type='text' />

              <p style={{fontSize: '13px'}}><strong>Password</strong></p>
              <input className='login__formInput' type="password" />
              <button className='btn login__formBtn'>Sign in</button>
              <p><small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice</small></p>
            </form>
        </div>
    </div>
  )
}

export default Login