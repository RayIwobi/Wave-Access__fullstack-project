import {useState} from 'react'
import img2 from './assets/img2.jpg'
import axios from 'axios'

function Contact() {
  const [fullname, setFullname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    axios.post('http://localhost:10000')
  }
  return (
    <div className='contact-main-comtainer'>  
      <div className='topimg'>
        <img src={img2} alt=''/>
      </div>
    <div className='contact-container'>
      
      <div>
      <div className='inner-getInTouch'> 
        <div className='Get-in-touch'>
          <h2>Get in touch</h2>
          <h4>Address</h4>
          <div>call us at: +234 7060758339</div>
          <div>Email: rayicon@gmail.com</div><br/>
          <h4> 🕘Business Hours:</h4>
          <div>Monday – Friday: 9:00 AM – 6:00 PM</div>
          <div>Saturday: 10:00 AM – 2:00 PM (Support Only)</div>
          <div>Sunday & Public Holidays: Closed</div>
        </div>
        </div>


        <div className='map-form-section'>
          <div className='mapAndForm'>
          <div className='contact-map'>
            <h2>Our Location</h2>
            <div>
              <iframe
              title='map'
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3975.5729084718023!2d7.047790599654404!3d4.843149537386036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1severyday%20supermarket%20Rumuokwurusi!5e0!3m2!1sen!2sng!4v1753866166022!5m2!1sen!2sng" 
              width="400" 
              height="560" 
              style={{border:"0" }}
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          <div className='outerForm'>
          <div className='contact-form'>
            <h2>Send us a message</h2>
              <p>Thank you for contacting us. Kindly fill the 
              form below to get in touch with us. Our representative 
              will get in touch with you within 48 hours</p> 

              <form onsubmit={handleSubmit}>
                <label>Full Name:</label>
                <input 
                  type='text'
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder='Enter your fullname'
                />
                <label>Phone:</label>
                <input 
                  type='number'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='Enter your Phone'
                />
                <label>Email:</label>
                <input 
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                />
                <label>Message:</label>
                <textarea 
                  type='text'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder='Enter your message'
                  className='contact-message'
                />

                <button className='contact-submit'>Submit</button>
              </form>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
