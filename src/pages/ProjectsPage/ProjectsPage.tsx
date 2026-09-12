import * as React from "react";
import ProjectCard from "~components/ProjectCard/ProjectCard.js";
import "./ProjectsPage.css";

const ProjectsPage = () => {
    return (
        <div id="projects">
            <ProjectCard
                imgSrc="/assets/images/SuperTicTacToe.jpg"
                title="Super Tic Tac Toe"
                description="A tic tac toe game of tic tac toe games with local pass and play, human vs. bot, and online multiplayer game modes."
                action="Play"
                externalUrl="https://super-tic-tac-toe-skai.onrender.com/"
                codeUrl="https://github.com/jennifercadams/super-tic-tac-toe"
            />
            <ProjectCard
                imgSrc="/assets/images/LanderGameTitle.jpg"
                title="Lander Game"
                description="A simple Lunar Lander clone built in Unity with procedural 2D terrain generation."
                action="Play"
                actionPath="/projects/lander-game"
            />
            <ProjectCard
                imgSrc="/assets/images/FlatrickSplashImage.jpg"
                title="The Adventures of Flatrick"
                description="A line segment named Flatrick goes on an amazing journey into two dimensions. A short demo created in Unity for a game jam."
                action="Play"
                actionPath="/projects/flatrick"
            />
            <ProjectCard
                imgSrc="/assets/images/RandomAstronomyPhoto.jpg"
                title="Random Astronomy Photo"
                description="A web app that fetches astronomy photos randomly or by date using NASA's Astronomy Photo of the Day API."
                action="Visit"
                externalUrl="https://jennifercadams.github.io/Random-Astronomy-Photo/"
                codeUrl="https://github.com/jennifercadams/Random-Astronomy-Photo"
            />
        </div>
    );
};

export default ProjectsPage;
