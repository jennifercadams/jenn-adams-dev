import * as React from "react";
import "./TechIcon.css";

export type TechIconProps = {
    fileName: string,
    label: string
};

const TechIcon = (props: TechIconProps) => {
    return (
        <div className="tech-icon">
            <img className="tech-icon-img" src={`./src/assets/icons/${props.fileName}`}></img>
            <label className="tech-icon-label">{props.label}</label>
        </div>
    );
};

export default TechIcon;
