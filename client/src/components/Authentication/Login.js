import { useEffect, useState } from 'react'
import './authentic.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


//message notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
        const navigate = useNavigate()

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        
        useEffect(() => {
            const checkAuth = async () => {
                try{
                      const res = await axios.get('https://metering-website-app.onrender.com/auth/verify', {
                  //const res = await axios.get('http://localhost:10000/auth/verify', {
                        withCredentials:true
                    })
                    if (res.data.status === true){
                        navigate('/dashboard')
                    }
                    
                }
                catch(err){
                    console.log(err)
                }
            }
            checkAuth() 
        },[navigate])
        

        axios.defaults.withCredentials = true   //must be added to prevent error generation from backend
        const handleLogin = (e) => {
            if(!email){
                toast.warning("You need to add your email")
            }
            e.preventDefault()
            axios.post('https://metering-website-app.onrender.com/auth/login',{email, password}, {withCredentials: true})
           // axios.post('http://localhost:10000/auth/login',{email, password}, {withCredentials: true})
            .then((res) => {
                if(res.data.status){
                    navigate('/dashboard')
                }
                else{
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error('db connection error')
                console.log(err)
            })
        }
    
  return (
    <div className='sign-up-container'>
        <ToastContainer position="top-right" autoClose={3000} />
        
    <form className='sign-up-form' onSubmit={handleLogin} id='login-form'>
        <h2>Sign in</h2>
        
        <div style={{fontSize:'18px', display:'flex', alignItems:'center'}}>Sign in here or <Link to='/signup' style={{color:'blue', fontSize:'18px', fontWeight:'200'}}> &nbsp;Create an account</Link></div>
        {/* <h5 style={{textAlign:'center'}}>We need your details to serve you better</h5> */}
        <br/>

        <label htmlFor='email'>Email: </label>
        <input 
            type='email' 
            //value={email}
            autoComplete='off' 
            placeholder='Email' 
            onChange={(e) => setEmail(e.target.value)} /><br />

        <label htmlFor='password'>Password: </label>
        <input required 
            type='password' 
            //value={password}
            placeholder='Password' 
            onChange={(e) => setPassword(e.target.value)} /> <br />

        <button type='submit' className='submit-button'>Sign in</button><br /><br />
        <Link to='/forgotpassword' className='forgotpassword'>Forgot password? Reset it here</Link>
        <div className='bottom-link'>
             <Link to='/signup'><button type='submit' id='submit-button'>Create an account</button></Link>
            {/* <h3>Don't have an account? </h3> */}
        </div>
        </form>
        
</div>

  )
}

export default Login
