import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="Nav">
            <NavLink
                className="NavLink"
                exact
                to="/"
                activeClassName="Nav-active"
            >
                <i class="fas fa-home"> Home</i>
            </NavLink>
            <NavLink
                className="NavLink"
                exact
                to="/gallery"
                activeClassName="Nav-active"
            >
                <i class="far fa-images"> Gallery</i>
            </NavLink>
            <NavLink
                className="NavLink"
                exact
                to="/post"
                activeClassName="Nav-active"
            >
                <i class="fas fa-palette"> Create</i>
            </NavLink>
            <NavLink
                className="NavLink"
                exact
                to="/profile"
                activeClassName="Nav-active"
            >
                <i class="fas fa-users"> Profile</i>
            </NavLink>
        </nav>
    );
};

export default Navbar;
