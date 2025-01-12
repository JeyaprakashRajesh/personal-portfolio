import React, { useState, useEffect } from "react";
import "./ExploreMe.css";

export default function ExploreMe() {
  const text = "Explore Me !";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const typingSpeed = isPaused ? 1000 : isDeleting ? 100 : 150; 
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false); 
        return;
      }

      if (!isDeleting && charIndex < text.length) {
        setDisplayText(text.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(text.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (charIndex === text.length && !isPaused) {
        setIsPaused(true);
        setIsDeleting(true);
      } else if (charIndex === 0 && isDeleting && !isPaused) {
        if(isDeleting !== true) {
            setIsPaused(true)
        }
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout); 
  }, [charIndex, isDeleting, isPaused]);

  return (
    <div className="explore-me-container">
      <div className="explore-me-inner-container">
        <div className="explore-me-button-img"></div>
        <div className="explore-me-text-container">
          <span className="explore-me-default-text">{">_"}{" "}</span>
          <span className="explore-me-variable-text">{displayText}</span>
        </div>
      </div>
    </div>
  );
}
