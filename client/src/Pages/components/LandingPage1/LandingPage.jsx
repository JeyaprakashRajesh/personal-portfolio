import ChangingShapes from "./components/ChangingShapes/ChangingShapes";
import ExploreMe from "./components/ExploreMe/ExploreMe";
import ProfilePic from "./components/ProfilePic/ProfilePic";
import Xo from "./components/xo/xo";
import SystemStats from "./components/SystemStats/SystemStats";
import TriangleArray from "./components/TriangleArray/TriangleArray";
import "./LandingPage.css";
import XoGame from "./components/XoGame/XoGame";
import { useState } from "react";
import PortfolioContent from "./components/PortfolioContent/PortfolioContent";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Pencil from "../../../assets/images/LandingPage/pencil.png"
export default function LandingPage() {
  const [isX, setX] = useState(true);
  return (
    <section className="landing-page-container">
      <div className="landing-page-left-container">
        <div className="landing-page-morse">
            <span className="landing-page-pencil">
            <img src={Pencil} alt="pencil" />
            </span>
          <span className="landing-page-morse-text">.. / ... . . / ..-. .---- ..--- / --- -. / -- -.-- / -.-. --- -- .--. ..- - . .-.</span>
        </div>
        <PortfolioContent />
        <ProfilePic />
        <SocialMedia />
      </div>
      <div className="landing-page-right-container">
        <ExploreMe />
        <TriangleArray />
        <ChangingShapes />
        <SystemStats />
        <div className="landing-page-dialogue">
           W3lc0m3, d1g1t4l cr4ft3rz!
        </div>
        <div className="landing-page-portfolio">portfolio</div>
      </div>
    </section>
  );
}
