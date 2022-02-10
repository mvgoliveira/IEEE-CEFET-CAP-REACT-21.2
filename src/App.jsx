import { useState } from 'react';
import Button from './components/Button';

function App() {
  let [count, setCount] = useState(0);

  function addCount() {
    setCount(count++);
  }

  return (
    <>
      <h1>{count}</h1>
      <Button text="Clique aqui" fx={addCount}/>
    </>
  )
}

export default App
