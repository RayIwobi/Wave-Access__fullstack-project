import React, { useEffect, useState } from 'react'
import '../Authentication/authentic.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


//message notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminLogin() {
        const navigate = useNavigate()

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        //const [message, setMessage] = useState('')

        
        useEffect(() => {
            const checkAuth = async () => {
                try{
                   //   const res = await axios.get('https://nediecom-n82p.onrender.com/auth/verify', {
                  const res = await axios.get('http://localhost:10000/auth/verify', {
                        withCredentials:true
                    })
                    if (res.data.status === true){
                        navigate('/admin')
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
          //   axios.post('https://nediecom-n82p.onrender.com/auth/login',{email, password}, {withCredentials: true})
           axios.post('http://localhost:10000/auth/login',{email, password}, {withCredentials: true})
            .then((res) => {
                if(res.data.status){
                    navigate('/admin')
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
        <h2>Admin Login</h2>
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
        <h4>Forgotten your password? contact admin</h4>
        </form>
        
</div>

  )
}

export default AdminLogin
