import React, { useEffect, useState } from "react";
import "./props.css";

export default function Tree() {
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className="props-tree-container"
            style={{
                transform: `translateX(${scrollOffset * 0.5}px)` // Adjust the multiplier for speed control
            }}
        ></div>
    );
}
