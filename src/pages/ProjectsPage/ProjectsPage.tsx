import * as React from "react";
import ProjectCard from "~components/ProjectCard/ProjectCard.js";
import "./ProjectsPage.css";

const ProjectsPage = () => {
    return (
        <div id="projects">
            <div id="description">
                <h1>Projects</h1>
                <p>I enjoy building things with code in my spare time. Below are some projects I have worked on, presented in chronological order from newest to oldest.</p>
            </div>
            <ProjectCard
                imgSrc="/assets/images/SuperTicTacToe.jpg"
                title="Super Tic Tac Toe"
                description="A tic tac toe game of tic tac toe games with local pass and play, human vs. bot, and online multiplayer game modes. Built with React, Node.js, and Socket.io."
                action="Play"
                externalUrl="https://super-tic-tac-toe-skai.onrender.com/"
                monorepoUrl="https://github.com/jennifercadams/super-tic-tac-toe"
            />
            <ProjectCard
                imgSrc="/assets/images/MultiWeather.jpg"
                title="MultiWeather"
                description="A simple web app that shows the local weather and time in multiple locations side by side. Built with React, ASP.NET Core, and Docker."
                action="Visit"
                externalUrl="https://multi-weather.onrender.com/"
                frontEndRepoUrl="https://github.com/jennifercadams/Multi-Weather"
                frontEndRepoLabel="React Code"
                backEndRepoUrl="https://github.com/jennifercadams/distance-tools"
                backEndRepoLabel="C# Code"
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
                description="My first independent project: A web app that fetches astronomy photos randomly or by date using NASA's Astronomy Photo of the Day API. Built with React and deployed using GitHub Pages."
                action="Visit"
                externalUrl="https://jennifercadams.github.io/Random-Astronomy-Photo/"
                monorepoUrl="https://github.com/jennifercadams/Random-Astronomy-Photo"
            />
        </div>
    );
};

export default ProjectsPage;
