import { useEffect, useState } from 'react';

function App() {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  useEffect(() => {
    console.log(inputText);
  }, [inputText]);

  return (
    <>
      <p>{inputText}</p>
      <input type="text" value={inputText} onChange={handleChange} />  
      <input type="text" onChange={handleChange} />  
      <button type='button' onClick={() => alert(inputText)}>Clique aqui</button>
    </>
  )
}

export default App
