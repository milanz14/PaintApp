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
        <nav className="navbar navbar-expand-md bg-dark-modified">
            <button
                type="button"
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-lable="Toggle Navigation"
            >
                <span className="toggle-element">
                    <i className="fas fa-home"></i>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav nav-modified">
                    <li className="nav-item">
                        <NavLink className="nav-link-modified" to="/Paintrest">
                            <i className="fas fa-home"> paintrest</i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="nav-link-modified"
                            to="/Paintrest/gallery"
                        >
                            <i className="far fa-images"> Gallery</i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="nav-link-modified"
                            to="/Paintrest/create"
                        >
                            <i className="fas fa-palette"> Create</i>
                        </NavLink>
                    </li>
                    {loggedIn && (
                        <>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link-modified"
                                    to="/Paintrest/profile"
                                >
                                    <i className="fas fa-users"> Profile</i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link-modified"
                                    to="/Paintrest/login"
                                    onClick={handleLogOutClick}
                                >
                                    <i className="fas fa-door-open"> Logout</i>
                                </NavLink>
                            </li>
                        </>
                    )}
                    {!loggedIn && (
                        <li className="nav-item">
                            <NavLink
                                className="nav-link-modified"
                                exact
                                to="/Paintrest/login"
                            >
                                <i className="fas fa-sign-in-alt"> Login</i>
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
