import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "~pages/HomePage/HomePage.js";
import "./App.css";

export default () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
        </Routes>
    </BrowserRouter>
);
