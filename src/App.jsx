import { useState, useEffect } from 'react';
import './App.css';
const filmsIniziali = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];


function App() {
  const [nuovoTitolo, impostaNuovoFilm] = useState("");
  const [nuovoGenere, impostaNuovoGenere] = useState("");
  const [films, impostaFilms] = useState(filmsIniziali);
  function gestisciInvio(event) {
    event.preventDefault();
    if (nuovoTitolo.trim()) {
      console.log('SUBMIT: ', nuovoTitolo, nuovoGenere);
      impostaFilms([...films, { title: nuovoTitolo, genre: nuovoGenere }]);
      impostaNuovoFilm('');
      impostaNuovoGenere('');
    }
  }


  return (
    <div className="App">
      <form onSubmit={gestisciInvio}>
        <input type="text" placeholder='titolo' value={nuovoTitolo} onChange={(event) => { impostaNuovoFilm(event.target.value) }} />
        <input type="text" placeholder='genere' value={nuovoGenere} onChange={(event) => { impostaNuovoGenere(event.target.value) }} />
        <button type="submit">Aggiungi Film</button>
      </form>


      <div>
        <ul>
          {films.map((film, index) => (
            <li key={film.title + film.genre + index}>
              <h2>{film.title}</h2>
              <h4>Genere: {film.genre}</h4>
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
