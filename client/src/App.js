import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreatePage from "./components/CreatePage";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="body-container">
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/gallery" element={<Gallery />} />
                    <Route exact path="/create" element={<CreatePage />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
