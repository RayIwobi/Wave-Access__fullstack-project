import ImageSlider from './imageslider/ImageSlider.js'
import img2 from './galleryImages/img2.webp'
import tall from './galleryImages/tall.jpg'
import img3 from './galleryImages/img3.jpg'
import oilgas from './galleryImages/oil1gas2.jpg'
import content from './galleryImages/maincontent.jpg'
import img5 from './galleryImages/img5.jpg'
import img6 from './galleryImages/img6.jpg'
import img4 from './galleryImages/img4.jpg'
import maso from './galleryImages/maso.jpg'
import app from './galleryImages/app-1.jpg'

function Gallery() {
  return (
    <div>
      <div>
        <div className='gallerySlider'><ImageSlider/></div>
        <h2>Gallery</h2>
        <div className='galleryImages'>
          <div className='leftside'>
              <img src={oilgas} alt='' id='leftside1'/>
              <img src={tall} alt='' />
              <img src={img2} alt='' />
          </div>
          <div className='middle'>
              <img src={img3} alt='' id='middle1'/>
              <img src={content} alt='' />
              <img src={app} alt='' id='middle3'/>
          </div>
          <div className='leftside'>
              <img src={img5} alt=''  id='leftside4'/>
              <img src={img6} alt=''  id='leftside4'/>
              <img src={img4} alt=''  id='leftside4'/>
              <img src={maso} alt=''  id='leftside4'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Gallery 
