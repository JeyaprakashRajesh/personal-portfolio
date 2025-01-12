
import About from "./components/About/About"
import "./Content.css"

export default function Content() {
    return(
        <div className="content-container">
            <div className="content-container-heading">
                ABOUT ME
            </div>
            <About />
            <div className="content-container-heading">
                SKILLS
            </div>
            
        </div>
    )
}