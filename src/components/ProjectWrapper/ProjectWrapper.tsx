import * as React from "react";
import "./ProjectWrapper.css"

export type ProjectWrapperProps = {
    title: string,
    htmlSrc: string,
    cssSrc: string
};

const ProjectWrapper = ({htmlSrc, cssSrc, title}: ProjectWrapperProps) => {
    return (
        <div id="project-wrapper">
            <link rel="stylesheet" type="text/css" href={cssSrc} />
            <iframe src={htmlSrc} title={title} />
        </div>
    );
};

export default ProjectWrapper;
