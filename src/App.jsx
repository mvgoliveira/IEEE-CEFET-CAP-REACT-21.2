import Button from './components/Button';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Button text="Clique aqui"/>
      <Button>Click here!</Button>
      <Button text="Clique ali"/>
      <Button text="Clique acola"/> 
    </>

    // um componente não precisa ter obrigatoriamente todas as propriedades que
    // foram atribuídas a ele, como é o caso do children.
  )
}

export default App
