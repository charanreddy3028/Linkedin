import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import Network from './Components/Pages/Network/Network';
import Jobs from './Components/Pages/Jobs/Jobs';
import Messages from './Components/Pages/Messages/Messages';
import Profile from './Components/Pages/Profile/Profile';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/network" element={<Network />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
