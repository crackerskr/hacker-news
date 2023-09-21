import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import LatestNews from './pages/LatestNews';
import NewsDetailPage from './pages/NewsDetailPage'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LatestNews />} />
        <Route path="/newsdetailpage" element={<NewsDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
