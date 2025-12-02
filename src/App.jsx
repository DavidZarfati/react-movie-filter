import { useState, useEffect } from 'react';
import './App.css';

function Contatore() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Il valore di count è cambiato a: ${count}`);
  }, [count]);
  const incrementa = () => {
    setCount(count + 1);
  };
  const decrementa = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Contatore: {count}</h1>
      <button onClick={incrementa}>Incrementa</button>
      <button onClick={decrementa}>Decrementa</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Contatore />
    </div>
  );
}

export default App;
