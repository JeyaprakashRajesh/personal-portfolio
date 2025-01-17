import { useEffect, useRef, useState } from "react";
import "./Skills.css";

import rock1 from "@images/Content/Skills/rock-1.png";
import rock2 from "@images/Content/Skills/rock-2.png";
import rock3 from "@images/Content/Skills/rock-3.png";
import htmlImg from "@images/Content/Skills/html.png";
import cssImg from "@images/Content/Skills/css.png";
import jsImg from "@images/Content/Skills/js.png";
import reactImg from "@images/Content/Skills/react.png";
import nodeImg from "@images/Content/Skills/node.png";
import mongodbImg from "@images/Content/Skills/mongodb.png";
import firebaseImg from "@images/Content/Skills/firebase.png";
import gitImg from "@images/Content/Skills/git.png";
import githubImg from "@images/Content/Skills/github.png";
import figmaImg from "@images/Content/Skills/figma.png";

export default function Skills() {
  const leafContainerRef = useRef(null);
  const [leaves, setLeaves] = useState([]);
  const bottomElements = [
    "html",
    "css",
    "js",
    "react",
    "node",
    "mongodb",
    "firebase",
    "git",
    "github",
    "figma",
  ];
  const bottomElementImages = {
    html: htmlImg,
    css: cssImg,
    js: jsImg,
    react: reactImg,
    node: nodeImg,
    mongodb: mongodbImg,
    firebase: firebaseImg,
    git: gitImg,
    github: githubImg,
    figma: figmaImg,
  };
  useEffect(() => {
    if (!leafContainerRef.current) {
      console.error("Leaf container is not available");
      return;
    }

    const leafImages = [rock1, rock2, rock3];
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
    <div className="skills-container">
      <div className="skills-rocks-container" ref={leafContainerRef}>
        {leaves.map((leaf, index) => (
          <img
            key={index}
            src={leaf.src}
            alt="leaf"
            className="rocks"
            style={{
              left: `${leaf.x}px`,
              top: `${leaf.y}px`,
              transform: `rotate(${leaf.rotation}deg)`,
            }}
          />
        ))}
      </div>
      <div className="skills-heading">Skills</div>
      <div className="skills-content-conntainer">
        <div className="skills-content-top-container">
          <div className="skills-content-top-element">
            <div className="skills-content-top-element-heading-container">
              Web Development
            </div>
            <div className="skills-content-top-element-description">
              I'm a <span>web developer</span> with expertise in{" "}
              <span>HTML, CSS, JavaScript, and the MERN stack</span>. I build
              responsive, user-friendly websites and full-stack applications,
              focusing on both functionality as well as design
            </div>
          </div>
          <div className="skills-content-top-element">
            <div className="skills-content-top-element-heading-container">
              Mobile Development
            </div>
            <div className="skills-content-top-element-description">
              I'm a <span>mobile developer</span> with expertise in{" "}
              <span>React Native</span> , creating cross-platform apps that
              deliver seamless performance and intuitive user experiences. I
              focus on building efficient, scalable, and visually appealing
              mobile solutions tailored to user needs
            </div>
          </div>
          <div className="skills-content-top-element">
            <div className="skills-content-top-element-heading-container">
              UI / UX Designer
            </div>
            <div className="skills-content-top-element-description">
              I'm a <span>UI/UX designer</span> with a strong focus on creating
              user-friendly and visually engaging interfaces. Proficient in{" "}
              <span>Figma</span>, I excel at designing intuitive digital
              experiences that align with user needs and business goals. My
              approach ensures a balance between aesthetics and functionality,
              delivering seamless and impactful designs.
            </div>
          </div>
        </div>
        <div className="skills-content-bottom-container">
          <div className="skills-content-bottom-heading">
            Tools and Software
          </div>
          <div className="skills-content-bottom-element-container">
            {bottomElements.map((element, index) => (
              <div
                className="skills-content-bottom-element"
                key={index}
                style={{
                  backgroundImage: `url(${bottomElementImages[element]})`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
22;
