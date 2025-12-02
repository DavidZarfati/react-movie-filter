import { useState, useEffect } from 'react';
import './App.css';
const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {
  return (
    <div className="App">
      <div>
        <ul>
          {films.map((film, index) => (

            <li key={film.id}>
              <h2>{film.title}</h2>
              <h4>Genere:{film.genre}</h4>
            </li>

          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;















// function Contatore() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log(`Il valore di count è cambiato a: ${count}`);
//   }, [count]);
//   const incrementa = () => {
//     setCount(count + 1);
//   };
//   const decrementa = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <h1>Contatore: {count}</h1>
//       <button onClick={incrementa}>Incrementa</button>
//       <button onClick={decrementa}>Decrementa</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Contatore />
//     </div>
//   );
// }

// export default App;
