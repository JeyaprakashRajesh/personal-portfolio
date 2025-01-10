import "./PortfolioContent.css"
import web from "@images/LandingPage/PortfolioContent/web.png"
import mobile from "@images/LandingPage/PortfolioContent/mobile.png"

export default function PortfolioContent() {
    return (
        <section className="landing-page-content-container">
            <div className="landing-page-content-name-container">
                Jeyaprakash R
            </div>
            <div className="landing-page-content-domain-container">
                <div className="landing-page-content-domain-image-container"
                    style={{backgroundImage : `url(${web})`}}
                ></div>
                <div className="landing-page-content-domain-image-container"
                    style={{backgroundImage : `url(${mobile})`}}
                ></div>
                <div className="landing-page-content-domain-text">Software Developer</div>
            </div>
            <div className="landing-page-content-description">
            I am a skilled Software Developer with expertise in web and mobile development, UI/UX design, and version control using Git and GitHub.
            </div>
            <div className="landing-page-content-dialogue">
                <span>Eat</span>
                <div className="landing-page-content-dialogure-circle"></div>
                <span>Sleep</span>
                <div className="landing-page-content-dialogure-circle"></div>
                <span>Code</span>
                <div className="landing-page-content-dialogure-circle"></div>
                <span>Repeat</span>
            </div>
        </section>
    )
}