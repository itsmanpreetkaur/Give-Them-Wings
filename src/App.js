import "./main.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className = "bg-slate-950 w-screen h-screen">
      <NavBar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn = {setIsLoggedIn} />}  />
        <Route path="/login" element={<LogIn  setIsLoggedIn = {setIsLoggedIn} />}  />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

