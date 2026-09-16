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
            <div id="description" className="text-content">
                <h1>Wednesday</h1>
                <p>Wednesday is a six-year-old American Staffordshire Terrier mix. She is my best friend and a very experienced rubber duck.</p>
                <p>She spent many hours at my side providing quiet moral support while I taught myself how to code. She remains a constant companion as I practice my skills and in many other aspects of my life.</p>
                <p>She enjoys going on adventures, playing, warm blankets, snuggles, and her favorite purple bouncy ball. She dislikes fireworks, baths, and when no one is petting her.</p>
            </div>
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
