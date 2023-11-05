import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Components/Pages/Home/Home';
import Network from './Components/Pages/Network/Network';
import Jobs from './Components/Pages/Jobs/Jobs';
import Messages from './Components/Pages/Messages/Messages';
import Profile from './Components/Pages/Profile/Profile';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Notifications from './Components/Pages/Notifications/Notification';




function App() {

  return (
    <div className="App">
     
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/network" element={<Network />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messages" element={<Messages />} />
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
