
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
  // Calcola i generi unici iniziali
  const generiIniziali = filmsIniziali.reduce((acc, film) => {
    if (!acc.includes(film.genre)) acc.push(film.genre);
    return acc;
  }, []);

  const [nuovoTitolo, impostaNuovoFilm] = useState("");
  const [nuovoGenere, impostaNuovoGenere] = useState("");
  const [films, impostaFilms] = useState(filmsIniziali);
  const [searchTerm, setSearchTerm] = useState("");
  const [filmsFiltrati, setFilmsFiltrati] = useState(filmsIniziali);
  const [generiUnici, setGeneriUnici] = useState(generiIniziali);

  function gestisciInvio(event) {
    event.preventDefault();
    if (nuovoTitolo.trim()) {
      impostaFilms([...films, { title: nuovoTitolo, genre: nuovoGenere }]);
      // Aggiorna generiUnici solo se il nuovo genere non è già presente
      if (nuovoGenere.trim() && !generiUnici.includes(nuovoGenere)) {
        setGeneriUnici([...generiUnici, nuovoGenere]);
      }
      impostaNuovoFilm('');
      impostaNuovoGenere('');
    }
  }

  useEffect(() => {
    const filtrati = searchTerm.length === 0
      ? films
      : films.filter(film => {
        const search = searchTerm.toLowerCase();
        return (
          film.title.toLowerCase().includes(search) ||
          film.genre.toLowerCase().includes(search)
        );
      });
    setFilmsFiltrati(filtrati);
  }, [searchTerm, films]);

  return (
    <div className="App">
      <form onSubmit={gestisciInvio}>
        <input type="text" placeholder='titolo' value={nuovoTitolo} onChange={(event) => { impostaNuovoFilm(event.target.value) }} />
        <input type="text" placeholder='genere' value={nuovoGenere} onChange={(event) => { impostaNuovoGenere(event.target.value) }} />
        <button type="submit">Aggiungi Film</button>
      </form>
      <input
        type="text"
        placeholder="Cerca per nome o per genere..."
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />

      <div>
        <ul>
          {filmsFiltrati.map((film, index) => (
            <li key={film.title + film.genre + index}>
              <h2>{film.title}</h2>
              <h4>Genere: {film.genre}</h4>
            </li>
          ))}
        </ul>
      </div>
      <div className='array-generi'>
        {/* <h3>Lista dei generi disponibili</h3> */}
        <ul>
          {generiUnici.map((genere, index) => (
            <li key={genere + index}>{genere}</li>
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
