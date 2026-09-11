import * as React from "react";
import TechIcon from "~components/TechIcon/TechIcon.js";
import { TechIconList } from "~constants/index.js";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div id="home">
            <div id="intro" className="content">
                <p className="small-text">Hello, my name is</p>
                <p className="large-text">Jenn Adams</p>
                <p className="medium-text">I'm a software engineer specializing in full stack web development.</p>
                <div id="connect">
                    <p className="medium-text">
                        <span id="arrow">{">"}</span>
                        Let's connect.
                    </p>
                    <div id="icon-container">
                        <a href="https://www.linkedin.com/in/jenn-adams-dev/" target="_blank" rel="noopener noreferrer">
                            <img className="icon" src="./src/assets/icons/linkedin.png" />
                        </a>
                        <a href="https://github.com/jennifercadams/" target="_blank" rel="noopener noreferrer">
                            <img className="icon" src="./src/assets/icons/github.png" />
                        </a>
                        <a href="mailto:contact@jennadams.dev">
                            <img className="icon" src="./src/assets/icons/email.png" />
                        </a>
                    </div>
                </div>
            </div>
            <div id="skills" className="content">
                {TechIconList.map((props, index) => {
                    const key = `tech-icon-${index}`;
                    return <TechIcon key={key} {...props} />
                })}
            </div>
        </div>
    );
};

export default HomePage;
