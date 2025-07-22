import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Correct default import
import PrivacyPolicyPage from './components/PrivacyPolicyPage/PrivacyPolicyPage'; // Импортируем компонент политики конфиденциальности
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import ContactPage from './components/ContactPage/ContactPage';
import Header from './components/Header'; // Правильный импорт: Header
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer';
import TermsOfUsePage from './components/TermsOfUsePage/TermsOfUsePage';
function App() {
  return (
    <Router>
      <Header /> {/* Исправлено: используем Header вместо Headers */}
      <Routes>
        {/* Маршрут для главной страницы */}
        <Route path="/" element={<HomePage />} />
        {/* Маршрут для страницы политики конфиденциальности */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsOfUsePage />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;