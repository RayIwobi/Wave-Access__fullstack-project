import { useState } from 'react'
import './pages.css'
import serviceimg from './assets/service.jpg'

function ServiceRequest() {
    const [fullname, setFullname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [service, setService] = useState("")
    const [companyname, setCompanyname] = useState("")
    const [description, setDescription] = useState("")
  return (
    <div>
    <div className='servicetopBanner'>
        <img src={serviceimg} alt='service' />
        <div className='coverme'></div>
    </div>
    <div className='servicerequest-container'>
      <div className='servicecontaoner-inner'>
        <div className='servicerequest-writeup'>
            <h2>SERVICE REQUEST FORM</h2>
            <h4>Thank you for your interest in our services. 
                Kindly fill the form below to get started. 
                Our team will get in touch with you within 48 hours
            </h4>
        </div>
        <label>Full Name:</label>
        <input
            type='text'
            value={fullname}
            onChange = {(e) => setFullname(e.target.value)}
            placeholder='Enter your full name' 
        />
        <label>Phone Number:</label>
        <input
            type='Number'
            value={phone}
            onChange = {(e) => setPhone(e.target.value)}
            placeholder='Enter your phone number' 
        />
        <label>Email:</label>
        <input
            type='email'
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
            placeholder='Enter your email' 
        />
        <label>Requires Service:</label>
        <input
            type='text'
            value={service}
            onChange = {(e) => setService(e.target.value)}
            placeholder='Enter your required service' 
        />
        <label>Company Name:</label>
        <input
            type='text'
            value={companyname}
            onChange = {(e) => setCompanyname(e.target.value)}
            placeholder='Enter your company name' 
        />
        <label>Project Description:</label>
        <textarea
            type='text'
            value={description}
            onChange = {(e) => setDescription(e.target.value)}
            placeholder='Briefly describe your project' 
            className='textarea'
        /><br/>

        <button className='sevrequest-button'>Submit</button>
        <button className='bila'>Submit</button>
      </div>
    </div>

    {/* chatbot code below */}
    <script defer src="https://static.getbutton.io/widget/bundle.js?id=Z84Xu"></script>
    </div>
  )
}

export default ServiceRequest
