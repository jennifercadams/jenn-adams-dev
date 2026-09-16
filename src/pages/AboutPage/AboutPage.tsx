import * as React from "react";
import { Link } from "react-router";
import "./AboutPage.css";

const AboutPage = () => {
    return (
        <div id="about">
            <div id="text" className="text-content">
                <h1>About Me</h1>
                <p>I'm a software engineer with over four years of professional experience in full stack web development with .NET, Angular, and React. I'm experienced at maintaining complex web applications as well as implementing new features. I'm comfortable working with databases and APIs. I also have experience building and maintaining automated test suites with Selenium and working with PowerShell scripts that automate setting up, running tests, and recording results.</p>
                <p>I have a passion for building things, especially things that bring people joy. I get excited about new technologies and putting them to work to make fun projects, and I think this is the most rewarding way to learn something new. I also take pride in thoughtful architecture and concise, maintainable code.</p>
                <p>In my personal life, I enjoy reading, writing, video games, TTRPGs, baking, and spending time with my dog <Link to="/wednesday">Wednesday</Link>.</p>
            </div>
            <div id="image">
                <img src="/assets/images/code-speech-bubble.svg" />
            </div>
        </div>
    );
};

export default AboutPage;
