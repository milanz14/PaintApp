import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
    return (
        <nav className="Nav">
            <NavLink className="NavLink" exact to="/">
                <i className="fas fa-home"> paintrest</i>
            </NavLink>
            <NavLink className="NavLink" exact to="/gallery">
                <i className="far fa-images"> Gallery</i>
            </NavLink>
            <NavLink className="NavLink" exact to="/create">
                <i className="fas fa-palette"> Create</i>
            </NavLink>
            <NavLink className="NavLink" exact to="/profile">
                <i className="fas fa-users"> Profile</i>
            </NavLink>
        </nav>
    );
};

export default Navbar;
