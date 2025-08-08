// components/TestimonialsSlider.jsx
import React from 'react';
import './testimonial.css';
import image1 from './assets/1.jpg'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpg'
import image4 from './assets/4.jpg'

const testimonials = [
  {
    name: "Tamuno Johnson",
    image: image1,
    content: "We've relied on their instrumentation for three projects now. Durable, reliable, and the calibration services are top-notch.",  },
  {
    name: "Tunde Samuel",
    image: image2,
    content: "The team provided outstanding technical advice and fast delivery. Their pressure transmitters work flawlessly in harsh settings.",  },
  {
    name: "Clara Davis",
    image: image3,
    content: "Their metering solutions helped us streamline our energy monitoring. Setup was quick and readings are consistently accurate.",  },
  {
    name: "Chioma Ekene",
    image: image4,
    content: "The precision of their flow meters exceeded our expectations. Installation was smooth, and support was excellent throughout.",  },
  // Add more as needed
];

const TestimonialsSlider = () => {
  return (
    <div className="slider-container">
        <h2>Testimonials</h2><br/>
      <div className="slider-track">
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
