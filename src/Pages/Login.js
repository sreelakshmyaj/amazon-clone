import React, { useState } from 'react'
import logo from '../Assets/logo-black.png'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
     .then((auth) => {
      history("/");
     })
     .catch((e) => alert(e.message));
  }

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
     .then(auth => {
      history("/")
     })
     .catch((e) => alert(e.message));
  }

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
              <input className='login__formInput' type='text' value={email} onChange={event => setEmail(event.target.value)} />

              <p style={{fontSize: '13px'}}><strong>Password</strong></p>
              <input className='login__formInput' type="password" value={password} onChange={event => setPassword(event.target.value)} />

              <button className='btn login__formBtn' onClick={login}>Sign in</button>
              <p><small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice</small></p>
            </form>
        </div>
        <div className='login__bottom'>
          <p className='login__bottomText'>New to Amazon?</p>
          <button className='btn login__bottomBtn' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login