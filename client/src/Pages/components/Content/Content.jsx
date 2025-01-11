import Skills from "./components/Skills/Skills"
import "./Content.css"

export default function Content() {
    return(
        <div className="content-container">
            <div className="content-container-heading">
               <span>{">_"}</span> SKILLS.map()
            </div>
            <Skills />
        </div>
    )
}