import './footer.css'
import meter from '../Navigation/assets//meter.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'
import youtube from './assets/youtube.png'
import linkedin from './assets/linkedin.png'
import{Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer-container'> 
      <div className='top-footer'>

        <div className='footer-logo-about'>
          <div >
            <div className='logo-settings'>
              <img src={meter} alt='meter' /> 
              <h4>Wave Access</h4> 
            </div>
            
            <p> 
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown 
              printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially 
              unchanged.
            </p>
            <div className='socials'>
            <img src={facebook} alt='facebook' />
            <img src={twitter} alt='twitter' />
            <img src={youtube} alt='youtube' />
            <img src={linkedin} alt='linkedin' />
            </div>
          </div>
        </div>

        <div className='footer-infoGroup'>
          <div className='footer-contactDetails'>
            <h2 className='headingsinfo'>Contact Details</h2>
            NG: 32, Modupe Young Street, 
            Thomas, Ajah, Lekki-Epe Expressway, Lagos, Nigeria<br/><br/>
            NA: 147, Sam Nujoma Avenue Walvis Bay, Namibia<br/><br/>
            NA +264-81-844-1704<br/>
            NG +234-906-818-6433
            info@ttriangleltd.com

            <Link to='/servicerequest'><button className='footerButton'>Request Service</button></Link>
          </div>

          <div className='footer-meterwebsite'>
            <h2 className='headingsinfo'>Quick Menu</h2>
            <ul className='ul-links-meterlimited'>
              <Link to='/'><div>Home</div></Link>
              <Link to='about'><div>About</div></Link>
              <Link to='/services'><div>Services</div></Link>
              <Link to='/gallery'><div>Gallery</div></Link>
              <Link to='/contact'><div>Contact</div></Link>
            </ul>

          </div>

          <div className='footerServices'>
             <h2 className='headingsinfo'>Services</h2>
            <ul className='ul-links-meterlimited'>
              <Link to='/'><div>Instrumentation and Metering</div></Link>
              <Link to='/services'><div>Inspection and maintenance service</div></Link>
              <Link to='/gallery'><div>Specialized services</div></Link>
              <Link to='about'><div>Procurement</div></Link>
              <Link to='/contact'><div>safety solutions</div></Link>
            </ul>
          </div>
          
        </div>
      </div>

      <div className='bottom-footer'>
        <h4>Wave Access  | All rights reserved &copy; 2025 | Built by Techlod</h4>
      </div>
      
    </div>
  )
}

export default Footer
