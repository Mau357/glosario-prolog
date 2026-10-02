// src/App.jsx
import React, { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { FunctionalPage } from './pages/FunctionalPage';
import { LogicalPage } from './pages/LogicalPage';

function App() {
  
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('es');

  
  const renderPage = () => {
    switch (currentPage) {
      case 'funcional':
        return <FunctionalPage language={language} setLanguage={setLanguage} navigate={setCurrentPage} />;
      case 'logico':
        return <LogicalPage language={language} setLanguage={setLanguage} navigate={setCurrentPage} />;
      case 'home':
      default:
        return <HomePage language={language} setLanguage={setLanguage} navigate={setCurrentPage} />;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;