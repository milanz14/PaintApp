import "./App.css";
import { Routes, Route, Redirect } from "react-router-dom";
import CreatePage from "./components/CreatePage";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="body-container">
                <Routes>
                    <Route exact path="/Paintrest" element={<LandingPage />} />
                    <Route exact path="/gallery" element={<Gallery />} />
                    <Route exact path="/create" element={<CreatePage />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route path="/profile/:userName" element={<Profile />} />
                    <Route path="*" element={<LandingPage />} />
                </Routes>
            </div>
            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
}

export default App;
