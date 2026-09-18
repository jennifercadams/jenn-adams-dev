import * as React from "react";
import "./NotFoundPage.css";

const NotFoundPage = () => {
    return (
        <div id="not-found">
            <p className="small-text">PAGE NOT FOUND</p>
            <p className="xl-text">404</p>
            <p className="text-content">Sorry! That page doesn't exist. Please check the url and try again. </p>
        </div>
    );
};

export default NotFoundPage;
