import * as React from "react";
import { Link } from "react-router";
import Lightbox from "~components/Lightbox/Lightbox.js";
import "./ProjectCard.css";

export type ImgBgColor = "dark" | "light";

export type ProjectCardProps = {
    imgSrc: string,
    imgBgColor: ImgBgColor,
    title: string,
    description: string,
    action: string,
    actionPath?: string,
    externalUrl?: string,
    monorepoUrl?: string,
    frontEndRepoUrl?: string,
    frontEndRepoLabel?: string,
    backEndRepoUrl?: string,
    backEndRepoLabel?: string
};

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <div className="project-card">
            <div className="image">
                <img src={props.imgSrc} />
                <Lightbox imgSrc={props.imgSrc} imgBgColor={props.imgBgColor} />
            </div>
            <div className="info">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className="buttons">
                    {props.actionPath && <Link className="ui-button" to={props.actionPath}>{props.action}</Link>}
                    {props.externalUrl && 
                        <a className="ui-button" href={props.externalUrl} target="_blank" rel="noopener noreferrer">
                            {props.action}
                        </a>
                    }
                    {props.monorepoUrl && 
                        <a className="ui-button" href={props.monorepoUrl} target="_blank" rel="noopener noreferrer">
                            Code
                        </a>
                    }
                    {props.frontEndRepoUrl && props.backEndRepoUrl && 
                        <>
                            <a className="ui-button" href={props.frontEndRepoUrl} target="_blank" rel="noopener noreferrer">
                                {props.frontEndRepoLabel ? props.frontEndRepoLabel : "Front End Code"}
                            </a>
                            <a className="ui-button" href={props.backEndRepoUrl} target="_blank" rel="noopener noreferrer">
                                {props.backEndRepoLabel ? props.backEndRepoLabel : "Back End Code"}
                            </a>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
