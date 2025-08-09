import React from 'react'
import img1 from '../home/assets/img1.jpg'
import img2 from '../home/assets/img2.webp'
import img3 from '../home/assets/img3.jpg'
import img4 from '../home/assets/img4.jpg'
import img5 from '../home/assets/img5.jpg'
import img6 from '../home/assets/img6.jpg'
import { Link } from 'react-router-dom'


function Services() {
  return (
    <div><br/><br/>
        <div className='colorcorner'>
        <h1>Exceptional <span>Services</span> We Provide</h1>
        <div className='regular'>
        <div className='innercorner'>
          <img src={img1} alt='' />
          <h2>Specialized Services</h2>
          <p>Corrosion remediation prevention and monitoring solutions, pipeline 
            installation and repairs, valve installationand maintenance</p>
          <Link to=''><button>Show More</button></Link>
        </div>
        <div className='innercorner'>
          <img src={img3} alt='' />
          <h2>Metering and Instrumentation</h2>
          <p>We provide electrical installation, process measurement and control etc</p>
          <Link to=''><button>Show More</button></Link>
        </div>
        <div className='innercorner'>
          <img src={img4} alt='' />
          <h2>Engineering</h2>
          <p>We are also involved in engineering solutions and contructions and corporate 
            maintenance of rotation, static and flowline equipment</p>
          <Link to=''><button>Show More</button></Link>
        </div>
        <div className='innercorner'>
          <img src={img5} alt='' />
          <h2>Procurement</h2>
          <p>We take pride in our long standing partnerships with various Original 
            Equipment Manufaturers (OEMs) across the globe.
          </p>
          <Link to=''><button>Show More</button></Link>
        </div>
        <div className='innercorner'>
          <img src={img2} alt='' />
          <h2>Marine Support</h2>
          <p>We provide Process and Pressure Safety, Technical and Vessel Operational Support,
            Subsea Life of Field Services etc.
          </p>
          <Link to=''><button>Show More</button></Link>
        </div>
        <div className='innercorner'>
          <img src={img6} alt='' />
          <h2>Inspection and Maintenance</h2>
          <p>Multi discipline Rope Access Crews, Permanent Corrosion monitoring 
            solutions, Conventional NDT(UT, MP, LP, ET) etc
          </p>
          <Link to=''><button>Show More</button></Link>
        </div>
        </div>

        {/* chatbot code below */}
      <script defer src="https://static.getbutton.io/widget/bundle.js?id=Z84Xu"></script>
      </div>

    </div>
  )
}

export default Services
