import * as React from "react";
import { NavLink, Outlet } from "react-router";
import "./Page.css";

const Page = () => {
    return (
        <div id="page">
            <div id="header">
                <div id="title">Jenn Adams</div>
                <nav id="nav">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </nav>
            </div>
            <Outlet />
        </div>
    );
}

export default Page;
