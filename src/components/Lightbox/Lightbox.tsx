import * as React from "react";
import useLightbox from "./useLightbox.js";
import "./Lightbox.css";

export type LightBoxProps = {
    imgSrc: string,
    imgBgColor: string
};

const Lightbox = ({imgSrc, imgBgColor}: LightBoxProps) => {
    const {
        expandImage,
        handleClickImage
    } = useLightbox();

    const lightBoxClassName = expandImage ? "lightbox expand" : "lightbox";
    const wrapperClassName = expandImage ? "image-wrapper expand" : "image-wrapper";
    const closeClassName = imgBgColor == "dark" ? "close light" : "close dark";

    return (
        <div className={lightBoxClassName} onClick={handleClickImage}>
            <div className={wrapperClassName} onClick={(e) => e.stopPropagation()}>
                <img src={imgSrc} />
                <span className={closeClassName} onClick={handleClickImage}>&times;</span>
            </div>
        </div>
    );
};

export default Lightbox;
