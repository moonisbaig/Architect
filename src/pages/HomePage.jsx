import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sliderContent = [
  { id: 1, imageAlt: "Modern architectural marvel with clean lines", text: "Hello, I’m Arshad Baig" },
  { id: 2, imageAlt: "Detailed blueprint of an innovative structure", text: "The Architect & Planner" },
  { id: 3, imageAlt: "Spacious interior of a contemporary luxury home", text: "25+ Years of Experience" },
  { id: 4, imageAlt: "Striking exterior of a modern commercial complex", text: "Residential & Commercial Design" },
  { id: 5, imageAlt: "Elegant farmhouse design integrated with natural landscape", text: "Interior & Farmhouse Architecture" },
  { id: 6, imageAlt: "Urban redevelopment project showcasing community spaces", text: "Urban Redevelopment & Supervision" },
  { id: 7, imageAlt: "Eco-friendly building with green technologies", text: "Energy-Efficient & Sustainable Projects" },
  { id: 8, imageAlt: "Panoramic view of a city skyline featuring notable architectural works", text: "Designs Across Pakistan & KSA" }
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTextHovered, setIsTextHovered] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentItem = sliderContent[currentIndex];

  const imageVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  const textContainerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    exit: { opacity: 0 },
  };
  
  const textLineVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const textHoverVariants = {
    hover: { 
      filter: "blur(1px) brightness(1.1)",
      y: -5,
      letterSpacing: "0.02em",
      transition: { duration: 0.4, ease: "circOut" } 
    },
    initial: { 
      filter: "blur(0px) brightness(1)",
      y: 0,
      letterSpacing: "normal",
      transition: { duration: 0.4, ease: "circOut" }
    }
  };
  
  useEffect(() => {
    if (imageRef.current) {
      const img = imageRef.current;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      img.crossOrigin = "Anonymous"; // Handle CORS if images are from different origin
      
      const updateLogoColor = () => {
        if (!img.complete || img.naturalWidth === 0) return; // Ensure image is loaded

        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);
        
        // Analyze a small central portion of the image
        const x = Math.floor(img.naturalWidth / 2) - 25;
        const y = Math.floor(img.naturalHeight / 10); // Top-center area where logo is
        const width = 50;
        const height = 50;
        
        try {
          const imageData = ctx.getImageData(x, y, width, height).data;
          let r = 0, g = 0, b = 0;
          for (let i = 0; i < imageData.length; i += 4) {
            r += imageData[i];
            g += imageData[i+1];
            b += imageData[i+2];
          }
          const count = imageData.length / 4;
          const avgBrightness = (r/count + g/count + b/count) / 3;
          
          // Dispatch event to Layout for logo color change
          const event = new CustomEvent('imageBrightnessChange', { detail: { brightness: avgBrightness } });
          window.dispatchEvent(event);

        } catch (e) {
          // Likely a CORS issue if image is not properly configured or from external source
          // Fallback to default logo color or a predefined behavior
          const event = new CustomEvent('imageBrightnessChange', { detail: { brightness: 0 } }); // Assume dark
          window.dispatchEvent(event);
        }
      };

      if (img.complete) {
        updateLogoColor();
      } else {
        img.onload = updateLogoColor;
      }
      // No need to clean up img.onload here as it's tied to the ref's lifecycle
    }
  }, [currentIndex]);


  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden cursor-crosshair">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.id + "-image"}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1.5, ease: "circInOut" }}
          className="absolute inset-0"
        >
          <img  
            ref={imageRef}
            alt={currentItem.imageAlt}
            className="h-full w-full object-cover"
            src={`https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080&q=80&img=${currentItem.id}`} 
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 flex items-center z-10 p-8 sm:p-12 md:p-20 pointer-events-none">
        <motion.div 
          key={currentItem.id + "-text-container"}
          variants={textContainerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full max-w-3xl"
        >
          <motion.h3
            variants={textLineVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white drop-shadow-lg font-poppins leading-tight text-left"
            style={{ lineHeight: '1.2' }} 
            onHoverStart={() => setIsTextHovered(true)}
            onHoverEnd={() => setIsTextHovered(false)}
          >
            <motion.span
              className="inline-block pointer-events-auto cursor-crosshair"
              variants={textHoverVariants}
              animate={isTextHovered ? "hover" : "initial"}
            >
              {currentItem.text}
            </motion.span>
          </motion.h3>
        </motion.div>
      </div>

       <footer className="absolute bottom-0 left-16 right-0 p-4 text-center text-xs text-gray-300/70 z-20">
        <p>&copy; {new Date().getFullYear()} Architect Muhammad Arshad Baig. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;