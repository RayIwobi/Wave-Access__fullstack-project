import React from 'react'
import productlisting from './assets/productlisting.jpg'

function ButtonOne() {
  return (
    <div className='btn1-section'>
      This is a demo but this section can contain the uploaded resume and details of job applicants
      <br/>
      <img src={productlisting} alt='' className='buttonone-img' />
    </div>
  )
}

export default ButtonOne
