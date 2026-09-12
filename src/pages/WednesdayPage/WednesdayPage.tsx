import * as React from "react";
import useWednesdayPage from "./useWednesdayPage.js";
import "./WednesdayPage.css";

const WednesdayPage = () => {
    const {
        index,
        currentImagePath,
        gallerySize,
        handleClickPrev,
        handleClickNext
    } = useWednesdayPage();

    return (
        <div id="wednesday">
            <div id="gallery">
                <div id="image">
                    <img id="current" src={currentImagePath} />
                </div>
                <div className="buttons">
                    <button id="prev" onClick={handleClickPrev} disabled={index == 0}>{"<"}</button>
                    <button id="next" onClick={handleClickNext} disabled={index == gallerySize - 1}>{">"}</button>
                </div>
            </div>
        </div>
    );
};

export default WednesdayPage;
