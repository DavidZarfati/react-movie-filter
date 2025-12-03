import { useState, useEffect } from 'react';
import './App.css';

// array di oggetti iniziale
const filmsIniziali = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];




function App() {
  // Calcola i generi unici iniziali(inteso come ogni genere presente univocamente nella lista originale)
  // Uso la reduce(Grazie Samuel) per creare il nuovo array con solo i generi univoci
  const generiIniziali = filmsIniziali.reduce((arrayGeneri, film) => {
    // nel mio if, filtro per vedere se il mio array di appoggio contiene gia il genere, senno lo aggiungo e poi Ritorno l'array completo
    if (!arrayGeneri.includes(film.genre)) arrayGeneri.push(film.genre);
    return arrayGeneri;
  }, []);
  // // // // // // // Sezione Usestate
  const [nuovoTitolo, impostaNuovoFilm] = useState("");
  const [nuovoGenere, impostaNuovoGenere] = useState("");
  const [films, impostaFilms] = useState(filmsIniziali);
  const [searchTerm, setSearchTerm] = useState("");
  const [filmsFiltrati, setFilmsFiltrati] = useState(filmsIniziali);
  const [generiUnici, setGeneriUnici] = useState(generiIniziali);
  const [genereFiltro, setGenereFiltro] = useState('');

  // Funzione per gestire l'invio
  function gestisciInvio(event) {
    event.preventDefault();
    // controllo (uso trim per togliere gli spazi) e confronto se quindi è vuoto o fatto solo di spazi
    if (nuovoTitolo.trim()) {
      // Se valido aggiungo il nuovo oggetto film con il titolo appunto e con il prossimo IF anche il genere(se ne ho messo 1)(And pigro in react)
      impostaFilms([...films, { title: nuovoTitolo, genre: nuovoGenere }]);
      // Aggiorna generiUnici solo se il nuovo genere non è già presente
      if (nuovoGenere.trim() && !generiUnici.includes(nuovoGenere)) {
        setGeneriUnici([...generiUnici, nuovoGenere]);
      }
      impostaNuovoFilm('');
      impostaNuovoGenere('');
    }
  }
  // Uso di useEffect,(X Loris, ho provato a farlo Cosi, non so se era cosi che avrei dovuto)
  useEffect(() => {
    let filtrati = films;
    if (searchTerm.length > 0) {
      const search = searchTerm.toLowerCase();
      filtrati = filtrati.filter(film =>
        film.title.toLowerCase().includes(search) ||
        film.genre.toLowerCase().includes(search)
      );
    }
    if (genereFiltro) {
      filtrati = filtrati.filter(film => film.genre === genereFiltro);
    }
    setFilmsFiltrati(filtrati);
  }, [searchTerm, films, genereFiltro]);
  // Queste sopra, sono le dipendenze di useeffect,(l'array di dipendenze come detto da Olga e Loris)
  // Funzione per rimuovere un film dalla lista
  function removeFilm(indexToRemove) {
    const updatedFilms = films.filter((_, idx) => idx !== indexToRemove);
    impostaFilms(updatedFilms);
  }

  return (
    <div className="pagina-intera">
      <div className="sezione-film">
        <form onSubmit={gestisciInvio}>
          <input type="text" placeholder='titolo' value={nuovoTitolo} onChange={(event) => { impostaNuovoFilm(event.target.value) }} />
          <input type="text" placeholder='genere' value={nuovoGenere} onChange={(event) => { impostaNuovoGenere(event.target.value) }} />
          <button type="submit">Aggiungi Film</button>
        </form>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
          <input
            type="text"
            placeholder="Cerca per nome o per genere..."
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
          />
          <select value={genereFiltro} onChange={e => setGenereFiltro(e.target.value)}>
            <option value="">Tutti i generi</option>
            {generiUnici.map((genere, idx) => (
              <option key={genere + idx} value={genere}>{genere}</option>
            ))}
          </select>
        </div>
        <div className='film'>
          <ul className='flex'>
            {filmsFiltrati.map((film, index) => (
              <li key={film.title + film.genre + index}>
                <div className="film-sopra">
                  <h2>{film.title}</h2>
                  <button onClick={() => removeFilm(index)}>X</button>
                </div>
                <h4>Genere: {film.genre}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lista-generi">
        <div className='array-generi'>
          <h3>Lista dei generi disponibili</h3>
          <ul>
            {generiUnici.map((genere, index) => (
              <li key={genere + index}>{genere}</li>
            ))}
          </ul>
        </div>
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
