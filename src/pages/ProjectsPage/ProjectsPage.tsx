import * as React from "react";
import ProjectCard from "~components/ProjectCard/ProjectCard.js";
import "./ProjectsPage.css";

const ProjectsPage = () => {
    return (
        <div id="projects">
            <ProjectCard
                imgSrc="./src/assets/images/LanderGameTitle.jpg"
                title="Lander Game"
                description="A simple Lunar Lander clone built in Unity with procedural 2D terrain generation."
                action="Play"
                actionPath="/projects/lander-game"
            />
        </div>
    );
};

export default ProjectsPage;
