import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Top from "./pages/Top";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={< Accueil/>} />
        <Route  path="/top" element={< Top/>} />
        <Route  path="*" element={< Accueil/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
