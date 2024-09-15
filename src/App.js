import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Chat from './components/Chat'; // Chat component
import Translator from './components/Translator'; // Translator component
import FAQs from './components/FAQs'; // FAQs component

import "./global.css";
import About from "./components/About";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
