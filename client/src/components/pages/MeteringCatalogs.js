import {Link} from 'react-router-dom'
import catalog from './assets/catalog.jpg'
import flow from './assets/flow.jpg'

function MeteringCatalogs() {
  return (
    <div>
      <div>
        <img src={catalog} alt='' className='catalog'/>
                  <div className='catalogtitle'>
            <h2>Meter Catalog</h2>
          </div>

        <div className='mainContainer'>
          <div className='innerContainer'>
          <div className='productsDetails'>
            <Link to=''>
            <img src={flow} alt='FLOWSIC900'/>
            <h3 className='catalogDesc'>FLOWSIC900</h3>
            <h4 className='catalogDesc'>ultrasonic flowmeter</h4> 
            <p className='catalogDesc'>custody transfer ultrasonic LNG meter</p>
            </Link>
          </div>

          <div className='productsDetails'>
            <Link to=''>
            <img src={flow} alt='FLOWSIC900'/>
            <h3 className='catalogDesc'>FLOWSIC900</h3>
            <h4 className='catalogDesc'>ultrasonic flowmeter</h4> 
            <p className='catalogDesc'>custody transfer ultrasonic LNG meter</p>
            </Link>
          </div>

          <div className='productsDetails'>
            <Link to=''>
            <img src={flow} alt='FLOWSIC900'/>
            <h3 className='catalogDesc'>FLOWSIC900</h3>
            <h4 className='catalogDesc'>ultrasonic flowmeter</h4> 
            <p className='catalogDesc'>custody transfer ultrasonic LNG meter</p>
            </Link>
          </div>

          <div className='productsDetails'>
            <Link to=''>
            <img src={flow} alt='FLOWSIC900'/>
            <h3 className='catalogDesc'>FLOWSIC900</h3>
            <h4 className='catalogDesc'>ultrasonic flowmeter</h4> 
            <p className='catalogDesc'>custody transfer ultrasonic LNG meter</p>
            </Link>
          </div>

          <div className='productsDetails'>
            <Link to=''>
            <img src={flow} alt='FLOWSIC900'/>
            <h3 className='catalogDesc'>FLOWSIC900</h3>
            <h4 className='catalogDesc'>ultrasonic flowmeter</h4> 
            <p className='catalogDesc'>custody transfer ultrasonic LNG meter</p>
            </Link>
          </div>

          <div className='productsDetails'>
            <Link to=''>
            <img src={flow} alt='FLOWSIC900'/>
            <h3 className='catalogDesc'>FLOWSIC900</h3>
            <h4 className='catalogDesc'>ultrasonic flowmeter</h4> 
            <p className='catalogDesc'>custody transfer ultrasonic LNG meter</p>
            </Link>
          </div>

          <div className='productsDetails'>
            <Link to=''>
            <img src={flow} alt='FLOWSIC900'/>
            <h3 className='catalogDesc'>FLOWSIC900</h3>
            <h4 className='catalogDesc'>ultrasonic flowmeter</h4> 
            <p className='catalogDesc'>custody transfer ultrasonic LNG meter</p>
            </Link>
          </div>

          <div className='productsDetails'>
            <Link to=''>
            <img src={flow} alt='FLOWSIC900'/>
            <h3 className='catalogDesc'>FLOWSIC900</h3>
            <h4 className='catalogDesc'>ultrasonic flowmeter</h4> 
            <p className='catalogDesc'>custody transfer ultrasonic LNG meter</p>
            </Link>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default MeteringCatalogs
