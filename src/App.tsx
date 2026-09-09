import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "~pages/HomePage/HomePage.js";
import Page from "~pages/Page/Page.js";
import "./App.css";

export default () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Page />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
