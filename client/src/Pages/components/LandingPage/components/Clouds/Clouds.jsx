import React, { useEffect, useRef } from 'react';
import './Clouds.css';

export default function Clouds() {
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      cloud1Ref.current.style.transform = `translateY(${scrollY * 0.2}px)`; // Adjust speed as needed
      cloud2Ref.current.style.transform = `translateY(${scrollY * 0.2}px)`; // Adjust speed and direction as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="clouds-container">
      <div className="clouds-1" ref={cloud1Ref}>
        <div className="clouds-1-image"></div>
      </div>
      <div className="clouds-2" ref={cloud2Ref}>
        <div className="cloud-2-image"></div>
      </div>
    </div>
  );
}