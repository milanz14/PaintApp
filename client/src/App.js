import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreatePage from "./CreatePage";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Gallery from "./Gallery";
import Profile from "./Profile";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/gallery" element={<Gallery />} />
                <Route exact path="/create" element={<CreatePage />} />
                <Route exact path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
