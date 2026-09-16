import * as React from "react";
import "./WebGLWrapper.css";

export type WebGLWrapperProps = {
    title: string,
    htmlSrc: string
};

const WebGLWrapper = ({title, htmlSrc}: WebGLWrapperProps) => {
    return (
        <div id="web-gl-wrapper">
            <iframe src={htmlSrc} title={title} />
            <div id="device-not-supported" className="text-content">{title} is not supported on your device. This may be because you are using a mobile device or your screen resolution is less than 960 x 582.</div>
        </div>
    );
};

export default WebGLWrapper;
