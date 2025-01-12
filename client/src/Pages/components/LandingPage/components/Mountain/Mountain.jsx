import { useRef, useEffect } from 'react';
import './Mountain.css';

export default function Mountain() {
  const mountainRef = useRef(null);
  function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
  }
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const MAX_SCROLL_Y = vh(12); 
      const translateY = Math.min(scrollY * 0.25, MAX_SCROLL_Y);
      mountainRef.current.style.transform = `translateY(-${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="mountain-container" ref={mountainRef} style={{ height: '100vh' }}>
      <div className="mountain-img"></div>
    </div>
  );
}