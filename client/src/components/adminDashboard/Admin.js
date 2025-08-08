import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../Authentication/authentic.css'
import imgle from '../adminDashboard/assets/4.jpg'
import './dash.css'
import ButtonOne from './ButtonOne'


function Dashboard() {
  const [currentUser, setCurrentUser] = useState(null); 

  const [activeSelection, setActiveSelection] = useState('')

  const navigate = useNavigate()

      axios.defaults.withCredentials = true
     useEffect(() => {
       //  axios.get('https://nediecom-n82p.onrender.com/auth/verify' ,{ withCredentials: true })
       axios.get('http://localhost:10000/auth/verify' ,{ withCredentials: true })
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
   // axios.get('https://nediecom-n82p.onrender.com/auth/dashboard', { withCredentials: true })
    axios.get('http://localhost:10000/auth/dashboard', { withCredentials: true })
      .then(res => {
        setCurrentUser(res.data);
      })
      .catch(err => {
        console.error('Error fetching user:', err);
      });
  }, []);




   axios.defaults.withCredentials = true
    const handleLogout = () => {
    // axios.get('https://nediecom-n82p.onrender.com/auth/logout' , { withCredentials: true })
         axios.get('http://localhost:10000/auth/logout' , { withCredentials: true })
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
    <div className='admin-settings'> 
    <div className='adminAreacontainer'>

      <div className='admin-sidebar'>
      <h1>Admin Section</h1><br/>
      <img src={imgle} alt='' className='admin-profileImage'/>
       

      {currentUser ? (
        <>
          <div className='profilearea'>
          <p>Welcome, {currentUser.username}</p><br/>
          <div><strong>Email: </strong>{currentUser.email}</div><br/>
         <div><strong>Phone number:</strong> {currentUser.phone}</div><br/>
          <div><strong>Address:</strong> {currentUser.address}</div><br/><br/>
          {/* <Link to='/update-details'><button className='update-profile'>Update profile</button></Link> */}

          </div>
        </>
      ) : (
        <p>Loading user info...</p>
      )}
      <div className='logoutbtn-back'>
       <button 
       onClick={handleLogout}
       className='logoutbutton'
       >Logout
       </button>
       <Link to='/dashboard'><button className='logoutbutton'>Back to account</button></Link>
      <Link to='/'><button className='logoutbutton'>Home</button></Link>
      </div>

      </div>
      <div className='adminPersonal'>
        <div className='adminContent'>
          <h2>Admin Dashboard</h2>
          <p>Manage your admin information and access your 
            uploaded informationfrom job seekers</p>
            <hr/>
        </div>
       
        <div className='button-Navigation'>
        <button onClick={()=>setActiveSelection('selection1')} className={`${activeSelection === 'selection1' ? 'boddy' : 'baskin'}`}>
          button1
        </button>

        <button onClick={()=>setActiveSelection('selection2')} className={`${activeSelection === 'selection2' ? 'boddy' : 'baskin'}`}>
          button2
        </button>

        <button onClick={()=>setActiveSelection('selection3')} className={`${activeSelection === 'selection3' ? 'boddy' : 'baskin'}`}>
          button3
        </button>

        <button onClick={()=>setActiveSelection('selection4')} className={`${activeSelection === 'selection4' ? 'boddy' : 'baskin'}`}>
          button4
        </button>

        <div className='button-results'>
        {activeSelection === 'selection1' && <div><ButtonOne/></div>}
        {activeSelection === 'selection2' && <div>Button two results. Company reports can go here</div>}
        {activeSelection === 'selection3' && <div>Button 3 results. Staff information can go here</div>}
        {activeSelection === 'selection4' && <div>Demo: anything can be placed here.</div>}
        </div>
        </div>
          
        </div>
      </div>
      </div>
  );
}

export default Dashboard;
