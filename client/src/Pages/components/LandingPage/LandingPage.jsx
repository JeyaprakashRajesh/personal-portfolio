
import Clouds from "./components/Clouds/Clouds"
import Content from "./components/Content/Content"
import Mountain from "./components/Mountain/Mountain"
import BottomLand from "./components/props/BottomLand"
import Leaf from "./components/props/Leaf"
import Tree from "./components/props/Tree"
import "./LandingPage.css"

export default function LandingPage() {
    return(
        <div className="landing-page-container">
            <Content /> 
            <Clouds />
            <Mountain />
            <BottomLand />
            <Tree />
            <Leaf />
        </div>
    )   
}