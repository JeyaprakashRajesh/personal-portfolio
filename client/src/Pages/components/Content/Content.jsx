
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import "./Content.css"

export default function Content() {
    return(
        <div className="content-container">
            <About />
            <Skills />
        </div>
    )
}   