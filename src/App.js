import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup.js"; // Component names should start with capital letters
import Login from "./components/login.js"; // Component names should start with capital letters
import Home from "./pages/home.js"; // Component names should start with capital letters

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* You can add more routes here */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
