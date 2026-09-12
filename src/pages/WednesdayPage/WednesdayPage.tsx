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
                    <button id="prev" className="ui-button" onClick={handleClickPrev} disabled={index == 0}>
                        {"<"}
                    </button>
                    <button id="next" className="ui-button" onClick={handleClickNext} disabled={index == gallerySize - 1}>
                        {">"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WednesdayPage;
