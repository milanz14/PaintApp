import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './javascript/CreatePage';
import Navbar from './javascript/Navbar';
import Gallery from './javascript/Gallery';
import Profile from './javascript/Profile';
import LandingPage from './javascript/LandingPage';

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
