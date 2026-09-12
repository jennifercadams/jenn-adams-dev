import * as React from "react";
import "./ProjectCard.css";
import { Link } from "react-router";

export type ProjectCardProps = {
    imgSrc: string,
    title: string,
    description: string,
    action: string,
    actionPath: string,
    codePath?: string
};

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <div className="project-card">
            <div className="image content">
                <img src={props.imgSrc}/>
            </div>
            <div className="info content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className="buttons">
                    <Link className="ui-button" to={props.actionPath}>{props.action}</Link>
                    {props.codePath && 
                        <a className="ui-button" href={props.codePath} target="_blank" rel="noopener noreferrer">
                            Code
                        </a>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
