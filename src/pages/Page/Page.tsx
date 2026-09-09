import * as React from "react";
import { Link, NavLink, Outlet } from "react-router";
import "./Page.css";

const Page = () => {
    return (
        <div id="page">
            <div id="header">
                <Link id="title" to="/">Jenn Adams</Link>
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
