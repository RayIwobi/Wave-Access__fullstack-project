import React, { useEffect, useState } from 'react';
import './comments.css'
import axios from 'axios'

//message notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Comments() {
    const [user, setUser] = useState('')
    const [comment, setComment] = useState('')
    const [getcomments, setGetcomments] = useState([])  


    //for getting or showing all the comments
    useEffect(() => {
      // axios.get('https://metering-website-app.onrender.com/comments/read' , { withCredentials: true })
         axios.get('http://localhost:10000/comments/read' , { withCredentials: true }) 
        .then(res => {
            console.log(res.data)
            setGetcomments(res.data)
        })
        .catch(err => console.log(err))
    }, [])


    const handlePost = (e) =>{
        e.preventDefault()
        if(user === ''){
            toast.warning("Type your name")
            return
        }
        if(comment === ''){
            toast.warning("Type a comment")
        }
        else{
        axios.post('http://localhost:10000/comments/sendcomment', {user, comment}, {withCredentials:true})
       // axios.post('https://metering-website-app.onrender.com/comments/sendcomment', {comment}, {withCredentials:true})
        .then(res => {
            console.log(res)
            toast.success('Comment added!')

            //setGetcomments(prev => [...prev, newComment]); 
            setGetcomments(prev => [res.data, ...prev]);
        })
        
        .catch(err => {
            console.log(err);
            toast.error('something went wrong')
        })
        setComment('')
        setUser('')
        }
    }


  return (
    <div className='container'>
        <ToastContainer position="top-right" autoClose={3000} />
        <div>
        <div className='comment-title'>
            <h3 style={{fontFamily:'Libre Baskerville', fontWeight:'300'}}>Leave us a comment</h3>
        </div>
        <div className='comments-input-section' id='comment-texarea'>
            <div className='commentForm-input'>
            <input
                type='text'
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder='Enter your name'
                className='user-input'
            />

            <textarea
                type='text'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder='Tell us what you think'
                className='comment-textarea'
            />
            </div>

            <button onClick={handlePost} >Send</button>
          
            
        </div>
          <hr className='horizontal-line'/>
        <div className='comment-container'>
            <br/>
            <h3 style={{fontFamily:'Libre Baskerville', fontWeight:'400',fontSize:'16px'}}>&nbsp;Comments</h3><br/>


            {getcomments.map((get) => {
                return <div key={get._id} className='comment-output'>
                    <div><strong>{get.user}</strong>&nbsp;{new Date(get.createdAt).toLocaleString()}</div>
                    <div>{get.comment}</div><br/>
                    </div>
            })}


        </div>
        </div>
    </div>
  )
}

export default Comments 
