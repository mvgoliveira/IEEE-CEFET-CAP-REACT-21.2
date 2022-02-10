import { useEffect, useState } from 'react';
import Button from './components/Button';

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    alert("Iniciou!");
  }, []);

  useEffect(() => {
    alert(`Clicou ${count} vezes`);
  }, [count]);

  function addCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <Button text="Clique aqui" fx={() => addCount()}/>
    </>
  )
}

export default App
