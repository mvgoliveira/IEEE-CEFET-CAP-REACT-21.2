import React from 'react';
import Button from './components/Button';

//Estrutura básica de uma classe em React
class App extends React.Component {
  //É um metedo especial para inicializar os estados presentes na classe
  constructor(props) { 
    //Sempre que uma classe extender alguma coisa, ou seja, estar dentro de uma hierarquia é necessário chamar o "super" e passar o props
    super(props) 
    //Aqui é onde guardaremos os atributos da classe, nesse exemplo so possui o count, mas poderia ter nome, id, preço, etc por exemplo
    this.state = { 
      count: 0
    };
  }
  
  //Aqui temos um método da classe App, é como se fosse uma função que sempre que chamada incrementa 1 em count
  addCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render () {
    return (
      <>
        <h1>{this.state.count}</h1>
         //Agora o nosso botão possui uma função que através de uma arrow function sempre que o botão é clicado o count aumenta em 1
        <Button text="Clique aqui" fx={() => this.addCount()}/>
      </>
    )
  }
}

export default App
