// src/pages/FunctionalPage.jsx
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import '../styles/HomePage.css'; // Reutilizamos el layout principal
import '../styles/Concepts.css';

export function FunctionalPage({ language, setLanguage, navigate }) {
  const concepts = {

    es: {

        title: 'Paradigma Funcional',

        items: [

            {
                name: 'Mónadas',

                desc: 'Estructuras utilizadas para representar y encadenar cálculos que pueden involucrar un contexto determinado, como posibles errores, estado, entrada y salida de datos o valores opcionales. Permiten combinar operaciones manteniendo control sobre dicho contexto. En Haskell, por ejemplo, la mónada IO permite trabajar con operaciones de entrada y salida dentro de un lenguaje funcional. Las mónadas también cuentan con leyes que deben cumplir sus operaciones para mantener un comportamiento consistente.',

                extra: 'Son especialmente útiles cuando un programa necesita realizar una secuencia de operaciones que producen efectos o dependen de un contexto. Haskell utiliza mónadas como IO, Maybe y listas.'
            },

            {
                name: 'Funciones de Orden Superior',

                desc: 'Son funciones que pueden recibir otras funciones como argumentos, devolver funciones como resultado o realizar ambas operaciones. Esto permite tratar las funciones como valores y construir operaciones más generales y reutilizables.',

                extra: 'Un ejemplo clásico es map, que recibe una función y una lista y aplica esa función a cada elemento. Este concepto permite crear código más compacto, modular y reutilizable.'
            },

            {
                name: 'Evaluación Perezosa',

                desc: 'Es una estrategia de evaluación en la que una expresión no se calcula inmediatamente, sino hasta que su resultado realmente es necesario. Haskell utiliza una semántica no estricta, lo que permite retrasar determinados cálculos.',

                extra: 'Esta característica permite trabajar con estructuras de datos potencialmente infinitas y evitar cálculos innecesarios. Sin embargo, también puede generar costos adicionales de memoria debido a las expresiones pendientes de evaluación, conocidas como thunks.'
            },

            {
                name: 'Inmutabilidad',

                desc: 'Es la propiedad mediante la cual un valor no modifica su contenido después de haber sido creado. En lugar de cambiar directamente un dato existente, se crea un nuevo valor a partir del anterior.',

                extra: 'La inmutabilidad facilita el razonamiento sobre los programas porque reduce los cambios de estado y los efectos secundarios. También puede facilitar determinadas técnicas de concurrencia y hacer más predecible el comportamiento de las funciones.'
            },

            {
                name: 'Currificación',

                desc: 'Es una técnica mediante la cual una función que normalmente recibe varios argumentos se representa como una secuencia de funciones, donde cada función recibe un argumento y devuelve otra función.',

                extra: 'Por ejemplo, una función que conceptualmente recibe dos números puede representarse como una función que recibe el primer número y devuelve otra función que espera el segundo. Esto permite realizar aplicaciones parciales y reutilizar funciones con determinados argumentos ya establecidos.'
            },

            {
                name: 'Clausuras',

                desc: 'Son funciones capaces de conservar o capturar las variables disponibles en el entorno léxico donde fueron creadas. Gracias a esto, una función puede utilizar información de su entorno incluso después de que la ejecución del contexto original haya terminado.',

                extra: 'Las clausuras son especialmente útiles para crear funciones especializadas, encapsular información y mantener determinados valores entre llamadas sin utilizar variables globales.'
            },

            {
                name: 'Recursividad',

                desc: 'Es una técnica en la que una función se llama a sí misma para resolver un problema dividiéndolo en casos más pequeños. En la programación funcional tiene una importancia especial porque muchos algoritmos pueden expresarse mediante funciones recursivas en lugar de utilizar estructuras de repetición tradicionales.',

                extra: 'Una función recursiva normalmente necesita un caso base que detenga las llamadas y un caso recursivo que reduzca el problema.'
            },

            {
                name: 'Composición de Funciones',

                desc: 'Consiste en combinar dos o más funciones para formar una nueva función. La salida de una función se utiliza como entrada de otra, permitiendo construir operaciones complejas a partir de funciones pequeñas.',

                extra: 'La composición favorece la modularidad, ya que permite dividir un problema en funciones independientes y posteriormente combinarlas para obtener el resultado final.'
            },

            {
                name: 'Funciones Puras',

                desc: 'Son funciones cuyo resultado depende únicamente de sus argumentos y que no producen efectos secundarios observables. Si se ejecutan con los mismos argumentos, producen el mismo resultado.',

                extra: 'Las funciones puras facilitan las pruebas, el razonamiento sobre el código y determinadas optimizaciones, ya que su comportamiento es predecible.'
            },

            {
                name: 'Transparencia Referencial',

                desc: 'Es la propiedad que permite sustituir una expresión por su resultado sin cambiar el comportamiento del programa. Está estrechamente relacionada con las funciones puras y facilita el razonamiento matemático sobre el código.',

                extra: 'Cuando una función no depende de información externa ni modifica estados, resulta más sencillo determinar qué resultado producirá y reemplazar una llamada por su valor correspondiente.'
            },

            {
                name: 'Pattern Matching',

                desc: 'Es una técnica utilizada para comparar la estructura de un dato con diferentes patrones y ejecutar el código correspondiente al patrón que coincide. Es una característica importante de lenguajes funcionales como Haskell.',

                extra: 'Permite trabajar de manera clara con listas, tipos de datos y estructuras complejas, evitando en muchos casos una gran cantidad de condiciones anidadas.'
            },

            {
                name: 'Tipos Algebraicos',

                desc: 'Son tipos de datos que permiten construir nuevos tipos combinando otros tipos mediante diferentes alternativas o estructuras. Son utilizados ampliamente en lenguajes funcionales para representar información de forma precisa.',

                extra: 'En Haskell se pueden utilizar junto con pattern matching para definir y procesar estructuras de datos de manera expresiva y segura.'
            }

        ]

    },


    en: {

        title: 'Functional Paradigm',

        items: [

            {
                name: 'Monads',

                desc: 'Structures used to represent and chain computations that involve a particular context, such as possible errors, state, input and output, or optional values. They allow operations to be combined while maintaining control over that context.',

                extra: 'They are especially useful when a program needs to perform a sequence of operations involving computational effects. Haskell uses monads such as IO, Maybe, and lists.'
            },

            {
                name: 'Higher-Order Functions',

                desc: 'Functions that can receive other functions as arguments, return functions as results, or do both. This allows functions to be treated as values and makes it possible to create more general and reusable operations.',

                extra: 'A classic example is map, which receives a function and a list and applies the function to each element.'
            },

            {
                name: 'Lazy Evaluation',

                desc: 'An evaluation strategy in which an expression is not calculated immediately, but only when its result is actually required. Haskell uses non-strict semantics that allow certain computations to be delayed.',

                extra: 'This makes it possible to work with potentially infinite data structures and avoid unnecessary calculations. However, delayed computations can also introduce memory overhead.'
            },

            {
                name: 'Immutability',

                desc: 'The property by which a value cannot be modified after it has been created. Instead of directly changing existing data, a new value is created based on the previous one.',

                extra: 'Immutability reduces state changes and side effects, making programs easier to reason about and potentially easier to handle in concurrent environments.'
            },

            {
                name: 'Currying',

                desc: 'A technique in which a function that conceptually receives multiple arguments is represented as a sequence of functions, with each function receiving one argument and returning another function.',

                extra: 'Currying makes partial application possible, allowing functions to be specialized by providing some arguments in advance.'
            },

            {
                name: 'Closures',

                desc: 'Functions that capture variables from the lexical environment in which they were created. This allows a function to access information from its surrounding scope even after that original context has finished executing.',

                extra: 'Closures are useful for creating specialized functions, encapsulating information, and preserving values between function calls.'
            },

            {
                name: 'Recursion',

                desc: 'A technique in which a function calls itself to solve a problem by breaking it into smaller problems. Recursion is particularly important in functional programming because many algorithms can be expressed through recursive functions.',

                extra: 'A recursive function normally requires a base case that stops the recursive calls and a recursive case that reduces the problem.'
            },

            {
                name: 'Function Composition',

                desc: 'The process of combining two or more functions to create a new function. The output of one function becomes the input of another.',

                extra: 'Function composition encourages modularity by allowing complex operations to be constructed from smaller and independent functions.'
            },

            {
                name: 'Pure Functions',

                desc: 'Functions whose result depends only on their arguments and that do not produce observable side effects. Calling them with the same arguments produces the same result.',

                extra: 'Pure functions make testing and reasoning about programs easier because their behavior is predictable.'
            },

            {
                name: 'Referential Transparency',

                desc: 'The property that allows an expression to be replaced by its result without changing the behavior of the program. It is closely related to pure functions.',

                extra: 'When a function does not depend on external information or modify state, its calls can be reasoned about and replaced by their corresponding values.'
            },

            {
                name: 'Pattern Matching',

                desc: 'A technique used to compare the structure of data against different patterns and execute the code associated with the matching pattern.',

                extra: 'It is widely used in functional languages such as Haskell and provides a clear way to work with lists, data structures, and different cases.'
            },

            {
                name: 'Algebraic Data Types',

                desc: 'Data types that allow new types to be constructed by combining existing types through different alternatives or structures.',

                extra: 'In Haskell, they can be combined with pattern matching to represent and process complex data in an expressive and structured way.'
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