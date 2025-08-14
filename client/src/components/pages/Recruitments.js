import { useState } from 'react'
import './pages.css'
import recruit from './assets/recruit.jpg'

function ServiceRequest() {
    const [file, setFile] = useState("")
    const [fullname, setFullname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [service, setService] = useState("")
    const [companyname, setCompanyname] = useState("")
    const [description, setDescription] = useState("")
  return (
    <div>
    <div className='servicetopBanner'>
        <img src={recruit} alt='service' />
        <div className='coverme'></div>
    </div>
    <div className='servicerequest-container'>
      <div className='servicecontaoner-inner'>
        <div className='servicerequest-writeup'>
            <h2>RECRUITMENT FORM</h2>
            <h4>You are welcome to the recruitment page. 
                Kindly fil out the form and we will get back to you
            </h4>
        </div>
        <label>Upload Resume:</label>
        <input
            type='file'
            value={file}
            onChange={(e)=>setFile(e.target.value)}
        />
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
        <label>Position applying for:</label>
        <input
            type='text'
            value={service}
            onChange = {(e) => setService(e.target.value)}
            placeholder='Position applying for' 
        />
        <label>Location:</label>
        <input
            type='text'
            value={companyname}
            onChange = {(e) => setCompanyname(e.target.value)}
            placeholder='Location' 
        />
        <label>Tell us about yourself briefly:</label>
        <textarea
            type='text'
            value={description}
            onChange = {(e) => setDescription(e.target.value)}
            placeholder='Tell us about yourself briefly' 
            className='textarea'
        /><br/>

        <button className='sevrequest-button'>Submit</button>
        <button className='bila'>Submit</button>
      </div>
    </div>

    </div>
  )
}

export default ServiceRequest
