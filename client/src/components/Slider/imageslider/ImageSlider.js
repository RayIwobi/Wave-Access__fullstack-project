import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./imageslider.css";

const mediaFiles = [
  { type: "image", src: "/media/images/image1.jpg", text: "Innovative Metering Solutions for Accurate Data, Delivering precision metering systems that optimize efficiency and reliability." },
  { type: "image", src: "/media/images/image2.jpg", text: "Telecommunication Systems You Can Trust. Empowering connectivity through cutting-edge telecom infrastructure." },
  { type: "image", src: "/media/images/image3.jpg", text: "Building Tomorrow’s Infrastructure Today. From design to execution, delivering excellence in construction." },
  { type: "image", src: "/media/images/image4.jpg", text: "Advanced Networking for a Connected Future. Seamless, secure, and scalable networking solutions." },
  { type: "image", src: "/media/images/image5.jpg", text: "Civil Infrastructure That Stands the Test of Time. Durable, high-quality engineering for lasting impact." },
  { type: "image", src: "/media/images/image6.jpg", text: "Smart Metering for Smarter Operations. Integrating technology to improve accuracy and reduce costs" },
  { type: "image", src: "/media/images/image7.jpg", text: "Telecom Infrastructure That Bridges Communities. Strengthening communication networks across regions." },
  { type: "image", src: "/media/images/image8.jpg", text: "Engineering Excellence in Every Project. Combining innovation, quality, and safety in all our work." },
  { type: "image", src: "/media/images/image9.jpg", text: "Networking Solutions Tailored to Your Needs. Custom-designed systems to keep your business connected." },
  { type: "image", src: "/media/images/image10.jpg", text: "Wave Access Engineers – Powering Progress. Your trusted partner in engineering and infrastructure solutions." }
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
    <div className="sliderContainer1" style={{ position: "relative" }}>
      {/* Image Slider */}
      <div
        className="sliderTrack"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 1s ease-in-out",
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

      {/* Sliding Text Overlay */}
      <div
        className="textmode"
        
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {mediaFiles[currentIndex].text}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}