import "./About.css";
import edu from "@images/Content/About/education.png";
import exp from "@images/Content/About/quality.png";

export default function About() {
  return (
    <div className="content-about-container">
      <div className="content-about-heading">
        ABOUT ME
      </div>
      <div className="content-about-element">
        <div className="content-about-element-heading">
          <div
            className="content-about-element-heading-image"
            style={{
              backgroundImage: `url(${edu})`,
            }}
          ></div>
          <div className="content-about-element-heading-content">Education</div>
        </div>
        <div className="content-about-element-content">
          <div>
            <span>B.E Computer Science : </span> Currently Pursuing B.E degree at
            Sri Eshwar College of Engineering 2023-2027
          </div>
          <div>
            <span>Higher Secondary Certificate (HSC) : </span> National Model Matriculation Higher Secondary School 2023
          </div>
          <div>
            <span>Secondary School Leaving Certificate (SSLC) : </span> National Model Matriculation Higher Secondary School 2021
          </div>
        </div>
      </div>
      <div className="content-about-element">
        <div className="content-about-element-heading">
          <div
            className="content-about-element-heading-image"
            style={{
              backgroundImage: `url(${exp})`,
            }}
          ></div>
          <div className="content-about-element-heading-content">
            Experiance
          </div>
        </div>
        <div className="content-about-element-content">
            <div>
                <span>Founder, Netizens IT Solution : </span> A Startup for bringing Innovaive It solutions for clients
            </div>
            <div>
                <span>Intern at RampeX Technologies : </span> I am a Full Stack Developer Intern at RampeX Technologies (on going)
            </div>
        </div>
      </div>
    </div>
  );
}
