import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import TravelerStoriesPage from './routes/TravelerStoriesPage'; // Ensure correct import

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/traveler-stories" element={<TravelerStoriesPage />} /> {/* Ensure path matches */}
      </Routes>
    </>
  );
}

export default App;
