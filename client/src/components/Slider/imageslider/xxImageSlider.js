import React, { useEffect, useState, useRef } from "react";
import "./imageslider.css";

const mediaFiles = [
  { type: "image", src: "/media/images/image1.jpg" , text: "Innovative Metering Solutions for Accurate Data, Delivering precision metering systems that optimize efficiency and reliability."},
  { type: "image", src: "/media/images/image2.jpg" , text: "something"},
  { type: "image", src: "/media/images/image3.jpg" , text: "new ones"},
  { type: "image", src: "/media/images/image4.jpg" , text: "Fresh Organic Foods"},
  { type: "image", src: "/media/images/image5.jpg" , text: "Fresh Organic Foods"},
  { type: "image", src: "/media/images/image6.jpg" , text: "Fresh Organic Foods"},
  { type: "image", src: "/media/images/image7.jpg" , text: "Fresh Organic Foods"},
  { type: "image", src: "/media/images/image8.jpg" , text: "Fresh Organic Foods"},
  { type: "image", src: "/media/images/image9.jpg" , text: "Fresh Organic Foods"},
  { type: "image", src: "/media/images/image10.jpg" , text: "Fresh Organic Foods"}
 
];


const AUTO_PLAY_INTERVAL = 6000;

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaFiles.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sliderContainer1">
      <div
        className="sliderTrack"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 1s ease-in-out"
        }}
        ref={slideRef}
      >
        {mediaFiles.map((media, index) => (
          <div className="slide" key={index}>
            {media.type === "image" ? (
              <img
                src={media.src}
                alt={`Slide ${index + 1}`}
                className="slidecontent1"
              />
              
            ) : (
              <video
                src={media.src}
                autoPlay
                loop
                muted
                playsInline
                className="slidecontent1"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
