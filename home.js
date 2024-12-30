
import React, { useState, useEffect } from "react";
import image1 from '../home/peakpx 1.jpg'
import image2 from '../home/peakpx 2.jpg'
import image3 from '../home/peakpx 3.jpg'
import image4 from '../home/peakpx 4.jpg'
import image5 from '../home/peakpx 5.jpg'
import image6 from '../home/peakpx 6.jpg'
import image7 from '../home/peakpx 7.jpg'
import { motion } from 'framer-motion';
import AnimatedText from "../WAVE TEXT/Wavetext";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./home.css"; // Import the CSS file for styling
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7
];

const variants = {
  enter: { x: 700, opacity: 1 },
  center: { x: 0, opacity: 1 },
  exit: { x: -700, opacity: 0 },
};


function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className="slideshow">
        <button className="prev" onClick={goToPrevious}><ArrowBackIosNewIcon /></button>
        <motion.div
          key={currentIndex}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </motion.div>

        <button className="next" onClick={goToNext}><ArrowForwardIosIcon /></button>
        <AnimatedText text="LERN,EXPLORE" />
        <AnimatedText text="VALUE" /><br /><br />
        <h2 className="detail">
          Discover the fascinating world of animals!<br /> At WILDELIFE,
          we celebrate the  <br />diversity, beauty, and wondersof the animal kingdom.<br />

          Whether you're here to learn, explore, or <br />connect with your love for

          creatures big and small, <br />you've come to the right place.<br />

        </h2>

      </div>

      <h1>All you want to know<br/> about animals</h1>
      <div className="pet">
        <div className="petimg"></div>
        <h1 className="pettitle">
          Our beloved pets are also part, <br />of the animal kingdom.<br />
        </h1>
      </div>

    </div>



  );
}



export default Slideshow;




