import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreatePage from "./components/CreatePage";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import { LoginContext } from "./helper/Context";
import Footer from "./components/Footer";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
            <div className="App">
                <Navbar />
                <div className="body-container">
                    <Routes>
                        <Route
                            exact
                            path="/Paintrest"
                            element={<LandingPage />}
                        />
                        <Route
                            exact
                            path="/Paintrest/gallery"
                            element={<Gallery />}
                        />
                        <Route
                            exact
                            path="/Paintrest/create"
                            element={<CreatePage />}
                        />
                        <Route
                            exact
                            path="/Paintrest/profile"
                            element={<Profile />}
                        />
                        <Route
                            exact
                            path="/Paintrest/register"
                            element={<Register />}
                        />
                        <Route
                            exact
                            path="/Paintrest/login"
                            element={<Login />}
                        />
                        <Route
                            path="Paintrest/profile/:userName"
                            element={<Profile />}
                        />
                        <Route path="*" element={<LandingPage />} />
                    </Routes>
                </div>
                <ToastContainer position="top-center" autoClose={3000} />
                <Footer />
            </div>
        </LoginContext.Provider>
    );
}

export default App;
