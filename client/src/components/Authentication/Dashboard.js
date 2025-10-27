import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './authentic.css'
import imgle from '../adminDashboard/assets/4.jpg'
import email from './assets/email.png'
import user from './assets/user.png'
import analysis from './assets/analysis.png' 
import admin from './assets/admin.png'  
 

function Dashboard() { 
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate()

      axios.defaults.withCredentials = true
     useEffect(() => {
       axios.get('https://metering-website-app.onrender.com/auth/verify' ,{ withCredentials: true })
       //  axios.get('http://localhost:10000/auth/verify' ,{ withCredentials: true })
        .then((res) => {
            if(res.data.status){

            }
            else{
                navigate('/login') 
            }
        })
    }, [navigate])


  // Step 1: Get the current user
  useEffect(() => {
    axios.get('https://metering-website-app.onrender.com/auth/dashboard', { withCredentials: true })
    //axios.get('http://localhost:10000/auth/dashboard', { withCredentials: true })
      .then(res => {
        setCurrentUser(res.data);
      })
      .catch(err => {
        console.error('Error fetching user:', err);
      });
  }, []);


   axios.defaults.withCredentials = true
    const handleLogout = () => {
    axios.get('https://metering-website-app.onrender.com/auth/logout' , { withCredentials: true })
   //  axios.get('http://localhost:10000/auth/logout' , { withCredentials: true })
      .then(res => {
        if(res.data.status){
          navigate('/')
          window.location.reload()
        }
        else{}
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
    <div className='dashboardContainer'>
          
    <div className='dashboard-sidebar1'>
      <h1>Dashboard</h1>
      <div className='dahboard-imag'>
          <img src={imgle} alt='dahboard-image2' />
      </div>
      

      {currentUser ? (
        <>
          <div className='profilearea'>
          <p>Welcome, {currentUser.username}</p><br/>
          <div><strong>Email: </strong>{currentUser.email}</div><br/>
         <div><strong>Phone number:</strong> {currentUser.phone}</div><br/>
          <div><strong>Address:</strong> {currentUser.address}</div><br/><br/>

          </div>
        </>
      ) : (
        <p>Loading user info...</p>
      )}
      <div>
       <button 
       onClick={handleLogout}
       className='logoutbutton'
       >Logout
       </button>
      </div>

      </div>

          
        <div className='dashboardPersonal2'>
        <div className='forMobile'>
          <h2>Personal Information</h2>
          
        </div>
        
        <div className='profile-navigation'>
          <h3>Manage your personal information and access your 
            email account through this account dashboard</h3>
          <Link to='https://srv76.naijadomains.com:2031/roundcube/?_task=logout&_token=9ONTQ0tpLYH3kKetuuT3cdSKhnDZGFmN' target='_blank' className='dashboardIcons'>
          <div>Email Account</div>
          <img src={email} alt=''  />
          </Link>

          <Link to='/admin' style={{backgroundColor:'#E36414'}} className='dashboardIcons' id='section-hover'>
          <div>Admin section</div>
          <img src={admin} alt=''  />
          </Link>

          <Link to='/update-details' style={{backgroundColor:'#1DCD9F'}} className='dashboardIcons' id='section-hover'>
          <div>Edit Profile</div>
          <img src={user} alt=''  />
          </Link>

          <Link to='' style={{backgroundColor:'#D91656'}} className='dashboardIcons' id='section-hover3'>
          <div>Analytics</div>
          <img src={analysis} alt=''  />
          </Link>
      </div>

      </div>
    </div>





    
    </>
  );
}

export default Dashboard;


