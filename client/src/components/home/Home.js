import './home.css'
import {Link} from 'react-router-dom'
import migo from './assets/videos/migo.mp4'
import telecom from './assets/videos/telecom.mp4'
import ImageSlider from '../Slider/imageslider/ImageSlider.js'
import Comments from '../Comments/Comments.js'
// import maincontent from './assets/maincontent.jpg'
import Testimonial from '../Testimonial/Testimonial.js'
import oilgas from './assets/oilgas.jpg'
import pic1 from './assets/pic1.png'
import pic2 from './assets/pic2.png'
import pic3 from './assets/pic3.png'
import pic4 from './assets/pic4.png'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.webp'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'

import OurClients from '../pages/our clients/OurClients.js' 

import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";




function Home() {

   useEffect(() => {
    AOS.init({
      duration: 900, // animation duration
      once: true,     // animation only happens once
    });
  }, []);
  
  
  return (
    <div className='top-home'> 
      {/* Photo Banner */}
      <div className='banner-settings'>
        <div className='photoBanner'> 
         <div id="imageslider"><ImageSlider/></div>
         <video autoPlay muted loop fullscreen="true"> 
          <source src={migo} type='video/mp4'/>
            Your browser does not support the video tag. 
          </video>
         </div>
          <div className='photobanner-overlay'>

          </div>
         </div>
      {/* End of Photo Banner */}

      {/* Start main page content */}

      <div className='content-belowclass'>


      <div className='mid-content' data-aos="fade-right">
          <div className='mid-contentflex1'>
            <h2>Wave Access</h2>
            Welcome to Wave Access, your premier partner in multi-sector support services across Africa. From Oil and Gas to Construction, Marine to Energy, and beyond, we specialize in delivering tailored solutions that redefine industry standards.
            At Wave Access, we excel in Engineering, Procurement, Automation, Instrumentation, Safety Solutions, Marine Services, ICT, and more. <br/><br/>
            Our commitment to excellence is unwavering, ensuring your projects are not only completed on time but exceed expectations with meticulous attention to detail.
            What sets us apart? Our relentless pursuit of excellence through continuous training and capacity building ensures our team is equipped to tackle any challenge. This dedication has earned us the trust of our clients, fostering strong partnerships that drive innovation and deliver exceptional results.<br/><br/>
            Discover the Meter Limited difference today. Join us in shaping the future of African industries with cutting-edge solutions and unparalleled service. Contact us now to explore how we can elevate your projects and propel your success forward.
          </div>
        <div className='hompagevideo'>
          {/* <img src={maincontent} alt='maincontent' /> */}
          <video autoPlay muted loop fullscreen="true"> 
          <source src={telecom} type='video/mp4' className='telecom'/>
            Your browser does not support the video tag. 
          </video>
        </div>
      </div>
      {/* End main page content */}

      {/* Start page content */}
      
      {/* End page content */}
      
      <div className='colorcorner'>
        <h1>Exceptional <span>Services</span> We Provide</h1><br/><br/>
        <div className='regular' data-aos="fade-up">
        <div className='innercorner'>
          <img src={img1} alt='' />
          <h2>Telecommunications Installations</h2>
          <p>Corrosion remediation prevention and monitoring solutions, pipeline 
            installation and repairs, valve installationand maintenance</p>
          <Link to=''><button>Show More</button></Link>
        </div>
        <div className='innercorner'>
          <img src={img3} alt='' />
          <h2>Metering Systems</h2>
          <p>We provide electrical installation, process measurement and control etc</p>
          <p>We provide electrical installation, process measurement and control etc</p>
          <Link to=''><button>Show More</button></Link>
        </div>
        <div className='innercorner'>
          <img src={img4} alt='' />
          <h2>Civil Construction</h2>
          <p>We are also involved in engineering solutions and contructions and corporate 
            maintenance of rotation, static and flowline equipment
          We provide electrical installation...</p>

          <Link to=''><button>Show More</button></Link>
        </div>
        <div className='innercorner'>
          <img src={img5} alt='' />
          <h2>Unified Communications</h2>
          <p>We take pride in our long standing partnerships with various Original 
            Equipment Manufaturers (OEMs) across the globe.
          </p>
          <Link to=''><button>Show More</button></Link>
        </div>
        <div className='innercorner'>
          <img src={img2} alt='' />
          <h2>Civil Infrastructure</h2>
          <p>We provide Process and Pressure Safety, Technical and Vessel Operational Support,
            Subsea Life of Field Services etc.
          </p>
          <Link to=''><button>Show More</button></Link>
        </div>
        <div className='innercorner'>
          <img src={img6} alt='' />
          <h2>Electrical and Instrumentation</h2>
          <p>Multi discipline Rope Access Crews, Permanent Corrosion monitoring 
            solutions, Conventional NDT(UT, MP, LP, ET) etc
          </p>
          <Link to=''><button>Show More</button></Link>
        </div>
        </div>
      </div>



      <div className='thirdhomesection'>
        <div className='whatwerep'>
          <h2>What We Represent</h2>
          <p>Meter Limited is a response to emerging trends on 
            how quality services should be rendered in our market focus area, 
            in partnership with skilled foreign affiliates and highly experienced professionals.</p>
        </div>

        <div className='image-writeup'>
        <div data-aos="fade-right">
          <img src={oilgas} alt='' className='thirdimage'/>
        </div>
        <div className='writeupsection' data-aos="fade-left">
          <div className='rightside'>
            <img src={pic1} alt='' />
            <div className='rightsidetext'>
              <h2>Performance</h2>
              <p>We assist customers by contributing to budgets efficiencies, improved performance, 
                and reduced timelines – even in the face of tight and complex projects</p>
            </div>
          </div>
          <div className='rightside' >
            <img src={pic2} alt=''/>
            <div className='rightsidetext'>
              <h2>Experience</h2>
              <p>We take pride in our personnels, and partners’ experiences, engineered equipment & 
                the value we render to clients.</p>
            </div>
          </div>
          <div className='rightside' >
            <img src={pic3} alt=''/>
            <div className='rightsidetext'>
              <h2>Safety</h2>
              <p>We have high safety standards and a strong commitment to achieving zero accidents.</p>
            </div>
          </div>
          <div className='rightside' >
            <img src={pic4} alt=''/>
            <div className='rightsidetext'>
              <h2>Value</h2>
              <p>We take pride in our continuous improvement efforts and our commitment to best practices, 
                which has added value to our clients’ experience of us.</p>
            </div>
          </div>
          </div>
        </div>
      </div>

    </div>

      <div>
        <Testimonial style={{width:'1500px'}}/>
      </div>
      <div className='comments-section'>
        <div className='commentsection-inner'>
        <Comments />
        </div>
      </div>
      <div>
        <OurClients />
      </div>
    
    </div>
  )
}

export default Home
