import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutPage from "~pages/AboutPage/AboutPage.js";
import HomePage from "~pages/HomePage/HomePage.js";
import NotFoundPage from "~pages/NotFoundPage/NotFoundPage.js";
import Page from "~pages/Page/Page.js";
import ProjectsPage from "~pages/ProjectsPage/ProjectsPage.js";
import WebGLWrapper from "~components/WebGLWrapper/WebGLWrapper.js";
import WednesdayPage from "~pages/WednesdayPage/WednesdayPage.js";
import "./App.css";

export default () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Page title="Jenn Adams" />}>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/lander-game" element={
                    <WebGLWrapper
                        title="Lander Game" 
                        htmlSrc="/projects/LanderGame/LanderGame.html"
                    />
                }/>
                <Route path="/projects/flatrick" element={
                    <WebGLWrapper
                        title="The Adventures of Flatrick" 
                        htmlSrc="/projects/Flatrick/Flatrick.html"
                    />
                }/>
                <Route path="*" element={
                    <NotFoundPage />
                }/>
            </Route>
            <Route element={<Page title="Wednesday Adams" />}>
                <Route path="/wednesday" element={<WednesdayPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
