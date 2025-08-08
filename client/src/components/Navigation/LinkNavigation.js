import React from 'react'
import meters from './assets/meter.png'
import search from './assets/search.png'
import './navi.css'
import { NavLink, Link, useLocation } from 'react-router-dom' 
import downarrow from './assets/downarrow.png'
import Menu from '../menu/Menu'


function LinkNavigation({color, setColor}) {  

    const location = useLocation()

    //the two lines below were used to hide the searchbar and cart on the login and other specified pages
    const hiddenPaths = ['/login','/signup', '/dashboard', '/admin', '/forgotpassword', '/reset-password/', '/update-password', '/mainpage' ];
    const shouldHideSection = hiddenPaths.includes(location.pathname);

  return (
    <div className='midNav-mainContainer'> 
        
        {!shouldHideSection && (
        <div className='midnavInner'>
            <div className='logoinlinkNav1'>
                <div className='logo-name'>
                    <Link to='/'><img src={meters} alt='companyLogo' className='searchbarimg'/></Link>
                    <h3>Meter Limited</h3>
                </div>
                
                
            </div>
            <div className='desktopMenu'>
                <ul className='linknavs'>
                    <NavLink to='/' className={({isActive}) => (isActive ? 'active':'notactive')}><div>Home</div></NavLink>
                    <NavLink to='about' className={({isActive}) => (isActive ? 'active':'notactive')}><div>About</div></NavLink>
                    
                    <div className='servicesArea'>
                    <li>
                        <NavLink to='/services' className={({isActive}) => (isActive ? 'active':'notactive')} id='serv-it'><div>Services</div></NavLink>
                        <ul className='service-mod'>
                            <Link to='/catalog'><li>Product Catalog</li></Link>
                            <Link to='/recruitment'><li>Recruitment Portal</li></Link>
                        </ul>
                    </li>
                    </div>

                    <NavLink to='/gallery' className={({isActive}) => (isActive ? 'active':'notactive')}><div>Gallery</div></NavLink>
                    <NavLink to='/contact' className={({isActive}) => (isActive ? 'active':'notactive')}><div>Contact</div></NavLink>
                </ul>
            </div>
             {/* <img src={downarrow} alt='downarrow' className='downarrow'/> */}
            <div className='search-section1'>
                <input 
                    type='text'
                    placeholder='Search our site'
                    className='search-input'
                />

            <img src={search} alt='search' className='searchicon' style={{width:'30px', height:'30px'}}/>
            </div>
            <div className='mobileMenu-topBar1'>
                <Menu  />
            </div>

        </div>
        )}
    </div>
  )
}

export default LinkNavigation
