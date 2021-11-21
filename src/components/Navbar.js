import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { toast } from "react-toastify";
import { LoginContext } from "../helper/Context";

const Navbar = () => {
    const { loggedIn, setLoggedIn } = useContext(LoginContext);

    useEffect(() => {
        const existing = sessionStorage.getItem("_token");
        if (existing) {
            setLoggedIn(true);
        }
    }, [loggedIn]);

    const handleLogOutClick = () => {
        sessionStorage.removeItem("_token");
        sessionStorage.removeItem("username");
        setLoggedIn(false);
        toast.success("Logged out successfully. See you soon.");
    };

    return (
        <nav className="Nav">
            <NavLink className="NavLink" exact to="/Paintrest">
                <i className="fas fa-home"> paintrest</i>
            </NavLink>
            <NavLink className="NavLink" exact to="/gallery">
                <i className="far fa-images"> Gallery</i>
            </NavLink>
            <NavLink className="NavLink" exact to="/create">
                <i className="fas fa-palette"> Create</i>
            </NavLink>
            {loggedIn && (
                <>
                    <NavLink className="NavLink" exact to="/profile">
                        <i className="fas fa-users"> Profile</i>
                    </NavLink>
                    <NavLink
                        className="NavLink"
                        exact
                        to="login"
                        onClick={handleLogOutClick}
                    >
                        <i className="fas fa-door-open"> Logout</i>
                    </NavLink>
                </>
            )}
            {!loggedIn && (
                <NavLink className="NavLink" exact to="/login">
                    <i className="fas fa-sign-in-alt"> Login</i>
                </NavLink>
            )}
        </nav>
    );
};

export default Navbar;
