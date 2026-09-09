import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutPage from "~pages/AboutPage/AboutPage.js";
import ContactPage from "~pages/ContactPage/ContactPage.js";
import HomePage from "~pages/HomePage/HomePage.js";
import Page from "~pages/Page/Page.js";
import ProjectsPage from "~pages/ProjectsPage/ProjectsPage.js";
import "./App.css";

export default () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Page />}>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
