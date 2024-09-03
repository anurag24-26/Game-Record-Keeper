// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import GameTracker from './components/GameTracking/GameTracker.jsx';
import ParentalControl from './components/ParentalControl/ParentalControl.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  // Placeholder username, in a real app this should come from user authentication state
  const username = 'qwerty1234';

  return (
    <Router>
       <div className="min-h-screen flex flex-col bg-slate-800 text-white">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/game-tracker" element={<GameTracker />} />
            <Route path="/parental-control" element={<ParentalControl />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
