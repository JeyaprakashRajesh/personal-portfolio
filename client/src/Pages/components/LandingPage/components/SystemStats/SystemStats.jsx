import { useState, useEffect } from "react";
import "./SystemStats.css";
import cursor from "@images/LandingPage/SystemStats/cursor.png";
import batteryImg from "@images/LandingPage/SystemStats/battery.png";
import locationImg from "@images/LandingPage/SystemStats/location.png";
import day from "@images/LandingPage/SystemStats/day.png";
import night from "@images/LandingPage/SystemStats/night.png";

export default function SystemStats() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [battery, setBattery] = useState(null);
  const [location, setLocation] = useState("Loading...");
  const [isDayTime, setIsDayTime] = useState(true);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);
    
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    if (navigator.getBattery) {
      const fetchBatteryStatus = async () => {
        try {
          const batteryInfo = await navigator.getBattery();
          setBattery(batteryInfo);
        } catch (error) {
          console.error("Battery info could not be retrieved", error);
          setBattery(null); 
        }
      };
      fetchBatteryStatus();
    } else {
      setBattery(null);
    }
  }, []);

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {  
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`);
        }, (error) => {
          setLocation("Location access denied");
        });
      } else {
        setLocation("Geolocation not supported");
      }
    };

    fetchLocation();
  }, []);
  useEffect(() => {
    const hour = new Date().getHours()
    if(hour > 6 && hour < 18) {
        setIsDayTime(true)
    }else {
        setIsDayTime(false)
    }
  })
  

  return (
    <div className="system-stats-container">
      <div className="system-stats-inner-container">
        <div className="system-stats-element">
          <div className="system-stats-element-img" style={{
            backgroundImage: `url(${cursor})`,
            height: "50%"
          }} ></div>
          <div className="system-stats-element-content">
            {cursorPos.x} x {cursorPos.y}
          </div>
        </div>

        <div className="system-stats-element">
          <div className="system-stats-element-img" style={{
            backgroundImage: `url(${batteryImg})`,
          }}></div>
          <div className="system-stats-element-content">
            {battery === null 
              ? "Plug in"
              : Math.round(battery.level * 100) + "%" +(battery.charging ? "🗲" : "")} 
          </div>
        </div>

        <div className="system-stats-element">
          <div className="system-stats-element-img" style={{
            backgroundImage: `url(${locationImg})`,
          }}></div>
          <div className="system-stats-element-content">
            {location}
          </div>
        </div>

        <div className="system-stats-element">
          <div className="system-stats-element-img" style={{
            backgroundImage: `url(${isDayTime ? day : night})`,
          }}></div>
          <div className="system-stats-element-content">
            {isDayTime ? "Day" : "Night"}
          </div>
        </div>
      </div>
    </div>
  );
}
