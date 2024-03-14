import React, { useState } from 'react';

import Login from "./components/Login"
import Home from "./components/Home"

import "./App.css"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Home />}
    </div>
  );
};

export default App;
