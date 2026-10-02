// src/components/Sidebar.jsx
import React from 'react';
import '../styles/Sidebar.css';

export function Sidebar({ language, setLanguage, navigate }) {
  const sidebarTexts = {
    es: {
      home: 'Inicio',
      functional: 'Paradigma Funcional',
      logical: 'Paradigma Lógico'
    },
    en: {
      home: 'Home',
      functional: 'Functional Paradigm',
      logical: 'Logical Paradigm'
    }
  };

  const t = sidebarTexts[language];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <aside className="sidebar">
      <h2>PROLOG</h2>
      
      <div className="lang-switch-container">
        <span className={`lang-label ${language === 'es' ? 'active' : ''}`}>ES</span>
        <div className="lang-switch" onClick={toggleLanguage}>
          <div className={`lang-knob ${language === 'en' ? 'knob-en' : ''}`}></div>
        </div>
        <span className={`lang-label ${language === 'en' ? 'active' : ''}`}>EN</span>
      </div>

      <nav className="sidebar-menu">
        <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>
          {t.home}
        </a>
        <a href="#funcional" onClick={(e) => { e.preventDefault(); navigate('funcional'); }}>
          {t.functional}
        </a>
        <a href="#logico" onClick={(e) => { e.preventDefault(); navigate('logico'); }}>
          {t.logical}
        </a>
      </nav>
    </aside>
  );
}