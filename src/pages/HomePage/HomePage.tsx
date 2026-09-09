import * as React from "react";
import TechIcon from "~components/TechIcon/TechIcon.js";
import { TechIconList } from "~constants/index.js";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div id="home">
            <div id="intro" className="content">
                <p className="small-text">Hello, my name is</p>
                <h1>Jenn Adams</h1>
                <p>I'm a software engineer specializing in full stack web development.</p>
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
