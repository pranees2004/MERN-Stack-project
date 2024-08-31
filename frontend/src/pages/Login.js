import React from 'react'
import './Login.css'
import kfc from '../images/kfc.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <section className = 'lg'>
                <h3>Sign In / Sign up</h3>
                <br/>
                <Link to = '/'> <img src = {kfc} alt=''/></Link>
                <br/>
                <h2>Let’s Sign In or Create account with your phone number!
                </h2>
                <div className='input-box'>
                     <input type='number'placeholder='Phone number*' required />
            </div><br/>
            <h6>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</h6>
            <br/>

            <button className='btn btn-dark'>Send Me a Code</button>
            <br/>
            <br/>
            <h6>(OR)</h6>
            <br/>

            
            <button className='btn btn-light'>Skip Continue As a Guest</button>
        </section>
    </div>
  )
}

export default Login