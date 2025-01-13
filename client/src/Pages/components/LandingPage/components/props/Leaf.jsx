import React, { useEffect, useState } from "react";
import "./Props.css";

export default function Leaf() {
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
            className="props-leaf-container"
            style={{
                transform: `translateX(-${scrollOffset * 0.5}px)`, 
            }}
        ></div>
    );
}
