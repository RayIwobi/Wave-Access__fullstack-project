import './clients.css';
import image1 from './assets/ceragon.png'
import image2 from './assets/Chevron.png'
import image3 from './assets/emea.jpeg'
import image4 from './assets/eni.png'
import image5 from './assets/exxon.png'
import image6 from './assets/fidelity.png'
import image7 from './assets/mac.png'
import image8 from './assets/mtn.jpg'
import image9 from './assets/ncc.png'
import image10 from './assets/ntel.webp'
import image11 from './assets/pan.png'
import image12 from './assets/shell.png'
import image13 from './assets/signalhorn.png'
import image14 from './assets/skyvision.jpg'
import image15 from './assets/terra.png'
import image16 from './assets/TTE.png'

const testimonials = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
  {
    image: image6,
  },
  {
    image: image7,
  },
  {
    image: image8,
  },
  {
    image: image9,
  },
  {
    image: image10,
  },
  {
    image: image11,
  },
  {
    image: image12,
  },
  {
    image: image13,
  },
  {
    image: image14,
  },
  {
    image: image15,
  },
  {
    image: image16,
  },
  // Add more as needed
];

const TestimonialsSlider = () => {
  return (
    <div className='clients-container'>
    <div className="slider-container">
        <h2 className='client-title'>Our Clients</h2><br/>
      <div className="slider-track">
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div className="clients" key={index}>
            <img src={testimonial.image} alt='imageclients'/>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TestimonialsSlider;
