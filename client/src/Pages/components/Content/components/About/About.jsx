import "./About.css";
import { useEffect, useRef , useState} from "react";

import leaf1 from "@images/Content/About/leaf-1.png";
import leaf2 from "@images/Content/About/leaf-3.png";
import leaf3 from "@images/Content/About/leaf-2.png";
import college from "@images/Content/About/college.png";
import school from "@images/Content/About/school.png";
import startup from "@images/Content/About/startup.png";
import work from "@images/Content/About/work.png";
export default function About() {
  const leafContainerRef = useRef(null);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    if (!leafContainerRef.current) {
      console.error("Leaf container is not available");
      return;
    }

    const leafImages = [leaf1, leaf2, leaf3];
    const generateLeaves = () => {
      if (!leafContainerRef.current) return;

      const containerWidth = leafContainerRef.current.offsetWidth;
      const containerHeight = leafContainerRef.current.offsetHeight;
      const leafCount = 100;

      const generatedLeaves = Array.from({ length: leafCount }, () => {
        const x = Math.random() * (containerWidth - 50);
        const y = Math.random() * containerHeight * 2 - containerHeight;
        const rotation = Math.random() * 360;
        const src = leafImages[Math.floor(Math.random() * leafImages.length)];

        return { x, y, rotation, src };
      });

      setLeaves(generatedLeaves);
    };

    generateLeaves();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.4;
      if (leafContainerRef.current) {
        leafContainerRef.current.style.transform = `translateY(${
          scrollY * speed
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="content-about-container">
      <div className="content-about-leaf-container" ref={leafContainerRef}>
        {leaves.map((leaf, index) => (
          <img
            key={index}
            src={leaf.src}
            alt="leaf"
            className="leaf"
            style={{
              left: `${leaf.x}px`,
              top: `${leaf.y}px`,
              transform: `rotate(${leaf.rotation}deg)`,
            }}
          />
        ))}
      </div>
      <div className="content-about-heading">
        <div className="content-about-top-line"></div>
        ABOUT ME
        <div className="content-about-bottom-line"></div>
      </div>

      <div className="contnet-about-education">
        <div className="content-about-element">
          <div className="content-about-element-heading">
            <div
              className="content-about-element-heading-icon"
              style={{ backgroundImage: `url(${college})` }}
            ></div>
            <div className="content-about-element-heading-content">College</div>
          </div>
          <div className="content-about-element-content">
            <ul>
              <li>
                <span>Under Graduate - B.E Computer Science & Engineering</span>
                <br />
                <div></div>
                Currently Persuing my Bachulars Degree on Computer Science and
                Engineering at Sri Eshwar College of Enginnering Coimbatore{" "}
                <span>2023-2027</span>, <span>CGPA : 8.19</span> (current)
              </li>
            </ul>
          </div>
        </div>
        <div className="content-about-element-main-heading">
          <div className="content-about-element-heading-content-left-line"></div>
          EDUCATION
          <div className="content-about-element-heading-content-right-line"></div>
        </div>
        <div className="content-about-element">
          <div className="content-about-element-heading">
            <div
              className="content-about-element-heading-icon"
              style={{ backgroundImage: `url(${school})` }}
            ></div>
            <div className="content-about-element-heading-content">School</div>
          </div>
          <div className="content-about-element-content">
            Completed My Schooling at{" "}
            <span>National Model Matriculation Higher Secondary School,</span>{" "}
            Coimbatore
            <ul style={{ marginTop: "2%" }}>
              <li>
                Secondary School Leaving Certificate (SSLC) - <span>2021</span>
              </li>
              <li>
                Higher Secondary Certificate (HSC) - <span>2023</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content-about-experience">
        <div className="content-about-element">
          <div className="content-about-element-heading">
            <div
              className="content-about-element-heading-icon"
              style={{ backgroundImage: `url(${work})` }}
            ></div>
            <div className="content-about-element-heading-content">Works</div>
          </div>
          <div className="content-about-element-content">
            <ul>
              <li>
                <span>Internship - RampeX Technologies</span>
                <br />
                <div></div>
                Currently undertaking a part-time internship as a Full Stack Web
                and Mobile Developer, contributing{" "}
                <span>since September 2024.</span>
              </li>
              <br />
              <li>
                <span>FreeLancing</span>
                <br />
                <div></div>
                Currently engaged in freelancing, delivering innovative and
                interactive applications tailored to clients{"'"} needs with a
                focus on creativity and exceptional user experiences.
              </li>
            </ul>
          </div>
        </div>
        <div className="content-about-element-main-heading">
          <div className="content-about-element-heading-content-left-line"></div>
          EXPERIENCE
          <div className="content-about-element-heading-content-right-line"></div>
        </div>
        <div className="content-about-element">
          <div className="content-about-element-heading">
            <div
              className="content-about-element-heading-icon"
              style={{ backgroundImage: `url(${startup})` }}
            ></div>
            <div className="content-about-element-heading-content">
              Startups
            </div>
          </div>
          <div className="content-about-element-content">
            <ul>
              <li>
                <span>Founder, Netizens IT Solution</span>
                <br />
                <div></div>
                Founder of Netizens IT Solution, an innovative IT solutions
                company transforming the digital landscape by delivering
                cutting-edge projects and empowering clients with seamless
                digital solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
