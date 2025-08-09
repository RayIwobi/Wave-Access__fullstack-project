import './pages.css'
import img1 from './assets/img1.jpg'
import img8 from './assets/img8.jpg'
import accuracy from './assets/accuracy.png'
import dependability from './assets/dependability.png'
import empowerment from './assets/empowerment.png'
import leadership from './assets/leadership.png'
import partnership from './assets/partnership.png'
import sustainability from './assets/sustainability.png'

function About() {


  return (
    <div className='totalabout'> 
    <div className='servicetopBanner'>
        <img src={img1} alt='service' />
        <div className='coverme'></div>
    </div>
    <div  className='aboutus-container'>
      <div className='inner-container'>
      <p className='aboutWriteup'>
        <h1>Meter Limited</h1>
        At Meter Limited, we specialize in delivering high-precision 
        metering and instrumentation solutions that power efficiency, 
        accuracy, and reliability across industries. With a strong 
        foundation in engineering excellence and innovation, we serve 
        
        utilities, industrial plants, energy companies, and infrastructure 
        developers with state-of-the-art flow meters, pressure instruments, 
        temperature sensors, level indicators, and automation systems.

        From design and manufacturing to calibration and support, we
         offer end-to-end solutions tailored to the specific needs of 
         our clients. Our expertise spans across water and wastewater 
         management, oil and gas, energy, chemical processing, and 
         manufacturing industries.

        Backed by decades of experience, a team of expert engineers, 
        and a commitment to quality, we continuously raise the bar in 
        measurement technology. Our clients trust us not just for the 
        products we supply, but for the accuracy we bring to their 
        operations, the transparency in our services, and the support 
        that ensures their systems run smoothly.
      </p>
      <div className='theaboutimg'>
      <img src={img8} alt='' className='aboutImage'/>
      </div>
      </div>
      <div className='missionVisionvalues1'>
        <div className='mission-vision'>
          <div className='mission-vision-setting'>
            <h2>Vision</h2>
            <p>
              To be a global leader in precision measurement and 
              control technologies, setting benchmarks in innovation, 
              customer service, and product quality. We envision a 
              future where every system, plant, and utility we serve 
              operates at its optimal best—safe, efficient, and 
              intelligently managed.
            </p>
          </div>
          <div className='mission-vision-setting'>
            <h2>Mision</h2>
            <p>
              To deliver industry-leading metering and instrumentation 
              solutions that drive operational accuracy, enhance system 
              efficiency, and empower our clients to make data-driven decisions. 
              We are committed to supporting sustainable industrial development 
              through innovative, reliable, and cost-effective technologies.
            </p>
          </div>
        </div>

        <div className='values-writeup'>
        <div className='values'>
          <h1>Values</h1>
          <p className='values-content'>
            <p>Precision: We stand for unmatched accuracy and consistency in every 
            product and solution we deliver.</p><br/>

            <p>Innovation: We invest in continuous research and development to 
            offer cutting-edge technologies that meet the evolving demands of 
            modern industries.</p><br/>

            <p>Integrity: We uphold transparency, honesty, and fairness in every 
            business interaction.</p><br/>

            <p>Customer Focus: Our clients are our partners. We listen, understand, 
            and deliver tailored solutions that exceed expectations.</p><br/>

            <p>Sustainability: We are committed to solutions that support environmental 
            responsibility and long-term operational viability.</p><br/>

            <p>Excellence: We strive for the highest standards in product quality, 
            service delivery, and technical support</p>
          </p>
        </div>
      </div>
                

     </div>
      <div className='represent-container'>
        <h2>What We Represent</h2>
      <div className='what-we-represent'>
        <div className='reps-inner'>
          <div className='top-bottom-content'>
            
          At Meter Limited, we represent more than just products—we embody a 
          commitment to precision, trust, technological innovation, and 
          customer-centric excellence. Every solution we deliver, every partnership 
          we build, and every decision we make is guided by a deeper purpose: to be 
          the benchmark of reliability and intelligence in the field of measurement 
          and instrumentation.
          </div>
        </div>

          <div>
          <div className='represent-content'>
          <div className='point'>
          <h2 className='represent-modify'>
            <img src={accuracy} alt=''/>
            <strong>Accuracy</strong>
          </h2>
          We represent unwavering precision. We take pride in delivering metering and instrumentation 
          solutions that consistently meet the highest standards of accuracy.
          </div> <br/><br/>

          <div className='point'>
          <h2 className='represent-modify'>
            <img src={dependability} alt=''/>
            <strong>Dependability</strong>
          </h2>
          From initial consultation and system design to post-installation support, 
          we represent dependability in action. Our clients know they can count on 
          us—not just for top-tier instruments.
          </div>

          <div className='point'>
          <h2 className='represent-modify'>
            <img src={leadership} alt=''/>
            <strong>Tech Leadership</strong>
          </h2>
          We represent the cutting edge of measurement technology. In a  
          rapidly evolving world towards digitalization and automation, we continuously 
          invest in research, innovation, and strategic partnerships to stay ahead of 
          the curve.
          </div>
          </div>

          <div className='represent-content'>
          <div className='point'>
          <h2 className='represent-modify'>
            <img src={sustainability} alt=''/>
            <strong>Sustainability</strong>
          </h2>
          We represent responsible and ethical business practices. Our solutions are 
          designed not only for technical excellence but also with sustainability in 
          mind. 
          </div>

          <div className='point'>
          <h2 className='represent-modify'>
            <img src={empowerment} alt=''/>
            <strong>Empowerment</strong>
          </h2>
          We represent knowledge sharing and empowerment. Beyond supplying instruments, 
          we educate and empower our clients and partners with the knowledge they need 
          to fully leverage their systems.
          </div> <br/><br/>

          <div className='point'>
          <h2 className='represent-modify'>
            <img src={partnership} alt=''/>
            <strong>Partnership</strong>
          </h2>
          We represent partnership over transaction. We don’t just sell a meter or 
          install a sensor—we become an extension of our client’s engineering team.
          </div> 
          </div>
          </div>

          <div className='bottom-content'>
          <div className='top-bottom-content'>
          In everything we do, Meter Limited represents a singular vision: to be 
          the trusted backbone of intelligent measurement and control systems. Through 
          precision, innovation, and integrity, we help industries move forward—smarter, safer, 
          and stronger.
          </div>
          </div>
          
      </div>
      </div>

    </div>

    {/* chatbot code below */}
    <script defer src="https://static.getbutton.io/widget/bundle.js?id=Z84Xu"></script>
  </div> 
  )
}

export default About
