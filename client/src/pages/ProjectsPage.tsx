import { useState } from "react";
import ogitBackdrop from "../assets/ogit.jpg";
import galnetBackdrop from "../assets/galnet-erd.png";
import { ProjectCard } from "../components";

const projects = [
  {
    title: "OGIT",
    subTitle: "On-the-Go Interactive Tracker",
    description:
      "OGIT is a geolocation-based social media platform that lets users post photos and memories tied to their exact locations. By integrating with Google Maps, OGIT allows users to visualize their travels on an interactive map, creating a dynamic record of their experiences. OGIT makes logging memories a geographical journey.",
    repoUrl: "https://github.com/StevenCThaller/ogit",
    imgUrl: ogitBackdrop,
    skills: [
      "React",
      "Express.js",
      "TypeScript",
      "Google Maps",
      "AWS S3",
      "MongoDB",
      "Node.js",
    ],
  },
  {
    title: "GalNet Plus Socket Client",
    subTitle: "An Elite Dangerous Data Tool",
    description:
      "GalNet Plus is a multi-part project to aid players in their adventures in the space exploration video game Elite Dangerous. The backbone of the work in progress is the socket client that reads a stream of live player data and tracks the updates to the simulated full scale model of the Milky Way galaxy used by the game's engine. This project was a tremendous exercise in efficient database design, as the live model being tracked consists of roughly 10,000 space stations, 400 billion star systems, and 600 billion planets. While the full scale of the galaxy has not (nor will ever) be fully discovered, this application is capable of efficiently storing and retrieving data from a database consisting of hundreds of millions of entries.",
    repoUrl: "https://github.com/StevenCThaller/gnplus",
    imgUrl: galnetBackdrop,
    skills: ["Zeromq", "TypeScript", "MySQL", "TypeORM"],
  },
];

function ProjectsPage() {
  const [focusedProject, setFocusedProject] = useState("");

  const handleSelectProject = (title: string) => setFocusedProject(title);
  const handleClearFocus = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    handleSelectProject("");
  };

  return (
    <main id="projects" className="container" onClick={handleClearFocus}>
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project, i) => (
          <ProjectCard
            key={`project_${i}`}
            title={project.title}
            subTitle={project.subTitle}
            description={project.description}
            repoUrl={project.repoUrl}
            imgUrl={project.imgUrl}
            skills={project.skills}
            isFocus={focusedProject === project.title}
            onClick={handleSelectProject}
          />
        ))}
      </div>
    </main>
  );
}

export default ProjectsPage;
