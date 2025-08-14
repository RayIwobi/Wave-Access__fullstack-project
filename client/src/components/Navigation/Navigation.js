import React from 'react'
import './navi.css'
import { Link } from 'react-router-dom'
import email from './assets/email.png'
// import meter from './assets/meter.png'

function Navigation() {
  return (
    <div className='nav-container'>
        <div className='inner-contaoner'>
        <div className='phone-numbers'>
        <h3>+234 7060758339 | +234 9074403272</h3>
        </div>

        <div className='photoimage'>
        <img src={email} alt='' style={{width:'20px', height:'20px'}}/>&nbsp;
        <h3>rayicon@gmail.com</h3>
        </div>

        <div className='requestService'>
        <Link to='/servicerequest'><button className='requestButton'>Request Service</button></Link>
        </div>
        
        <div className='backend'>
          <Link to='/login'>Login</Link>
          <div>|</div>
          <Link to='/adminlogin'>Admin</Link>
        </div>
        </div>
      
    </div>
  )
}

export default Navigation

