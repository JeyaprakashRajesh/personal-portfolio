import "./Skills.css";

const content = [
    {
        imgSrc: "@images/Content/Skills/web-development.png",
        heading: "Web Development",
        description: "Skilled in web development, creating dynamic and responsive applications using the MERN stack. Proficient in building scalable solutions from front-end interfaces to back-end systems.",
        tools: ["react", "mongodb", "nodejs", "nextjs", "html", "css", "js", "firebase"]
    },
    {
        imgSrc: "@images/Content/Skills/mobile-development.png",
        heading: "Mobile Development",
        description: "Using React Native for creating responsive functional mobile applications for both ios and android utilizing same functionality as react",
        tools: ["react-native", "android-studio"]
    },
    {
        imgSrc: "@images/Content/Skills/version-control.png",
        heading: "Version Control",
        description: "Proficient in version control systems, utilizing Git for efficient code management of working directory and GitHub for collaboration and project hosting.",
        tools: ["git", "github"]
    },
    {
        imgSrc: "@images/Content/Skills/ui-ux.png",
        heading: "UI / UX",
        description: "Experienced in UI/UX design, crafting user-friendly interfaces with Figma for wireframing and prototyping. Skilled in creating intuitive designs that enhance user experiences.",
        tools: ["figma"]
    },
    {
        imgSrc: "@images/Content/Skills/devOps.png",
        heading: "DevOps",
        description: "Skilled in DevOps practices, automating workflows and streamlining development processes. Proficient in continuous integration, deployment, and maintaining infrastructure for smooth application delivery.",
        tools: ["vercel", "netlify", "nginx"]
    },
    {
        imgSrc: "@images/Content/Skills/testing.png",
        heading: "Testing",
        description: "Experienced in software testing, ensuring quality through manual and automated testing. Proficient in identifying bugs and improving application performance and reliability.",
        tools: ["mocha", "react-testing-library"]
    }
];

function renderContent() {
    return content.map((tile, index) => (
        <div key={index} className="skill-tile">
            {tile.heading}
        </div>
    ));
}

export default function Skills() {
    return (
        <div className="skills-container">
            {renderContent()}
        </div>
    );
}
