import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home";
import Profile from "./pages/profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/profile">Профиль</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NotFound />} /> {/* Обработчик 404 */}
        </Routes>
      </Router>
  );
}

export default App;
