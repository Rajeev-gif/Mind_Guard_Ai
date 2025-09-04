import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
