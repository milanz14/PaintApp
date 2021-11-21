import './App.css';
import { Routes, Route, Redirect } from 'react-router-dom';
import CreatePage from './components/CreatePage';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Profile from './components/Profile';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Login from './components/Login';

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
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route path="/profile/:userName" element={<Profile />} />
                    <Route path="*" element={<LandingPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
