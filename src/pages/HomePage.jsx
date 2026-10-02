// src/pages/HomePage.jsx
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import '../styles/HomePage.css';

export function HomePage({ language, setLanguage, navigate }) {
  const texts = {
    es: {
      title: 'Datos del Estudiante',
      name: 'Nombre',
      career: 'Carrera',
      teacher: 'Maestro',
      work: 'Trabajo'
    },
    en: {
      title: 'Student Data',
      name: 'Name',
      career: 'Career',
      teacher: 'Teacher',
      work: 'Assignment'
    }
  };

  const t = texts[language];

  return (
    <div className="main-layout">
      <Sidebar language={language} setLanguage={setLanguage} navigate={navigate} />
      
      <main className="content-area">
        <div className="info-card">
          <h1>{t.title}</h1>
          <ul className="info-list">
            <li><strong>{t.name}:</strong> Angel Mauricio Lozada Camacho</li>
            <li><strong>{t.career}:</strong> Ingeniería en Sistemas Computacionales (ITESI)</li>
            <li><strong>{t.teacher}:</strong> [Manuel Alejandro Guzman]</li>
            <li><strong>{t.work}:</strong> P2 TTPN GLOSARIO PROLOG - Instrumento Web Bilingüe</li>
          </ul>
        </div>
      </main>
    </div>
  );
}