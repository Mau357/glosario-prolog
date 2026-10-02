// src/pages/LogicalPage.jsx
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import '../styles/HomePage.css';
import '../styles/Concepts.css';

export function LogicalPage({ language, setLanguage, navigate }) {
  const concepts = {

    es: {

        title: 'Paradigma Lógico',

        items: [

            {
                name: 'Cortes (Cut /)',
                desc: 'Operador que controla el proceso de backtracking en Prolog. Permite indicar que, una vez alcanzado determinado punto, no se deben explorar algunas alternativas anteriores.',

                extra: 'El cut se utiliza principalmente para controlar la búsqueda y evitar soluciones innecesarias. Sin embargo, su uso debe hacerse con cuidado, ya que puede cambiar el comportamiento lógico de un programa al impedir que Prolog explore determinadas alternativas.'
            },

            {
                name: 'Hechos (Facts)',
                desc: 'Afirmaciones básicas que representan información conocida dentro de una base de conocimientos. Los hechos establecen relaciones o propiedades que el programa considera verdaderas.',

                extra: 'Por ejemplo, en Prolog se puede escribir "padre(juan, pedro)." para indicar que Juan es padre de Pedro. Los hechos constituyen la información inicial a partir de la cual el sistema puede realizar consultas y deducciones.'
            },

            {
                name: 'Reglas (Rules)',
                desc: 'Declaraciones que establecen relaciones entre condiciones y conclusiones. Permiten que el sistema deduzca nuevos conocimientos a partir de hechos existentes.',

                extra: 'Una regla de Prolog tiene normalmente una cabeza y un cuerpo. Por ejemplo, "abuelo(X, Z) :- padre(X, Y), padre(Y, Z)." permite deducir que X es abuelo de Z cuando X es padre de Y y Y es padre de Z.'
            },

            {
                name: 'Unificación',
                desc: 'Proceso mediante el cual Prolog intenta hacer que dos términos sean iguales buscando las sustituciones apropiadas para sus variables.',

                extra: 'La unificación es fundamental para realizar consultas y aplicar reglas. Por ejemplo, si se compara "padre(X, maria)" con "padre(juan, maria)", Prolog puede unificar X con "juan".'
            },

            {
                name: 'Cláusulas de Horn',
                desc: 'Fórmulas lógicas que contienen como máximo un literal positivo. Constituyen una de las bases teóricas de la programación lógica y son utilizadas para representar hechos y reglas.',

                extra: 'Las cláusulas de Horn permiten expresar relaciones de una manera que puede ser utilizada por sistemas de inferencia automática. Prolog utiliza una forma restringida de estas cláusulas para representar conocimiento y realizar deducciones.'
            },

            {
                name: 'Backtracking',
                desc: 'Mecanismo mediante el cual Prolog explora diferentes alternativas para encontrar soluciones. Cuando una posibilidad no produce resultados, el sistema regresa a un punto anterior e intenta otra alternativa.',

                extra: 'Este mecanismo permite que una consulta pueda producir múltiples soluciones. Prolog explora las alternativas disponibles y retrocede automáticamente cuando una rama de búsqueda no puede satisfacer los objetivos establecidos.'
            },

            {
                name: 'Consultas (Queries)',
                desc: 'Preguntas realizadas al sistema lógico para determinar si una relación puede demostrarse a partir de los hechos y reglas existentes.',

                extra: 'Una consulta puede contener variables, permitiendo obtener diferentes valores que satisfacen una determinada relación. Por ejemplo, "padre(X, pedro)." puede utilizarse para buscar quién es padre de Pedro.'
            },

            {
                name: 'Predicados',
                desc: 'Símbolos utilizados para representar relaciones entre objetos o propiedades de los mismos. Los predicados constituyen una de las principales unidades de representación de conocimiento en Prolog.',

                extra: 'Un predicado puede tener diferentes números de argumentos, conocidos como aridad. Por ejemplo, "padre/2" representa un predicado llamado padre que recibe dos argumentos.'
            },

            {
                name: 'Inferencia',
                desc: 'Proceso mediante el cual el sistema obtiene nuevas conclusiones utilizando los hechos y reglas disponibles en su base de conocimientos.',

                extra: 'En programación lógica, la inferencia permite responder consultas sin que todas las respuestas tengan que estar almacenadas explícitamente. El sistema utiliza las reglas para derivar información nueva.'
            },

            {
                name: 'Resolución SLD',
                desc: 'Método de inferencia utilizado por Prolog para resolver consultas mediante la selección de objetivos, unificación y aplicación de cláusulas de Horn.',

                extra: 'SLD significa Selective Linear Definite clause resolution. Este procedimiento combina resolución lógica con una estrategia de selección de objetivos y constituye la base del mecanismo de ejecución de Prolog.'
            }

        ]

    },


    en: {

        title: 'Logical Paradigm',

        items: [

            {
                name: 'Cut (/)',
                desc: 'An operator that controls the backtracking process in Prolog. It indicates that, once a certain point has been reached, some previous alternatives should no longer be explored.',

                extra: 'The cut is mainly used to control the search process and avoid unnecessary solutions. However, it must be used carefully because it can change the logical behavior of a program by preventing Prolog from exploring certain alternatives.'
            },

            {
                name: 'Facts',
                desc: 'Basic assertions that represent known information within a knowledge base. Facts establish relationships or properties that the program considers to be true.',

                extra: 'For example, "father(juan, pedro)." can indicate that Juan is Pedro’s father. Facts provide the initial information from which the system can perform queries and deductions.'
            },

            {
                name: 'Rules',
                desc: 'Declarations that establish relationships between conditions and conclusions. They allow the system to derive new knowledge from existing facts.',

                extra: 'A Prolog rule normally has a head and a body. For example, "grandfather(X, Z) :- father(X, Y), father(Y, Z)." can derive that X is the grandfather of Z when X is the father of Y and Y is the father of Z.'
            },

            {
                name: 'Unification',
                desc: 'The process by which Prolog attempts to make two terms identical by finding appropriate substitutions for their variables.',

                extra: 'Unification is fundamental for queries and rule application. For example, comparing "father(X, maria)" with "father(juan, maria)" allows Prolog to unify X with "juan".'
            },

            {
                name: 'Horn Clauses',
                desc: 'Logical formulas containing at most one positive literal. They form one of the theoretical foundations of logic programming and are used to represent facts and rules.',

                extra: 'Horn clauses allow relationships to be expressed in a form that can be processed by automated inference systems. Prolog uses a restricted form of Horn clauses to represent knowledge and perform deductions.'
            },

            {
                name: 'Backtracking',
                desc: 'A mechanism through which Prolog explores different alternatives to find solutions. When one possibility fails, the system returns to a previous point and tries another alternative.',

                extra: 'This mechanism allows a query to produce multiple solutions. Prolog automatically explores the available alternatives and backtracks when a branch of the search cannot satisfy the established goals.'
            },

            {
                name: 'Queries',
                desc: 'Questions submitted to the logical system to determine whether a relationship can be proven using the available facts and rules.',

                extra: 'A query can contain variables, allowing the system to find different values that satisfy a particular relationship. For example, "father(X, pedro)." can be used to find who is Pedro’s father.'
            },

            {
                name: 'Predicates',
                desc: 'Symbols used to represent relationships between objects or properties of objects. Predicates are one of the main units used to represent knowledge in Prolog.',

                extra: 'A predicate can have a specific number of arguments, known as its arity. For example, "father/2" represents a predicate named father that receives two arguments.'
            },

            {
                name: 'Inference',
                desc: 'The process through which the system derives new conclusions using the facts and rules contained in its knowledge base.',

                extra: 'In logic programming, inference allows the system to answer queries without requiring every possible answer to be explicitly stored. The system uses rules to derive new information.'
            },

            {
                name: 'SLD Resolution',
                desc: 'An inference method used by Prolog to solve queries through goal selection, unification, and the application of Horn clauses.',

                extra: 'SLD stands for Selective Linear Definite clause resolution. This procedure combines logical resolution with a goal-selection strategy and forms the basis of Prolog’s execution mechanism.'
            }

        ]

    }

};

  const t = concepts[language];

  return (
    <div className="main-layout">
      <Sidebar language={language} setLanguage={setLanguage} navigate={navigate} />
      
      <main className="content-area">
        <div className="concepts-container">
          <h1 className="concepts-title">{t.title}</h1>
          <div className="concepts-grid">
            {t.items.map((item, index) => (
              <div key={index} className="concept-card">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <p className="concept-extra">
                {item.extra}
              </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}