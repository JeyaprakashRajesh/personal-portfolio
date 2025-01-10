import "./SocialMedia.css"
import github from "@images/LandingPage/SocialMedia/github.png"
import Linkedin from "@images/LandingPage/SocialMedia/LinkedIn.png"
import Twitter from "@images/LandingPage/SocialMedia/Twitter.png"

export default function SocialMedia() {
    return (
        <div className="landing-page-social-media-container">
            <div className="landing-page-social-media-inner-container">
                <div className="landing-page-social-media-icons"
                    style={{backgroundImage : `url(${github})`}}
                    onClick={() => window.location.href = "https://github.com/JeyaprakashRajesh"}
                ></div>
                <div className="landing-page-social-media-icons"
                    style={{backgroundImage : `url(${Linkedin})`}}
                    onClick={() => window.location.href = "https://www.linkedin.com/in/jeyaprakash-rajesh-6440b5275/"}
                ></div>
                <div className="landing-page-social-media-icons"
                    style={{backgroundImage : `url(${Twitter})`}}
                    onClick={() => window.location.href = "https://github.com/JeyaprakashRajesh"}
                ></div>
            </div>
        </div>
    )
}