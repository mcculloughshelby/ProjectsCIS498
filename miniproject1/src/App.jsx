import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/pages/Home.jsx";
import Register from "./components/pages/Register.jsx";
//import tailwind from './tailwind.css';


function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <NavBar />
        <div className="pt-20 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;




